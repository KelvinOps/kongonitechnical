'use client';

import { useState, useRef, useEffect } from 'react';
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

// ─── IMPORTANT: Rename your audio file to remove spaces ───────────────────────
// From: "Kongoni tvc audio Recordings of service delivery charter.m4a"
// To:   "service-charter-audio.m4a"
// Then place it in your Next.js /public/documents/ folder.
//
// Also add this to your next.config.js to ensure .m4a is served correctly:
//
//   headers: async () => [{
//     source: '/documents/:file*',
//     headers: [{ key: 'Accept-Ranges', value: 'bytes' }],
//   }],
// ──────────────────────────────────────────────────────────────────────────────

const AUDIO_SRC = '/documents/service-charter-audio.m4a';

export default function ServiceCharterAudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsReady(true);
      setIsLoading(false);
      setHasError(false);
    };
    const handleWaiting  = () => setIsLoading(true);
    const handlePlaying  = () => { setIsLoading(false); setHasError(false); };
    const handleError    = () => {
      const err = audio.error;
      const messages: Record<number, string> = {
        1: 'MEDIA_ERR_ABORTED – playback was aborted.',
        2: 'MEDIA_ERR_NETWORK – network error while loading.',
        3: 'MEDIA_ERR_DECODE – audio could not be decoded.',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED – file not found or format unsupported.',
      };
      console.error(
        '[Audio] Load failed:',
        err ? messages[err.code] ?? err.message : 'Unknown error',
        '\nCheck: public' + AUDIO_SRC + ' exists and has no spaces in the filename.'
      );
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener('canplay',  handleCanPlay);
    audio.addEventListener('waiting',  handleWaiting);
    audio.addEventListener('playing',  handlePlaying);
    audio.addEventListener('error',    handleError);
    audio.load();

    return () => {
      audio.removeEventListener('canplay',  handleCanPlay);
      audio.removeEventListener('waiting',  handleWaiting);
      audio.removeEventListener('playing',  handlePlaying);
      audio.removeEventListener('error',    handleError);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (!isReady) {
      setIsLoading(true);
      await new Promise<void>((resolve) => {
        const onReady = () => {
          audio.removeEventListener('canplay', onReady);
          setIsReady(true);
          setIsLoading(false);
          resolve();
        };
        audio.addEventListener('canplay', onReady);
      });
    }

    try {
      setIsLoading(true);
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error('[Audio] play() rejected:', err);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const dur = audioRef.current.duration;
      if (isFinite(dur)) setDuration(dur);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      const dur = audioRef.current.duration;
      if (isFinite(dur) && dur > 0) setDuration(dur);
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
      const newTime = Math.max(0, Math.min(audioRef.current.currentTime + seconds, duration));
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time) || time === 0) return '0:00';
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const downloadAudio = () => {
    const link = document.createElement('a');
    link.href = AUDIO_SRC;
    link.download = 'KTVC-Service-Charter-Audio.m4a';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section className="py-12 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Charter</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality service delivery • Ahadi yetu ya utoaji huduma bora
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Audio Player Card */}
          <Card className="overflow-hidden shadow-md border border-gray-200">
            <div className="bg-white p-4">

              {/* Error banner */}
              {hasError && (
                <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Audio file could not be loaded. Make sure{' '}
                    <code className="font-mono bg-red-100 px-1 rounded">
                      public{AUDIO_SRC}
                    </code>{' '}
                    exists and has no spaces in its filename.
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
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onDurationChange={handleDurationChange}
                  onEnded={() => { setIsPlaying(false); setCurrentTime(0); }}
                  className="hidden"
                  preload="auto"
                >
                  {/* Use a single clean src — no spaces in filename */}
                  <source src={AUDIO_SRC} type="audio/mp4" />
                </audio>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(-10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Skip back 10 seconds"
                    disabled={hasError}
                  >
                    <SkipBack className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={togglePlayPause}
                    className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white p-0"
                    title={isPlaying ? 'Pause' : 'Play'}
                    disabled={hasError}
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
                    disabled={hasError}
                  >
                    <SkipForward className="w-3 h-3" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadAudio}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Download Audio"
                    disabled={hasError}
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="mt-3">
                <div className="relative w-full h-1 bg-gray-200 rounded-lg overflow-hidden">
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
                    disabled={!isReady || hasError}
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