import fn from "../q3";

const inputs = [
  [
    { name: "Zombie", power: 10 },
    { name: "Slime", power: 2 },
    { name: "Dragon", power: 15 },
  ],
  [
    { name: "A", power: 1 },
    { name: "B", power: 2 },
    { name: "C", power: 200 },
    { name: "D", power: 3 },
  ],
  [
    { name: "A", power: 1 },
    { name: "B", power: 1 },
    { name: "C", power: 1 },
    { name: "D", power: 1 },
  ],
];

const outputs = [
  [
    { name: "Zombie", power: 10 },
    { name: "Dragon", power: 15 },
  ],
  [{ name: "C", power: 200 }],
  [
    { name: "A", power: 1 },
    { name: "B", power: 1 },
    { name: "C", power: 1 },
    { name: "D", power: 1 },
  ],
];

for (let i = 0; i < inputs.length; i++) {
  test(`q3 case${i + 1}`, () => {
    const result = fn(inputs[i]);
    expect(result).toEqual(expect.arrayContaining(outputs[i]));
    expect(result.length).toEqual(outputs[i].length);
  });
}
