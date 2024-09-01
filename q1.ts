/* assign interface/type to the function definition properly */
const q1 = (m: number, n: number): number => {
  let sum: number = 0;
  for (let i: number = m; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

//test cases
console.log(q1(1, 5));
console.log(q1(10, 20));

export default q1;
