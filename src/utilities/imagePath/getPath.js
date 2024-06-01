export const getImgPath = (imgSrc) => {
  const basePath = "../../assets/" + imgSrc;
  return new URL(basePath, import.meta.url).href;
};
