import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box";

it("renders without crashing", () => {
	render(<Box />);
});

it("should match snapshot", () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});
