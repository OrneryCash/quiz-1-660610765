import fn from "../q2";

const inputs = [
  { name: "John", age: 59 },
  { name: "Jane", age: 18 },
  { name: "Bob", age: 55 },
];

const outputs = [
  { name: "John", age: 49, luckyAge: true },
  { name: "Jane", age: 15, luckyAge: false },
  { name: "Bob", age: 45, luckyAge: false },
];

for (let i = 0; i < inputs.length; i++) {
  test(`q2 case${i + 1}`, () => {
    expect(fn(inputs[i])).toEqual(outputs[i]);
  });
}
