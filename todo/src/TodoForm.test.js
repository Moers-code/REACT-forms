import React from "react";
import {
	fireEvent,
	render,
	cleanup,
	getAllByText,
	getByText,
} from "@testing-library/react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

afterEach(cleanup);

it("it should render without crashing", () => {
	render(<TodoForm />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoForm />);
	expect(asFragment()).toMatchSnapshot();
});

it("can add a new list", async () => {
	const mockAddList = jest.fn();
	const { getByLabelText, getByText } = render(
		<TodoForm addList={mockAddList} />
	);
	const listInput = getByLabelText("Task Name");

	const submitButton = getByText("Add List");

	fireEvent.change(listInput, { target: { value: "Grocery" } });

	fireEvent.click(submitButton);
	expect(mockAddList).toHaveBeenCalled();
});
