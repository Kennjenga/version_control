function sum(a, ...rest) {
  let sum = a;
  for (x of rest) {
    sum += x;
  }
  return sum;
}

const prod = (x, ...rest) => {
  let prod = x;
  for (x of rest) {
    prod *= x;
  }
  return prod;
};

console.log(sum(5, 23, 328, 320));
console.log(0.5 - Math.random());
