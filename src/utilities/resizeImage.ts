import fs from 'fs/promises';
import sharp from 'sharp';

interface ResizeParam {
  width: number;
  height: number;
  imagePath: string;
  thumbPath: string;
}

// resize an image of given path and saves it to the given thumb path
// also returns the buffer of resized image on success
const resizeImage = async ({
  width,
  height,
  imagePath,
  thumbPath
}: ResizeParam): Promise<Buffer> => {
  const data: Buffer | null = await fs.readFile(imagePath).catch(() => null);

  if (!data) {
    return Promise.reject();
  }

  const imageBuffer: Buffer | null = await sharp(data)
    .resize(width, height)
    .toBuffer()
    .catch(() => null);

  if (!imageBuffer) {
    return Promise.reject();
  }

  return fs
    .writeFile(thumbPath, imageBuffer)
    .then(() => {
      return imageBuffer;
    })
    .catch(() => {
      return Promise.reject();
    });
};

export default resizeImage;
