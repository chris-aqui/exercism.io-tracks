export const twoFer = (name) => {
  return (name === '') ? ('One for you, one for me.') : 
  (typeof name === 'string') ? `One for ${name}, one for me.` : console.log('something happend')
};


// version 1
// if (name === '') {
//   return 'One for you, one for me.';
// }
// if (typeof name === 'string') {
//   return `One for ${name}, one for me.`;
// }