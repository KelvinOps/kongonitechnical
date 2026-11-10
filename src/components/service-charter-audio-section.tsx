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
  FileText,
  Loader2,
  AlertCircle
} from "lucide-react";

const AUDIO_SRC = '/api/service-charter-audio';
const AUDIO_DOWNLOAD = '/api/service-charter-audio?download=1';
const BG_IMAGE = '/images/hero/service-charter-bg.png';

const PDF_EN = '/documents/service-charter/KTVC Service_Charter_English.pdf';
const PDF_SW = '/documents/service-charter/KTVC Service_Charter_Kiswahili.pdf';

export default function ServiceCharterAudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      setHasError(false);
      setIsLoading(true);
      // Called directly inside the click handler so browsers allow it.
      // With preload="none", play() starts loading the file itself.
      await audio.play();
    } catch (err) {
      console.error('[Audio] play() rejected:', err);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handleError = () => {
    const err = audioRef.current?.error;
    const messages: Record<number, string> = {
      1: 'MEDIA_ERR_ABORTED - playback was aborted.',
      2: 'MEDIA_ERR_NETWORK - network error while loading.',
      3: 'MEDIA_ERR_DECODE - audio could not be decoded.',
      4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - file not found or format unsupported.',
    };
    console.error('[Audio] Load failed:', err ? messages[err.code] ?? err.message : 'Unknown error');
    setHasError(true);
    setIsLoading(false);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    const dur = audioRef.current?.duration;
    if (dur && isFinite(dur) && dur > 0) setDuration(dur);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skipTime = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const max = duration > 0 ? duration : audio.currentTime + seconds;
    const newTime = Math.max(0, Math.min(audio.currentTime + seconds, max));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (!isFinite(time) || time <= 0) return '0:00';
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

const downloadAudio = async () => {
  try {
    const res = await fetch(AUDIO_SRC); // same URL that plays fine
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'KTVC-Service-Charter-Audio.m4a';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.error('[Audio] Download failed:', error);
    window.open(AUDIO_DOWNLOAD, '_blank'); // fallback
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
    } catch {
      window.open(filename, '_blank');
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3 drop-shadow">
            Service Delivery Charter
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our commitment to quality service delivery &bull; Ahadi yetu ya utoaji huduma bora
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">

          {/* Audio Player Card */}
          <Card className="overflow-hidden shadow-xl border border-white/20 bg-white/95 backdrop-blur-sm">
            <div className="p-5">

              {hasError && (
                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Audio could not be loaded. Please try again, or use the download button.
                  </span>
                </div>
              )}

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
                  src={AUDIO_SRC}
                  preload="none"
                  className="hidden"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleDurationChange}
                  onDurationChange={handleDurationChange}
                  onWaiting={() => setIsLoading(true)}
                  onCanPlay={() => setIsLoading(false)}
                  onPlaying={() => { setIsLoading(false); setIsPlaying(true); setHasError(false); }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => { setIsPlaying(false); setCurrentTime(0); }}
                  onError={handleError}
                />

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(-10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Skip back 10 seconds"
                  >
                    <SkipBack className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={togglePlayPause}
                    className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white p-0"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isPlaying ? (
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

              <div className="mt-4">
                <div className="relative w-full h-1.5 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={duration === 0}
                    aria-label="Seek audio"
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
          <Card className="overflow-hidden shadow-xl border border-white/20 bg-white/95 backdrop-blur-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                Download Service Charter
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow hover:border-primary">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-base mb-2">English Version</h4>
                  <p className="text-gray-600 text-xs mb-3">Official Service Charter</p>
                  <Button
                    onClick={() => downloadPDF(PDF_EN, 'KTVC-Service-Charter-English.pdf')}
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
                    onClick={() => downloadPDF(PDF_SW, 'KTVC-Service-Charter-Kiswahili.pdf')}
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