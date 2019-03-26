const _ = require('lodash');

const normalize = obj => {
  obj.id = obj._id;
  return obj;
};

module.exports = input => {
  //transform _id to id, for using with alredy made app
  if (Array.isArray(input)) {
    return input.map((obj) => normalize(obj));
  }
  return normalize(input);
};
