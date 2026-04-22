import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: { frame: string } }) {
  const frame = params.frame;
  const fileName = `frame_${frame}_delay-0.066s.png`;
  const filePath = path.join('c:/Users/Lenovo/Downloads/sequence', fileName);
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (e) {
    return new NextResponse('Not found', { status: 404 });
  }
}
