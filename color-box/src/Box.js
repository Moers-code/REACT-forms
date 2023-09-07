import React from "react";
import "./Box.css";
const Box = ({ id, backgroundColor, width, height, remove }) => {
	const handleRemove = () => {
		remove(id);
	};
	return (
		<div>
			<div
				className="Box"
				style={{
					backgroundColor: backgroundColor,
					width: width,
					height: height,
				}}>
				<button onClick={handleRemove} className="button">
					x
				</button>
			</div>
		</div>
	);
};

export default Box;
