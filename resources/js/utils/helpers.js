export const formatNumber = (number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};
