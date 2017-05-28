function importAll(image) {
  let images = {};
  image.keys().forEach((item, index) => {
    images[item.replace('./', '')] = image(item);
  });
  return images;
}
const images = importAll(
  require.context('./card-svgs/cards-png-300px/', false, /\.(png|jpe?g|svg)$/)
);

/* Istanbul ignore next */
export default images;
