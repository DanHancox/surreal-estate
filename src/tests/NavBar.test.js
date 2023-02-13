import { render } from "@testing-library/react";
import React from "react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders Navbar", () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
