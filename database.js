const fs = require ('fs');
const save = function (filename, data) {
  fs.writeFileSync ('database/' + filename, JSON.stringify (data));
  console.log (data);
};

const load = function (filename) {
  return JSON.parse (fs.readFileSync ('database/' + filename, 'utf8'));
};

module.exports = {save, load};
