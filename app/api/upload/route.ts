import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log("api called");
  const file: File | null = data.get("file") as unknown as File;

  if (!file) return NextResponse.json({ success: false });

  try {
    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);
    const path = `./files/${file.name}`;
    await writeFile(path, buffer);
    console.log("File written successfully");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error writing file:", err);
    return NextResponse.json({ success: false });
  }
}