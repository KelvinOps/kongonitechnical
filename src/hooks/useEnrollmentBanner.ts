// hooks/useEnrollmentBanner.ts - Fixed version
'use client';

import { useState, useEffect } from 'react';

interface IntakePeriod {
  month: number;
  name: string;
  year: number;
  displayStartDate: Date;
  intakeDate: Date;
}

interface EnrollmentBannerState {
  isVisible: boolean;
  currentIntake: IntakePeriod | null;
  daysUntilIntake: number;
}

const INTAKE_PERIODS = [
  { month: 1, name: 'January' },
  { month: 5, name: 'May' },
  { month: 9, name: 'September' },
];

const BANNER_SESSION_KEY = 'enrollmentBannerDismissed';

export const useEnrollmentBanner = () => {
  const [bannerState, setBannerState] = useState<EnrollmentBannerState>({
    isVisible: false,
    currentIntake: null,
    daysUntilIntake: 0,
  });

  const [isInitialized, setIsInitialized] = useState(false);

  const calculateDaysUntilIntake = (intakeDate: Date): number => {
    const now = new Date();
    const diffTime = intakeDate.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Check if banner should be shown
  const shouldShowBanner = (): boolean => {
    if (typeof window === 'undefined') return false;

    // Check if banner was dismissed in this session
    const isDismissed = sessionStorage.getItem(BANNER_SESSION_KEY);
    if (isDismissed === 'true') {
      console.log('🚫 Banner was dismissed in this session');
      return false;
    }

    return true;
  };

  const markBannerAsDismissed = (): void => {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(BANNER_SESSION_KEY, 'true');
  };

  // Enhanced close function that handles navigation
  const closeBanner = (navigateToAdmissions: boolean = false) => {
    console.log('🔒 Closing enrollment banner');
    markBannerAsDismissed();
    setBannerState(prev => ({ ...prev, isVisible: false }));
    
    if (navigateToAdmissions) {
      console.log('🎯 Navigating to admissions page');
      // Use setTimeout to ensure banner is closed before navigation
      setTimeout(() => {
        window.location.href = '/admissions';
      }, 100);
    }
  };

  useEffect(() => {
    const getCurrentIntakePeriod = (): IntakePeriod | null => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;

      console.log('Current date:', now.toDateString());
      console.log('Current month:', currentMonth);

      for (const intake of INTAKE_PERIODS) {
        // Create intake date (1st of the intake month)
        const intakeDate = new Date(currentYear, intake.month - 1, 1);
        
        // Display starts 2 months before intake month
        const displayStartDate = new Date(currentYear, intake.month - 3, 1);
        
        // For January intake, we need to handle November of previous year
        if (intake.month === 1) {
          displayStartDate.setFullYear(currentYear - 1);
          displayStartDate.setMonth(10); // November
        }

        // For May intake, handle March of current year
        if (intake.month === 5) {
          displayStartDate.setMonth(2); // March
        }

        // For September intake, handle July of current year
        if (intake.month === 9) {
          displayStartDate.setMonth(6); // July
        }

        console.log(`Checking ${intake.name} ${currentYear}:`);
        console.log('  Display start:', displayStartDate.toDateString());
        console.log('  Intake date:', intakeDate.toDateString());
        console.log('  Now >= Display start:', now >= displayStartDate);
        console.log('  Now < Intake date:', now < intakeDate);

        // Check if current date is within display period
        if (now >= displayStartDate && now < intakeDate) {
          console.log(`✅ ${intake.name} intake banner should be displayed`);
          return {
            month: intake.month,
            name: intake.name,
            year: currentYear,
            displayStartDate,
            intakeDate,
          };
        }

        // Check next year's intakes for transitions
        if (intake.month === 1) {
          const nextYearIntakeDate = new Date(currentYear + 1, 0, 1);
          const nextYearDisplayStartDate = new Date(currentYear, 10, 1);
          
          if (now >= nextYearDisplayStartDate && now < nextYearIntakeDate) {
            console.log(`✅ January ${currentYear + 1} intake banner should be displayed`);
            return {
              month: intake.month,
              name: intake.name,
              year: currentYear + 1,
              displayStartDate: nextYearDisplayStartDate,
              intakeDate: nextYearIntakeDate,
            };
          }
        }

        if (intake.month === 5) {
          const nextYearIntakeDate = new Date(currentYear + 1, 4, 1);
          const nextYearDisplayStartDate = new Date(currentYear + 1, 2, 1);
          
          if (now >= nextYearDisplayStartDate && now < nextYearIntakeDate) {
            console.log(`✅ May ${currentYear + 1} intake banner should be displayed`);
            return {
              month: intake.month,
              name: intake.name,
              year: currentYear + 1,
              displayStartDate: nextYearDisplayStartDate,
              intakeDate: nextYearIntakeDate,
            };
          }
        }

        if (intake.month === 9) {
          const nextYearIntakeDate = new Date(currentYear + 1, 8, 1);
          const nextYearDisplayStartDate = new Date(currentYear + 1, 6, 1);
          
          if (now >= nextYearDisplayStartDate && now < nextYearIntakeDate) {
            console.log(`✅ September ${currentYear + 1} intake banner should be displayed`);
            return {
              month: intake.month,
              name: intake.name,
              year: currentYear + 1,
              displayStartDate: nextYearDisplayStartDate,
              intakeDate: nextYearIntakeDate,
            };
          }
        }
      }

      console.log('❌ No intake period found for current date');
      return null;
    };

    // Only run once on component mount
    if (isInitialized) return;

    console.log('🔍 Initializing enrollment banner...');

    // Check if we should show the banner
    if (!shouldShowBanner()) {
      setIsInitialized(true);
      return;
    }

    const currentIntake = getCurrentIntakePeriod();
    if (currentIntake) {
      const daysUntil = calculateDaysUntilIntake(currentIntake.intakeDate);
      console.log(`🎯 Setting banner visible for ${currentIntake.name} ${currentIntake.year}`);
      console.log(`📅 Days until intake: ${daysUntil}`);
      
      setBannerState({
        isVisible: true,
        currentIntake,
        daysUntilIntake: daysUntil,
      });
    } else {
      console.log('🚫 No current intake found');
    }

    setIsInitialized(true);
  }, [isInitialized]);

  // Handle apply now click - dismiss banner and navigate
  const handleApplyNow = () => {
    closeBanner(true); // Pass true to navigate to admissions
  };

  return {
    ...bannerState,
    closeBanner: () => closeBanner(false), // Regular close without navigation
    handleApplyNow, // Use this for the "Apply Now" button
  };
};