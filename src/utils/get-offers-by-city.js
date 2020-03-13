export const getOffersByCity = (city, offers) => {
  if (offers.length < 0) {
    return [];
  }
  return offers.filter((offer) => offer.city === city);
};
