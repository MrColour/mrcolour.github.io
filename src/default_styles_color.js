export const style_alabaster = {
	name: "alabaster",

	style_inset_color_top: "#27272722",
	style_inset_color_bot: "#fafafa",

	style_main_color: "#f6f2ef",
	style_main_border: "#e8e8e0ff",

	style_secondary_color: "#363636",
	style_darker_secondary_color: "#000000",

	style_neutral_light_color: "#a5a5a5ff",
	style_accent_color: "#272727",

	style_shadow_color: "#27272759",

	style_gradient_multicolor: "linear-gradient(10deg, #5b62e4, #20ecc0)",
	get style_gradient_blue() {
		return `linear-gradient(158deg, ${this.style_secondary_color}c0 0%, #21d7cbc0 103%)`;
	},
	get style_gradient_pink() {
		return `linear-gradient(10deg, #8283d4, #69fed6)`;
	},
};

export const style_dark = {
	name: "dark",

	style_inset_color_top: "#00000044",
	style_inset_color_bot: "#2a2a2a",

	style_main_border: "#4a4a4aff",
	style_main_color: "#303030",

	style_accent_color: "#ffffff",
	style_neutral_light_color: "#a6a6a6ff",

	style_secondary_color: "#ffffff",
	style_darker_secondary_color: "#c1c1c1",

	style_shadow_color: "#000000ff",

	style_gradient_multicolor: "linear-gradient(10deg, #684ba7, #22a2b9, #21e184)",
	get style_gradient_blue() {
		return `linear-gradient(158deg, ${this.style_secondary_color}c0 0%, #28fff1c0 103%)`;
	},
	get style_gradient_pink() {
		return `linear-gradient(10deg, #5999ff, #55f996)`;
	},
};
