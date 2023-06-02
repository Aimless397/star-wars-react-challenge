import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { LoadingCell } from "../components/UI/atoms/LoadingCell";

describe("<LoadingCell />", () => {
  test("should be rendered", () => {
    const { container } = render(<LoadingCell />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text", () => {
    render(<LoadingCell />);

    expect(screen.getByText("Loading"));
  });

  test("should have the correct className style", () => {
    render(<LoadingCell />);

    const spanElement = screen.getByTestId("loadingSpan");

    expect(spanElement.className).toBe("loadingSpan");
  });
});
