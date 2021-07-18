import React, { useState, useEffect } from "react";
import { getImage } from "../utils/getImage";
import { toPng } from "html-to-image";

const Alpaca = () => {
	const [bg, setBg] = useState(null);
	const [neck, setNeck] = useState(null);
	const changeImage = (dir, bgImage) => {
		getImage(dir, bgImage, (image) => {
			switch (dir) {
				case "neck":
					setNeck(image);
					break;
				case "backgrounds":
					setBg(image);
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
		getImage(
			"backgrounds",
			"grey70",
			(image) => {
				setBg(image);
			},
			[]
		);
		getImage("neck", "default", (image) => {
			setNeck(image);
		});
	}, []);

	return (
		<div>
			<div class="alpaca" id="alpaca">
				<img src={bg} alt="Alpaca Background" class="background" />
				<img src={neck} alt="Alpaca Neck" class="neck" />
			</div>
			<div>
				<button onClick={() => changeImage("backgrounds", "blue50")}>
					Change to Blue
				</button>
				<button onClick={() => changeImage("backgrounds", "red50")}>
					Change to red
				</button>
				<button onClick={() => changeImage("backgrounds", "green60")}>
					Change to green
				</button>

				<button onClick={() => changeImage("neck", "bend-backward")}>
					Bent Backward Neck
				</button>
				<button onClick={() => changeImage("neck", "bend-forward")}>
					Bent Forward Neck
				</button>
				<button onClick={() => changeImage("neck", "thick")}>Thick Neck</button>
				<button onClick={() => changeImage("neck", "default")}>
					Default Neck
				</button>

				<button onClick={() => downloadImg()}>Download Image</button>
			</div>
		</div>
	);
};

export default Alpaca;
