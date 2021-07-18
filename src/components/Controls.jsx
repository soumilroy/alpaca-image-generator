import React from "react";

const Controls = ({ attributes, setFeature }) => {
	return (
		<button
			className="btn"
			key={attributes.id}
			onClick={() => setFeature(attributes)}
		>
			{attributes.label}
		</button>
	);
};

export default Controls;
