/* define interface for Monster objects */
interface Monster {
  name: string,
  power: number
}

/* assign interface/type to the function definition properly */
const q3 = (mons: Monster[]): Monster[] => {
  const n: number = mons.length;
  const sum = mons.reduce((prev, curr) => prev + curr.power, 0)
  const avg = sum / n;

  const ans = mons.filter(mon => mon.power >= avg)
  return ans;
};

//test cases
const input1 = [
  { name: "Zombie", power: 10 },
  { name: "Slime", power: 2 },
  { name: "Dragon", power: 15 },
];

console.log(q3(input1));

export default q3;
