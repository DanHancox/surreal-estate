import { render, screen } from "@testing-library/react";
import App from "../components/App.js";

describe("App", () => {
  it("renders App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

xtest("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
