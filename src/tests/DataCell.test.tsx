import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { DataCell } from "../components/UI/atoms/DataCell";

describe("<DataCell />", () => {
  const text = "name";
  const value = "Yoda";

  test("should be rendered", () => {
    const { container } = render(<DataCell text={text} value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text and value", () => {
    render(<DataCell text={text} value={value} />);

    expect(screen.getByText("name"));
    expect(screen.getByText(value));
  });

  test("should have the correct className style", () => {
    render(<DataCell text={text} />);

    const spanElement = screen.getByTestId("dataCellCategoryText");

    expect(spanElement.className).toBe("dataCellCategoryText");
  });
});
