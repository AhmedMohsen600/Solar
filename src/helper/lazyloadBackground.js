import koko from "../hooks/use-lazyload";
export const handelLazyLoadBackgroundImage = (src) => {
  const loaded = koko(src);
  return loaded;
};
