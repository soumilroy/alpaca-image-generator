import React from "react";

const Buttons = ({ attributes, changeImage }) => {
	return (
		<div className="btn-controls">
			<h3>{attributes.label}</h3>
			{attributes.items.map((attr) => (
				<button
					className={`btn ${attr.selected ? "selected" : ""}`}
					key={attr.id}
					onClick={() => changeImage(attributes, attr)}
				>
					{attr.label}
				</button>
			))}
		</div>
	);
};

export default Buttons;
