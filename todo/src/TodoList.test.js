import React from "react";
import {
	fireEvent,
	render,
	cleanup,
	getByText,
	waitFor,
} from "@testing-library/react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

afterEach(cleanup);

it("it should render without crashing", () => {
	render(<TodoList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", async () => {
	const mockAddList = jest.fn();
	const { getByLabelText, getByText } = render(<TodoList />);
	const listInput = getByLabelText("Task Name");
	const submitButton = getByText("Add List");

	fireEvent.change(listInput, { target: { value: "eat" } });

	fireEvent.click(submitButton);

	await waitFor(() => {
		const newList = getByText("eat");
		expect(newList).toBeInTheDocument();
	});
});
