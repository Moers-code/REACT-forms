import React, { useState } from "react";

const BoxForm = ({ addBox }) => {
	const initialState = {
		width: "",
		height: "",
		backgroundColor: "",
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(initialState);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="backgroundColor">Color</label>
			<input
				id="backgroundColor"
				value={formData.backgroundColor}
				name="backgroundColor"
				placeholder="Background Color"
				type="text"
				onChange={handleChange}
			/>
			<label htmlFor="width">Width</label>
			<input
				id="width"
				type="number"
				name="width"
				placeholder="Width"
				value={formData.width}
				onChange={handleChange}
			/>
			<label htmlFor="height">Height</label>
			<input
				id="height"
				type="number"
				name="height"
				placeholder="Height"
				value={formData.height}
				onChange={handleChange}
			/>
			<button>Add Box</button>
		</form>
	);
};

export default BoxForm;
