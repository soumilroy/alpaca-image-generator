import React from "react";

const Buttons = ({ attributes, changeImage, selected }) => {
	return (
		<div className="btn-controls">
			<h3>{attributes.label}</h3>
			{attributes.items.map((attr) => (
				<button
					className="btn"
					key={attr.id}
					onClick={() => changeImage(attributes.directory, attr.filename)}
				>
					{attr.label}
				</button>
			))}
		</div>
	);
};

export default Buttons;
