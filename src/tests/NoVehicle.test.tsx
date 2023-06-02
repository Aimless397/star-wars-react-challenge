import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { NoVehicle } from "../components/UI/atoms/NoVehicle";

describe("<NoVehicle />", () => {
  test("should be rendered", () => {
    const { container } = render(<NoVehicle />);

    expect(container).toMatchSnapshot();
  });

  test("should have internal text", () => {
    render(<NoVehicle />);

    expect(screen.getByText("No vehicles found"));
  });

  test("should have the correct className style", () => {
    render(<NoVehicle />);

    const spanElement = screen.getByTestId("noVehicleSpan");

    expect(spanElement.className).toBe("noVehicleSpan");
  });
});
