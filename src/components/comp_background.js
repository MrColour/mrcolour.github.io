import { styled } from "../default_styles";

import background_hologram from "../assets/background_paper.avif";

export const E_background_default = ({}) => {
	return (
		<_background>
			<_background_holograms rel="preload" />
			<_side_line rel="preload" />
		</_background>
	);
};

const _side_line = styled.div`
	position: fixed;

	height: 100%;
	width: max(30px, min(50px, 6.7vw));

	top: 0px;
	left: max(10px, min(32px, 6.5vw));

	background-image: linear-gradient(${(props) => props.theme.style_secondary_color}, ${(props) => props.theme.style_secondary_color}), url(${background_hologram});
	box-shadow: inset 10px 0px 12px 0px ${(props) => props.theme.style_darker_secondary_color}, inset -8px 0px 10px 0px ${(props) => props.theme.style_darker_secondary_color};
`

const _background = styled.div`
	z-index: -1;
	position: fixed;

	width: 100%;
	height: 100%;

	box-sizing: border-box;
`;

const _background_holograms = styled.div`
	background-image: linear-gradient(${(props) => props.theme.style_main_color}, ${(props) => props.theme.style_main_color}), url(${background_hologram});

	width: 100%;
	height: 100%;
`;
