// find the leap year
export const isLeap = (year) => {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  if (year % 400 === 0) {
    return true;
  }
  if (year % 200 === 0 && year % 400 !== 0) {
    return false;
  }
};

// mentor recomendation 
export const isLeap = 
    // (year) => ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
    

