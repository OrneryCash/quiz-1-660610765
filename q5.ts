/* define interface for Mafia objects */
interface Mafia {
  id: number,
  power: number
}

/* assign interface/type to the function definition properly */
const q5 = (mafias: Mafia[], fights: number[]): Mafia => {
  let maxx = -Infinity;
  let win = 0;

  for (let i = 0; i <= mafias.length - 1; i += 2) {
    const left = mafias[fights[i] - 1];
    const right = mafias[fights[i + 1] - 1];
    let cwin = 0;
    if (left.power > right.power) {
      cwin = fights[i];
      left.power += right.power;
    } else if (right.power > left.power) {
      cwin = fights[i + 1];
      right.power += left.power;
    }

  }

  mafias.forEach(m => {
    if (m.power > maxx) {
      win = m.id;
      maxx = m.power;
    }
  })

  return {
    id: win,
    power: maxx
  }
};

//Test case
const mafias = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];
const fights = [5, 2, 4, 3, 1, 3];
console.log(q5(mafias, fights));

export default q5;
