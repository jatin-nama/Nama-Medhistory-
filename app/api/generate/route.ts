import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = `
You are an expert Medicine OPD doctor.

Generate BOTH:
1. OPD History Sheet
2. Full Case Presentation (Exam-ready)

Patient Data:
${JSON.stringify(body)}

Format professionally with headings.
`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
    }
  );

  return NextResponse.json({
    output: response.data.candidates[0].content.parts[0].text,
  });
}
