// hooks/useEnrollmentBanner.ts - Custom hook for enrollment banner logic

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

// Move INTAKE_PERIODS outside the hook since it's a constant
const INTAKE_PERIODS = [
  { month: 1, name: 'January' },
  { month: 5, name: 'May' },
  { month: 9, name: 'September' },
];

export const useEnrollmentBanner = () => {
  const [bannerState, setBannerState] = useState<EnrollmentBannerState>({
    isVisible: false,
    currentIntake: null,
    daysUntilIntake: 0,
  });

  const calculateDaysUntilIntake = (intakeDate: Date): number => {
    const now = new Date();
    const diffTime = intakeDate.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const getCurrentIntakePeriod = (): IntakePeriod | null => {
      const now = new Date();
      const currentYear = now.getFullYear();

      for (const intake of INTAKE_PERIODS) {
        const intakeDate = new Date(currentYear, intake.month - 1, 1);
        const nextYearIntakeDate = new Date(currentYear + 1, intake.month - 1, 1);

        const displayStartDate = new Date(intakeDate);
        displayStartDate.setMonth(displayStartDate.getMonth() - 1);

        const nextYearDisplayStartDate = new Date(nextYearIntakeDate);
        nextYearDisplayStartDate.setMonth(nextYearDisplayStartDate.getMonth() - 1);

        if (now >= displayStartDate && now < intakeDate) {
          return {
            month: intake.month,
            name: intake.name,
            year: currentYear,
            displayStartDate,
            intakeDate,
          };
        }

        if (now >= nextYearDisplayStartDate && now < nextYearIntakeDate) {
          return {
            month: intake.month,
            name: intake.name,
            year: currentYear + 1,
            displayStartDate: nextYearDisplayStartDate,
            intakeDate: nextYearIntakeDate,
          };
        }
      }

      return null;
    };

    const hasDismissedBanner = sessionStorage.getItem('enrollmentBannerDismissed');
    if (hasDismissedBanner === 'true') return;

    const currentIntake = getCurrentIntakePeriod();
    if (currentIntake) {
      const daysUntil = calculateDaysUntilIntake(currentIntake.intakeDate);
      setBannerState({
        isVisible: true,
        currentIntake,
        daysUntilIntake: daysUntil,
      });
    }
  }, []); // Now the dependency array is correct

  const closeBanner = () => {
    sessionStorage.setItem('enrollmentBannerDismissed', 'true');
    setBannerState(prev => ({ ...prev, isVisible: false }));
  };

  return {
    ...bannerState,
    closeBanner,
  };
};