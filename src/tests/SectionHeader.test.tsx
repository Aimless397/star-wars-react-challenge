import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "../components/UI/atoms/SectionHeader";

describe("<SectionHeader />", () => {
  const text = "name";

  test("should be rendered", () => {
    const { container } = render(<SectionHeader text={text} />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text", () => {
    render(<SectionHeader text={text} />);

    expect(screen.getByText("name"));
  });

  test("should have the correct className style", () => {
    render(<SectionHeader text={text} />);

    const spanElement = screen.getByTestId("sectionHeader");

    expect(spanElement.className).toBe("sectionHeader");
  });
});
