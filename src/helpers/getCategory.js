const getCategory = query => {
  return query.split("=")[1];
};

module.exports = getCategory;
