// components/accessibility-widget.tsx
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Contrast, 
  Volume2, 
  MousePointer2,
  RefreshCw,
  X,
  Settings
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  dyslexiaFont: boolean;
  cursorSize: number;
  screenReader: boolean;
  reducedMotion: boolean;
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    dyslexiaFont: false,
    cursorSize: 1,
    screenReader: false,
    reducedMotion: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Dyslexia font
    if (settings.dyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }
    
    // Cursor size
    root.style.setProperty('--cursor-size', `${settings.cursorSize}`);
    if (settings.cursorSize > 1) {
      root.classList.add('large-cursor');
    } else {
      root.classList.remove('large-cursor');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      highContrast: false,
      dyslexiaFont: false,
      cursorSize: 1,
      screenReader: false,
      reducedMotion: false,
    };
    setSettings(defaultSettings);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-200 flex items-center justify-center"
          aria-label="Open accessibility options"
          title="Accessibility Options"
        >
          <Accessibility className="w-6 h-6" />
        </Button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl w-80 max-h-96 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Accessibility</h3>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Font Size */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Type className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Font Size</span>
                </div>
                <span className="text-sm text-gray-500">{settings.fontSize}%</span>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => updateSetting('fontSize', Math.max(75, settings.fontSize - 25))}
                  variant="outline"
                  size="sm"
                  disabled={settings.fontSize <= 75}
                >
                  A-
                </Button>
                <Button
                  onClick={() => updateSetting('fontSize', Math.min(150, settings.fontSize + 25))}
                  variant="outline"
                  size="sm"
                  disabled={settings.fontSize >= 150}
                >
                  A+
                </Button>
              </div>
            </div>

            {/* High Contrast */}
            <div className="mb-4">
              <Button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                variant={settings.highContrast ? "default" : "outline"}
                className="w-full justify-start"
                size="sm"
              >
                <Contrast className="w-4 h-4 mr-2" />
                High Contrast
              </Button>
            </div>

            {/* Dyslexia Font */}
            <div className="mb-4">
              <Button
                onClick={() => updateSetting('dyslexiaFont', !settings.dyslexiaFont)}
                variant={settings.dyslexiaFont ? "default" : "outline"}
                className="w-full justify-start"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Dyslexia Friendly Font
              </Button>
            </div>

            {/* Cursor Size */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MousePointer2 className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Cursor Size</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => updateSetting('cursorSize', 1)}
                  variant={settings.cursorSize === 1 ? "default" : "outline"}
                  size="sm"
                >
                  Normal
                </Button>
                <Button
                  onClick={() => updateSetting('cursorSize', 2)}
                  variant={settings.cursorSize === 2 ? "default" : "outline"}
                  size="sm"
                >
                  Large
                </Button>
              </div>
            </div>

            {/* Screen Reader */}
            <div className="mb-4">
              <Button
                onClick={() => {
                  updateSetting('screenReader', !settings.screenReader);
                  if (!settings.screenReader) {
                    speakText("Screen reader mode enabled. I will now read important content aloud.");
                  }
                }}
                variant={settings.screenReader ? "default" : "outline"}
                className="w-full justify-start"
                size="sm"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Screen Reader
              </Button>
            </div>

            {/* Reduced Motion */}
            <div className="mb-4">
              <Button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                variant={settings.reducedMotion ? "default" : "outline"}
                className="w-full justify-start"
                size="sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reduce Motion
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              onClick={resetSettings}
              variant="ghost"
              className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
              size="sm"
            >
              Reset All Settings
            </Button>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .high-contrast * {
          text-shadow: 0 0 1px rgba(0,0,0,0.8) !important;
        }
        
        .dyslexia-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
        }
        
        .large-cursor * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="black"/></svg>') 16 16, auto !important;
        }
        
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}