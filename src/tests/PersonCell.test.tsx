import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { PersonCell } from "../components/UI/molecules/PersonCell";

describe("<PersonCell />", () => {
  test("should be rendered", () => {
    const { container } = render(<PersonCell data={[]} />);

    expect(container).toMatchSnapshot();
  });
});
