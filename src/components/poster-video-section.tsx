"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function PosterVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="poster-video-section">
      {/* Background decoration */}
      <div className="bg-decoration" aria-hidden="true">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-stripe" />
      </div>

      <div className="section-inner">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Featured</span>
          <h2 className="section-title">
            Campus Life &amp; <span className="highlight">Announcements</span>
          </h2>
          <p className="section-subtitle">
            Stay informed with our latest poster releases and introductory
            college video
          </p>
        </div>

        {/* ── Two Posters Row ── */}
        <div className="posters-grid">
          {/* Poster 1 */}
          <div className="card poster-card">
            <div className="card-badge">Official Poster</div>

            <div className="poster-frame">
              {/*
               * POSTER 1: Replace src with your first poster image path.
               * e.g. src="/images/poster1.jpg"
               * Using width/height with style instead of fill prevents
               * layout shift and the "buffering/flash" on page load.
               */}
              <Image
                src="/images/Dual/dualposter.jpeg"
                alt="Kongoni Technical Vocational Training College – Official Poster"
                width={600}
                height={800}
                className="poster-img"
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />

              {/* Overlay gradient */}
              <div className="poster-overlay" aria-hidden="true" />

              {/* Corner accents */}
              <span className="corner corner-tl" aria-hidden="true" />
              <span className="corner corner-br" aria-hidden="true" />
            </div>

            <div className="card-footer">
              <a
                href="/images/Dual/dualposter.jpeg"
                download
                className="btn btn-outline"
                aria-label="Download official poster"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Poster
              </a>
            </div>
          </div>

          {/* Poster 2 */}
          <div className="card poster-card">
            <div className="card-badge">Official Poster</div>

            <div className="poster-frame">
              {/*
               * POSTER 2: Replace src with your second poster image path.
               * e.g. src="/images/poster2.jpg"
               */}
              <Image
                src="/images/Dual/dualkongoniposter.jpeg"
                alt="Kongoni Technical Vocational Training College – Second Official Poster"
                width={600}
                height={800}
                className="poster-img"
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />

              {/* Overlay gradient */}
              <div className="poster-overlay" aria-hidden="true" />

              {/* Corner accents */}
              <span className="corner corner-tl" aria-hidden="true" />
              <span className="corner corner-br" aria-hidden="true" />
            </div>

            <div className="card-footer">
              <a
                href="/images/Dual/dualposter2.jpeg"
                download
                className="btn btn-outline"
                aria-label="Download second official poster"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Poster
              </a>
            </div>
          </div>
        </div>

        {/* ── Video Row (full width, landscape) ── */}
        <div className="video-row">
          <div className="card video-card">
            <div className="card-badge video-badge">Introductory Video</div>

            {/* 16:9 landscape video frame */}
            <div className="video-frame">
              {/*
               * Replace src with your video file path.
               * e.g. src="/videos/intro.mp4"
               * poster should be a landscape thumbnail for best appearance.
               */}
              <video
                ref={videoRef}
                src="/images/Dual/DualVideo.mp4"
                poster="/images/Dual/dualposter.jpeg"
                className="video-el"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="Kongoni TVTC introductory video"
              />

              {/* Custom play overlay (hidden once playing) */}
              {!isPlaying && (
                <div className="play-overlay" onClick={togglePlay}>
                  <div className="play-ripple" aria-hidden="true" />
                  <button className="play-btn" aria-label="Play video">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="32"
                      height="32"
                      aria-hidden="true"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Control bar */}
              <div className="video-controls">
                <button
                  className="ctrl-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                <span className="ctrl-label">
                  {isPlaying ? "Playing" : "Paused"}
                </span>

                <button
                  className="ctrl-btn ctrl-mute"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="card-footer video-footer">
              <p className="video-desc">
                Discover Kongoni TVC — our facilities, programs, and the
                vibrant community that makes us unique. In collaboration with
                Dual TVET Support and Kenya School of TVET.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scoped styles ─────────────────────────────────────────── */}
      <style jsx>{`
        /* ── Layout ─────────────────────────────────────── */
        .poster-video-section {
          position: relative;
          overflow: hidden;
          padding: 5rem 1.5rem;
          background: #f8f7f4;
          font-family: "Georgia", serif;
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Background decoration ───────────────────────── */
        .bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
        }
        .bg-circle-1 {
          width: 600px;
          height: 600px;
          background: #1a3a5c;
          top: -200px;
          right: -150px;
        }
        .bg-circle-2 {
          width: 400px;
          height: 400px;
          background: #c8972b;
          bottom: -150px;
          left: -100px;
        }
        .bg-stripe {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1a3a5c 0%, #c8972b 50%, #1a3a5c 100%);
        }

        /* ── Section header ──────────────────────────────── */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-tag {
          display: inline-block;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c8972b;
          border: 1.5px solid #c8972b;
          padding: 0.25rem 0.9rem;
          border-radius: 2px;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #1a3a5c;
          margin: 0 0 0.75rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .highlight {
          color: #c8972b;
          font-style: italic;
        }
        .section-subtitle {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 1rem;
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Posters grid (2 columns) ────────────────────── */
        .posters-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
          margin-bottom: 2rem;
        }
        @media (max-width: 640px) {
          .posters-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Video row (full width below posters) ────────── */
        .video-row {
          width: 100%;
        }

        /* ── Card shared ─────────────────────────────────── */
        .card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(26, 58, 92, 0.08),
            0 1px 4px rgba(26, 58, 92, 0.06);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          position: relative;
        }
        .card:hover {
          box-shadow: 0 12px 40px rgba(26, 58, 92, 0.15),
            0 2px 8px rgba(26, 58, 92, 0.08);
          transform: translateY(-3px);
        }
        .card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 10;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #1a3a5c;
          color: #fff;
          padding: 0.3rem 0.75rem;
          border-radius: 3px;
        }
        .video-badge {
          background: #c8972b;
        }
        .card-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid #f0ede8;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .video-footer {
          /* Allow text to wrap naturally in the wider video footer */
          align-items: flex-start;
        }

        /* ── Poster card ─────────────────────────────────── */
        .poster-frame {
          /*
           * KEY FIX: explicit width+height on <Image> combined with
           * position:relative + overflow:hidden here (no fill prop)
           * means the browser knows the dimensions immediately from HTML
           * — no layout shift, no visible "buffering" flash.
           */
          position: relative;
          width: 100%;
          /* Portrait 3:4 ratio */
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #e8e4dc;
        }
        .poster-img {
          transition: transform 0.5s ease;
        }
        .card:hover .poster-img {
          transform: scale(1.03);
        }
        .poster-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 60%,
            rgba(26, 58, 92, 0.35) 100%
          );
          pointer-events: none;
        }

        /* Corner accents */
        .corner {
          position: absolute;
          width: 22px;
          height: 22px;
          z-index: 5;
          pointer-events: none;
        }
        .corner-tl {
          top: 10px;
          left: 10px;
          border-top: 2.5px solid #c8972b;
          border-left: 2.5px solid #c8972b;
        }
        .corner-br {
          bottom: 10px;
          right: 10px;
          border-bottom: 2.5px solid #c8972b;
          border-right: 2.5px solid #c8972b;
        }

        /* ── Video card (landscape 16:9) ─────────────────── */
        .video-frame {
          position: relative;
          width: 100%;
          /*
           * 16:9 landscape ratio — gives the video the width it needs
           * to be properly viewable. Matches standard video formats.
           */
          aspect-ratio: 16 / 9;
          background: #0d1f33;
          overflow: hidden;
        }
        .video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Play overlay */
        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(13, 31, 51, 0.35);
          transition: background 0.2s ease;
        }
        .play-overlay:hover {
          background: rgba(13, 31, 51, 0.5);
        }
        .play-ripple {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(200, 151, 43, 0.25);
          animation: ripple 2s ease-out infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .play-btn {
          position: relative;
          z-index: 1;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #c8972b;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 4px;
          box-shadow: 0 6px 24px rgba(200, 151, 43, 0.5);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .play-btn:hover {
          background: #b07f1f;
          transform: scale(1.08);
        }

        /* Video control bar */
        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(transparent, rgba(13, 31, 51, 0.85));
          z-index: 5;
        }
        .ctrl-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: #fff;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .ctrl-btn:hover {
          background: rgba(200, 151, 43, 0.6);
        }
        .ctrl-label {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.7);
          flex: 1;
          letter-spacing: 0.05em;
        }
        .ctrl-mute {
          margin-left: auto;
        }

        /* Video description */
        .video-desc {
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.875rem;
          color: #4b5563;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Download button ─────────────────────────────── */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Trebuchet MS", sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          padding: 0.55rem 1.1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .btn-outline {
          color: #1a3a5c;
          border: 1.5px solid #1a3a5c;
          background: transparent;
        }
        .btn-outline:hover {
          background: #1a3a5c;
          color: #fff;
        }
      `}</style>
    </section>
  );
}