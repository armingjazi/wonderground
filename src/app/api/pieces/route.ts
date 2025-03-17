import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Language, languages } from "@/app/util/language";
import piecesVisuals from '@/app/data/pieces.json';


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const language: Language = (searchParams.get('language') || 'ENGLISH') as Language;

  const lang = (languages.includes(language) ? language : 'ENGLISH').toLowerCase();

  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', `${lang}.json`);
    console.log('filePath:', filePath);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `Language file for ${lang} not found` },
        { status: 404 }
      );
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    const pieces = piecesVisuals.map((piece) => {
      const pieceData = data.find((d: {id: string}) => d.id === piece.id);
      return {
        ...piece,
        ...pieceData,
      };
    });

    return NextResponse.json(pieces);
  } catch (error) {
    console.error('Error loading pieces data:', error);
    return NextResponse.json(
      { error: 'Failed to load data' },
      { status: 500 }
    );
  }
}
