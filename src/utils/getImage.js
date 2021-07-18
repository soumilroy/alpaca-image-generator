export const getImage = (
	directory = "backgrounds",
	img = "blue60",
	callback
) => {
	import(`../alpaca/${directory}/${img}.png`).then((image) => {
		callback(image.default);
	});
};
