import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";
import BoxForm from "./BoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, { id: uuidv4(), ...newBox }]);
	};

	const remove = (id) =>
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));

	return (
		<div>
			<BoxForm addBox={addBox} />
			<div>
				{boxes.map((box) => (
					<Box
						key={box.id}
						id={box.id}
						remove={remove}
						width={parseInt(box.width)}
						height={parseInt(box.height)}
						backgroundColor={box.backgroundColor}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
