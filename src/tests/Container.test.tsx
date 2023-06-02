import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Container } from "../components/UI/organisms/Container";

describe("<Container />", () => {
  test("should be rendered", () => {
    const { container } = render(<Container />);

    expect(container).toMatchSnapshot();
  });

  test("should have the correct className style", () => {
    render(<Container />);

    const divElement = screen.getByTestId("contentContainer");

    expect(divElement.className).toContain("contentContainer");
  });
});
