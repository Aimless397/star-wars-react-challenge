import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { FetchFailureError } from "../components/UI/atoms/FetchFailureError";

describe("<FetchFailureError />", () => {
  test("should be rendered", () => {
    const { container } = render(<FetchFailureError />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text", () => {
    render(<FetchFailureError />);

    expect(screen.getByText("Please reload the page"));
  });

  test("should have the correct className style", () => {
    render(<FetchFailureError />);

    const divElement = screen.getByTestId("fetchContentErrorContainer");

    expect(divElement.className).toBe("fetchContentErrorContainer");
  });
});
