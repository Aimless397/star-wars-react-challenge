import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { NoticeCell } from "../components/UI/atoms/NoticeCell";

describe("<NoticeCell />", () => {
  test("should be rendered", () => {
    const { container } = render(<NoticeCell />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text", () => {
    render(<NoticeCell />);

    expect(screen.getByText("Failed to Load Data"));
  });

  test("should have the correct className style", () => {
    render(<NoticeCell />);

    const spanElement = screen.getByTestId("noticeSpan");

    expect(spanElement.className).toBe("noticeSpan");
  });
});
