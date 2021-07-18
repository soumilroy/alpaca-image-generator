export const getImage = (
	directory = "backgrounds",
	img = "default",
	callback
) => {
	import(`../alpaca/${directory}/${img}.png`).then((image) => {
		callback(image.default);
	});
};
