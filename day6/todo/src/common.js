// const z = 555;

export const print = (text) => {
  console.log('----');
  console.log(text);
  console.log('----');
};

export const printWithStars = (text) => {
  console.log('****');
  console.log(text);
  console.log('****');
};

export const a = 5000;

export const getArrOfNumbers = (num) => {
  return new Array(num).fill(1).map((_, i) => i + 1);
};

export const arr = getArrOfNumbers(42);

// export default z;
// export default 555;
export default { a: 100, b: 200 };
