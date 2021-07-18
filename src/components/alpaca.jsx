import React, { useState, useEffect } from "react";
import { getImage } from "../utils/getImage";
import { toPng } from "html-to-image";
import { alpacaConfig } from "../alpacaConfig";
import Buttons from "./buttons";
import AlpacaArt from "./alpacaArt";
import Actions from "./actions";
import Controls from "./Controls";
import download from "downloadjs";

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
	const [feature, setFeature] = useState(alpacaConfig[0]);

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
	const downloadImage = () => {
		const alpacaCanvasNode = document.getElementById("alpaca");
		toPng(alpacaCanvasNode).then((dataUrl) => {
			download(dataUrl, "my-alpaca.png");
		});
	};

	const randomizeImage = () => {};

	useEffect(() => {
		getImage("backgrounds", "grey70", (image) => {
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
				<h1 className="heading">
					Alpaca Image Generator
					<a
						href="https://soumilroy.com"
						target="_blank"
						className="attribution"
					>
						by Soumil Roy
					</a>
				</h1>
			</div>
			<div className="inner">
				<div className="left">
					<div className="alpaca" id="alpaca">
						<AlpacaArt attr={alpacaAttr} />
					</div>
					<Actions
						downloadImage={downloadImage}
						randomizeImage={randomizeImage}
					/>
				</div>
				<div className="right">
					<h2 className="heading">Accessorize your Alpaca</h2>
					{alpacaConfig.map((attributes) => (
						<Controls
							key={attributes.id}
							attributes={attributes}
							setFeature={setFeature}
						/>
					))}
					<hr />
					<Buttons
						key={feature.id}
						attributes={feature}
						changeImage={changeImage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Alpaca;
