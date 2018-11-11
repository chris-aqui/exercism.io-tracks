// find the leap year
export const isLeap = (year) => {
  if (year % 4 === 0) {
    return false;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
};
