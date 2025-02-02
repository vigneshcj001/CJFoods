import ContactUs from "../pages/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("Should load ContactUs component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});


test("Should load button inside ContactUs component", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
}
);
test("Should load button inside ContactUs component", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Submit");
});
