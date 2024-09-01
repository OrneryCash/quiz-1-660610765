import func from "../q1";

const inputs = [
  [1, 3],
  [6, 10],
  [20, 26],
];

test("q1 case 1", () => {
  expect(func(inputs[0][0], inputs[0][1])).toEqual(2);
});

test("q1 case 2", () => {
  expect(func(inputs[1][0], inputs[1][1])).toEqual(24);
});

test("q1 case 3", () => {
  expect(func(inputs[2][0], inputs[2][1])).toEqual(92);
});
