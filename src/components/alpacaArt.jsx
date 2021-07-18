import React from "react";

const AlpacaArt = ({ attr }) => {
	const { bg, neck, nose, mouth, eyes, hair, leg, ears, accessories } = attr;
	return (
		<>
			<img src={bg} alt="Background" className="background" />
			<img src={neck} alt="Neck" className="neck" />
			<img src={nose} alt="Nose" className="nose" />
			<img src={mouth} alt="Mouth" className="mouth" />
			<img src={eyes} alt="eyes" className="eyes" />
			<img src={hair} alt="hair" className="hair" />
			<img src={leg} alt="leg" className="leg" />
			<img src={ears} alt="ears" className="ears" />
			<img src={accessories} alt="accessories" className="accessories" />
		</>
	);
};

export default AlpacaArt;
