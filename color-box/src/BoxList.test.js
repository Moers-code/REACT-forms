import React from "react";
import {
	render,
	fireEvent,
	getByText,
	cleanup,
	waitFor,
} from "@testing-library/react";
import BoxList from "./BoxList";

afterEach(cleanup);

it("should render without crashing", () => {
	render(<BoxList />);
});

it("should match snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", async () => {
	const mockAddBox = jest.fn();
	const { getByLabelText, getByText } = render(<BoxList />);
	const backgroundColorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");
	const submitButton = getByText("Add Box");

	fireEvent.change(backgroundColorInput, { target: { value: "black" } });
	fireEvent.change(widthInput, { target: { value: "50" } });
	fireEvent.change(heightInput, { target: { value: "50" } });
	fireEvent.click(submitButton);

	await waitFor(() => {
		const newBox = getByText("x");
		expect(newBox).toBeInTheDocument();
	});
});
