'use client';

import { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Headphones,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Download,
  FileText
} from "lucide-react";

export default function ServiceCharterAudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio controls
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Playback failed:', err);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + seconds;
      audioRef.current.currentTime = Math.max(0, Math.min(newTime, duration));
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const downloadAudio = () => {
    try {
      const link = document.createElement('a');
      link.href = '/documents/Kongoni tvc audio Recordings of service delivery charter.m4a';
      link.download = 'KTVC-Service-Charter-Audio.m4a';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const downloadPDF = (filename: string, displayName: string) => {
    try {
      const link = document.createElement('a');
      link.href = filename;
      link.download = displayName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(filename, '_blank');
    }
  };

  // Calculate progress percentage safely
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Service Charter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality service delivery • Ahadi yetu ya utoaji huduma bora
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Audio Player Card */}
          <Card className="overflow-hidden shadow-md border border-gray-200">
            <div className="bg-white p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Service Charter Audio</h3>
                    <p className="text-xs text-gray-500">Rekodi ya Sauti ya Mkataba wa Huduma</p>
                  </div>
                </div>

                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                  preload="metadata"
                >
                  <source src="/documents/Kongoni tvc audio Recordings of service delivery charter.m4a" type="audio/mp4" />
                  <source src="/documents/Kongoni tvc audio Recordings of service delivery charter.m4a" type="audio/x-m4a" />
                  Your browser does not support the audio element.
                </audio>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(-10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Skip back 10 seconds"
                    disabled={!duration}
                  >
                    <SkipBack className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={togglePlayPause}
                    className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white p-0"
                    title={isPlaying ? "Pause" : "Play"}
                    disabled={!duration}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Skip forward 10 seconds"
                    disabled={!duration}
                  >
                    <SkipForward className="w-3 h-3" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadAudio}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Download Audio"
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="mt-3">
                {/* Progress Bar Container */}
                <div className="relative w-full h-1 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Progress Fill */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  {/* Interactive Range Input */}
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={!duration}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Download PDFs Card */}
          <Card className="overflow-hidden shadow-md border border-gray-200">
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                Download Service Charter
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow hover:border-primary">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-base mb-2">English Version</h4>
                  <p className="text-gray-600 text-xs mb-3">Official Service Charter</p>
                  <Button 
                    onClick={() => downloadPDF('/documents/English-Service-Charter.pdf', 'KTVC-Service-Charter-English.pdf')}
                    className="bg-primary text-white hover:bg-primary/90 w-full"
                    size="sm"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download English PDF
                  </Button>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow hover:border-secondary">
                  <FileText className="w-10 h-10 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-base mb-2">Toleo la Kiswahili</h4>
                  <p className="text-gray-600 text-xs mb-3">Mkataba wa Huduma</p>
                  <Button 
                    onClick={() => downloadPDF('/documents/Kiswahili-Service-Charter.pdf', 'KTVC-Service-Charter-Kiswahili.pdf')}
                    className="bg-secondary text-gray-800 hover:bg-secondary/90 w-full"
                    size="sm"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download Kiswahili PDF
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}