function addition(a, ...rem) {
  let sum = a;
  for (x of rem) {
    sum += x;
  }
  return sum;
}

console.log(sum(3, 4, 5));
console.log(0.5 - Math.random());
