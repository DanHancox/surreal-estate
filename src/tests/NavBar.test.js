import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../components/NavBar";

test("renders learn react link", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/View Properties/i);
  expect(linkElement).toBeInTheDocument();
});
