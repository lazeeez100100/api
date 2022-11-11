import express, { Request, Response } from 'express';
import { Stats } from 'fs';
import fs from 'fs/promises';
import resizeImage from '../../utilities/resizeImage';
import path from 'path';

const imageProcess = express.Router();

imageProcess.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query['filename'];
  const height: number = parseInt(req.query['height'] as string, 10);
  const width: number = parseInt(req.query['width'] as string, 10);

  // Check height
  if (Number.isNaN(height) || height < 1) {
    res
      .status(400)
      .send(
        'Please make sure you write parameters {height} with type number greater than (0).'
      );
    return;
  }
  // Check width
  if (Number.isNaN(width) || width < 1) {
    res
      .status(400)
      .send(
        'Please make sure you write parameters {width} with type number greater than (0).'
      );
    return;
  }

  // check query
  if (!filename || !height || !width) {
    res
      .status(400)
      .send(
        'Please make sure url contains correct filename, height and width params'
      );
    return;
  }

  // full path
  const imagePath = path.resolve(
    __dirname,
    `../../../assets/full/${filename}.jpg`
  );

  // thumb path format to save image with height and width
  const thumbPath = path.resolve(
    __dirname,
    `../../../assets/thumb/${filename}-${width}x${height}.jpg`
  );

  // Check file exists in full folder
  const imageFull: Stats | null = await fs.stat(imagePath).catch(() => {
    res.status(404).send('Image not exist');
    return null;
  });

  if (!imageFull) {
    return;
  }

  // Check if thumb already created
  const existThumb: Stats | null = await fs.stat(thumbPath).catch(() => {
    return null;
  });

  if (existThumb) {
    fs.readFile(thumbPath)
      .then((thumbData: Buffer) => {
        res.status(200).contentType('jpg').send(thumbData);
      })
      .catch(() => {
        res.status(500).send('Error occurred processing the image');
      });
  } else {
    // resize an image using sharp

    resizeImage({
      width,
      height,
      imagePath,
      thumbPath
    })
      .then((imageBuf: Buffer) => {
        res.status(200).contentType('jpg').send(imageBuf);
      })
      .catch(() => {
        res.status(500).send('Error occurred processing the image');
      });
  }
});

export default imageProcess;
