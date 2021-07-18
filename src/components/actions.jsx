import React from "react";

const Actions = ({ downloadImage, randomizeImage }) => {
	return (
		<div className="actions-panel">
			{/* <button onClick={() => randomizeImage()}>Randomize </button> */}
			<button onClick={() => downloadImage()}>Download </button>
		</div>
	);
};

export default Actions;
