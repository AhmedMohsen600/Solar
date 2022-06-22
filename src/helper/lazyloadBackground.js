import lazyLoad from "../hooks/use-lazyload";
export const handelLazyLoadBackgroundImage = (src) => {
  const loaded = lazyLoad(src);
  return loaded;
};
