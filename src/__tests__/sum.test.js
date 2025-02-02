import { sum } from "../Components/sum";

test("sum function should calculate sum of two numbers", () => {
  expect(sum(3, 4)).toBe(7);
});
