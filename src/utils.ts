export const roundNumberToOneDecimal: (n: number) => number = (num: number) =>
  Math.round(num * 10) / 10;

export const processNumberString: (n: number) => string = (num) => {
  if (num >= 1000000) return `${roundNumberToOneDecimal(num / 1000000)}M`;
  else if (num >= 1000) return `${roundNumberToOneDecimal(num / 1000)}k`;
  else return `${num}`;
};
