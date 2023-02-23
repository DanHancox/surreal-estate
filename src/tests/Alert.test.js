


import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert component", () => {
  xit("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });
});

