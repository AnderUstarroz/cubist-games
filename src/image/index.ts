export const is_compressible = (mimeType: string) => {
  return new Set([
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/ogg',
    'image/webm',
    'image/webp',
  ]).has(mimeType);
};

export const blob_to_base64 = async (blob: Blob) => {
  return new Promise<string>((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
};

export const compress_image = async (
  blob: Blob,
  width: number,
  mimeType: string,
  height: null | number = null,
): Promise<Blob | null> => {
  const url = await blob_to_base64(blob);
  return new Promise((resolve, _reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const elem = document.createElement('canvas');
      if (img.width < width) {
        return resolve(blob);
      }
      elem.width = width;
      elem.height = height
        ? height
        : Math.round((img.height / img.width) * width);
      const ctx = elem.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, elem.height);
        ctx.canvas.toBlob(
          newBlob => {
            resolve(newBlob);
          },
          mimeType,
          1,
        );
      }
    };
  });
};
