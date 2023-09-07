import React, { useState } from "react";

const TodoForm = ({ addList }) => {
	const [formData, setFormData] = useState({ task: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addList({ ...formData });
		setFormData({ task: "" });
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="taskName">Task Name</label>
			<input
				id="taskName"
				name="task"
				type="text"
				value={formData.task}
				placeholder="Task Name"
				onChange={handleChange}
			/>
			<button>Add List</button>
		</form>
	);
};

export default TodoForm;
