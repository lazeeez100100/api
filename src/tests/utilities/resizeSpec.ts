import path from 'path';
import resizeImage from '../../utilities/resizeImage';

const imagePath = path.resolve(__dirname, '../../../assets/full/fjord.jpg');
const thumbPath = path.resolve(__dirname, '../../../assets/thumb/fjord.jpg');

describe('The resizeImage function', (): void => {
  it('returns a buffer after resizing the image', async () => {
    const imageBuffer: Buffer = await resizeImage({
      height: 100,
      width: 150,
      imagePath,
      thumbPath
    });
    expect(imageBuffer).toBeInstanceOf(Buffer);
  });

  it('rejects the Promise if something wrong', async (): Promise<void> => {
    await expectAsync(
      resizeImage({
        width: 150,
        height: 100,
        imagePath: 'any url',
        thumbPath
      })
    ).toBeRejected();
  });
});
