import func from "../q1_odd";

const inputs = [
  [1, 3],
  [6, 10],
  [19, 26],
];

test("q1 case 1", () => {
  expect(func(inputs[0][0], inputs[0][1])).toEqual(0);
});

test("q1 case 2", () => {
  expect(func(inputs[1][0], inputs[1][1])).toEqual(16);
});

test("q1 case 3", () => {
  expect(func(inputs[2][0], inputs[2][1])).toEqual(69);
});
