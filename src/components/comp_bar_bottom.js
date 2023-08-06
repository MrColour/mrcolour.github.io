import { keyframes, css } from "styled-components";

import icon_github from "../assets/icons_github_128.png";
import icon_linkedin from "../assets/icons_linkedIn_100.png";

import { styled, style_border_base, style_text_base, style_media_break } from "../default_styles";

export const E_bar_bottom_page = ({}) => {
	return (
		<_footer>
			<_left_footer_section>
				<_text_row>Kevin Mira ©2023</_text_row>
				<_text_row>Source Code <_link_font href="https://github.com/MrColour/react_deploy" target="_blank">here</_link_font></_text_row>
			</_left_footer_section>

			<_right_footer_section>
				<_footer_icon href="https://www.linkedin.com/in/kevin-dev/" target="_blank" src={icon_linkedin} />
				<_footer_icon href="https://github.com/MrColour" target="_blank" src={icon_github} />
			</_right_footer_section>
		</_footer>
	);
};

const _link_font = styled.a`
	margin-top: 20px;
	${style_text_base}

	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
`
const _footer = styled.div`
	background-color: ${(props) => props.theme.style_main_color};
	${style_border_base}

	border-width: 2px 0px 0px;
	height: 48px;

	bottom: 0;
	position: fixed;

	display: flex;
	width: 100%;

	z-index: 3;
`;
const _left_footer_section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0px 3px 0px 10px;

	width: 100%;
`;
const _right_footer_section = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding: 2px 14px 0px 0px;

	gap: 14px;
`;
const _text_row = styled.div`
	${style_text_base}
	font-size: 12px;
	font-weight: 400;
	align-self: flex-start;

	color: ${(props) => props.theme.style_neutral_light_color};
`;

const bounce = keyframes`
	0% { transform: scale(.8) }
	35% { transform: scale(1.2) }
	65% { transform: scale(0.9) }
	70% { transform: scale(0.95) }
	75% { transform: scale(1.1) }
	80% { transform: scale(1) }
	85% { transform: scale(.9) }
	100% { transform: scale(1) }
`;

const _footer_icon = styled.a`
	width: 22px;
	height: 22px;
	@media (max-width: ${style_media_break}) {
		width: 26px;
		height: 26px;
	}

	background: ${(props) => "url(" + props.src + ")"};
	background-size: cover;

	filter: ${(props) => {
		const accent_color = props.theme.style_accent_color;
		if (accent_color == '#ffffff')
			return "";
		else if (accent_color == '#272727')
			return css`brightness(0%)`
		else
			return css`opacity(0.8) drop-shadow(0 0 0 ${accent_color}) saturate(200000%)`
	}};

	transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
	&:hover {
		animation: ${bounce} 0.8s;
	}
`;
