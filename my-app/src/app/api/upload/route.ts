import { NextRequest, NextResponse } from 'next/server'
import path from 'path';
import fs from 'fs/promises';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const files: FileList | null = data.getAll('files[]');

  if (!files || files.length === 0) {
    return NextResponse.json({ success: false, message: 'No files uploaded' });
  }

  // Check whether the folder exists and create it if no
  const carouselImagesDir = path.join(process.cwd(), 'public', 'carousel_images');
  await fs.mkdir(carouselImagesDir, { recursive: true });

  // Get the files from the folder
  const existingFiles = await fs.readdir(carouselImagesDir);

  // Delete each file in the folder
  await Promise.all(existingFiles.map(async (file) => {
    const filePath = path.join(carouselImagesDir, file);
    await fs.unlink(filePath);
  }));

  const uploadedFileUrls = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file in public/carousel_images folder
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(carouselImagesDir, fileName);
    await fs.writeFile(filePath, buffer);

    // Get the image URL
    const imageUrl = `/carousel_images/${fileName}`;

    // Add the url and alt to the result array
    uploadedFileUrls.push({
      imageUrl,
      alt: 'car image'
    });
  }

  return NextResponse.json({ success: true, uploadedFileUrls });
}
