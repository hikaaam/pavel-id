export const getImageFromUrl = (url) => {
  const regex = /\/\/([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g;
  let img = regex.exec(url);
  return img;
};
