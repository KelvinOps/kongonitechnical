import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// The real file stays in public/documents/
const FILE_PATH = path.join(
  process.cwd(),
  'public',
  'documents',
  'service-charter-audio.m4a'
);

export async function GET(req: NextRequest) {
  let size: number;
  try {
    size = (await fs.promises.stat(FILE_PATH)).size;
  } catch {
    return new Response('Audio file not found', { status: 404 });
  }

  const download = req.nextUrl.searchParams.get('download') === '1';

  const headers: Record<string, string> = {
    'Content-Type': 'audio/mp4',
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'public, max-age=3600',
    'Content-Disposition': download
      ? 'attachment; filename="KTVC-Service-Charter-Audio.m4a"'
      : 'inline',
  };

  const rangeHeader = req.headers.get('range');

  // Range request (needed for seeking, and required by Safari/iOS)
  if (rangeHeader) {
    const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
    if (!match) {
      return new Response('Invalid range', {
        status: 416,
        headers: { 'Content-Range': `bytes */${size}` },
      });
    }

    let start: number;
    let end: number;

    if (match[1] === '' && match[2] !== '') {
      // suffix range: last N bytes
      const suffix = parseInt(match[2], 10);
      start = Math.max(0, size - suffix);
      end = size - 1;
    } else {
      start = parseInt(match[1], 10);
      end = match[2] ? Math.min(parseInt(match[2], 10), size - 1) : size - 1;
    }

    if (isNaN(start) || isNaN(end) || start > end || start >= size) {
      return new Response('Range not satisfiable', {
        status: 416,
        headers: { 'Content-Range': `bytes */${size}` },
      });
    }

    const stream = Readable.toWeb(
      fs.createReadStream(FILE_PATH, { start, end })
    ) as unknown as ReadableStream;

    return new Response(stream, {
      status: 206,
      headers: {
        ...headers,
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': String(end - start + 1),
      },
    });
  }

  // Full file
  const stream = Readable.toWeb(
    fs.createReadStream(FILE_PATH)
  ) as unknown as ReadableStream;

  return new Response(stream, {
    status: 200,
    headers: { ...headers, 'Content-Length': String(size) },
  });
}