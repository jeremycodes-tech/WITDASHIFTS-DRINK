// src/utils/assets.js
export const asset = (path) => {
  return import.meta.env.BASE_URL + path;
};
