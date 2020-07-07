// Write your solution in this file!
let driver = {};

const updateDriverWithKeyAndValue = (obj, key, value) => {
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const deleteFromDriverByKey = (obj, key) => {
  const newDriver = {...obj};
  delete newDriver[key];
  return newDriver;
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
  delete obj[key];
  return obj;
}