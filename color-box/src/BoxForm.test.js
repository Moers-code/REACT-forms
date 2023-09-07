import React from "react";
import {
	fireEvent,
	render,
	cleanup,
	getAllByText,
	getByText,
} from "@testing-library/react";
import BoxForm from "./BoxForm";
import BoxList from "./BoxList";

afterEach(cleanup);

it("it should render without crashing", () => {
	render(<BoxForm />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxForm />);
	expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", async () => {
	const mockAddBox = jest.fn();
	const { getByLabelText, getByText } = render(<BoxForm addBox={mockAddBox} />);
	const backgroundColorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");
	const submitButton = getByText("Add Box");

	fireEvent.change(backgroundColorInput, { target: { value: "black" } });
	fireEvent.change(widthInput, { target: { value: "50" } });
	fireEvent.change(heightInput, { target: { value: "50" } });
	fireEvent.click(submitButton);
	expect(mockAddBox).toHaveBeenCalled();
});
