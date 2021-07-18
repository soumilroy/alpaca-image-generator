import React, { useState, useEffect } from "react";
import { getImage } from "../utils/getImage";
import { toPng } from "html-to-image";
import { alpacaConfig } from "../alpacaConfig";
import Buttons from "./buttons";
import AlpacaArt from "./alpacaArt";
import Actions from "./actions";

const Alpaca = () => {
	const [bg, setBg] = useState(null);
	const [neck, setNeck] = useState(null);
	const [ears, setEars] = useState(null);
	const [hair, setHair] = useState(null);
	const [eyes, setEyes] = useState(null);
	const [leg, setLeg] = useState(null);
	const [mouth, setMouth] = useState(null);
	const [nose, setNose] = useState(null);
	const [accessories, setAccessories] = useState(null);

	const changeImage = (dir, bgImage) => {
		getImage(dir, bgImage, (image) => {
			switch (dir) {
				case "backgrounds":
					setBg(image);
					break;
				case "neck":
					setNeck(image);
					break;
				case "eyes":
					setEyes(image);
					break;
				case "ears":
					setEars(image);
					break;
				case "mouth":
					setMouth(image);
					break;
				case "leg":
					setLeg(image);
					break;
				case "hair":
					setHair(image);
					break;
				case "accessories":
					setAccessories(image);
					break;
				default:
					break;
			}
		});
	};
	const downloadImg = () => {
		const alpacaCanvasNode = document.getElementById("alpaca");
		toPng(alpacaCanvasNode).then((dataUrl) => {
			var img = new Image();
			img.src = dataUrl;
			document.body.appendChild(img);
		});
	};

	useEffect(() => {
		getImage("backgrounds", "green50", (image) => {
			setBg(image);
		});
		getImage("neck", "default", (image) => {
			setNeck(image);
		});
		getImage("ears", "default", (image) => {
			setEars(image);
		});
		getImage("eyes", "default", (image) => {
			setEyes(image);
		});
		getImage("hair", "default", (image) => {
			setHair(image);
		});
		getImage("leg", "default", (image) => {
			setLeg(image);
		});
		getImage("mouth", "default", (image) => {
			setMouth(image);
		});
		getImage("accessories", "headphone", (image) => {
			setAccessories(image);
		});
		getImage("", "nose", (image) => {
			setNose(image);
		});
	}, []);

	const alpacaAttr = {
		bg,
		neck,
		nose,
		mouth,
		eyes,
		hair,
		leg,
		ears,
		accessories,
	};
	return (
		<div className="container">
			<div>
				<h1 className="heading">Alpaca Image Generator</h1>
			</div>
			<div className="inner">
				<div className="left">
					<div className="alpaca" id="alpaca">
						<AlpacaArt attr={alpacaAttr} />
					</div>
					<Actions />
				</div>
				<div className="right">
					{alpacaConfig.map((attributes) => (
						<Buttons
							key={attributes.id}
							attributes={attributes}
							changeImage={changeImage}
						/>
					))}

					{/* <button onClick={() => downloadImg()}>Download Image</button> */}
				</div>
			</div>
		</div>
	);
};

export default Alpaca;
