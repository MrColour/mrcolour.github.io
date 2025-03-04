import { styled, style_default_board_shadow, style_border_base } from "../default_styles";

import {
	style_media_break,
	style_text_base,
} from "../default_styles";

export const E_bar_top_page = ({}) => {
	let path = window.location.hash;

	return (
		<_bar>
			<_container>
				<_footer_icon href="/" active={path == "#/home" || path == "/" || path == ""}>
					Home
				</_footer_icon>
				<_footer_icon href="/#/about" active={path == "#/about"}>
					About
				</_footer_icon>
				<_footer_icon href="/#/contact" active={path == "#/contact"}>
					Contact
				</_footer_icon>
			</_container>
		</_bar>
	);
};

const _bar = styled.div`
	z-index: 3;
	position: fixed;
	${style_border_base};
	border-width: 0px 0px 2px;

	background-color: ${(props) => props.theme.style_main_color};

	width: 100%;
	height: 40px;

	${style_default_board_shadow};
`;

const _footer_icon = styled.a`
	${style_text_base}
	text-decoration: none;

	color: ${(props) =>
		props.active ? props.theme.style_accent_color : props.theme.style_accent_color + "aa"};
	font-size: ${(props) => (props.active ? `18px` : `17px`)};
	&:hover {
		/* text-shadow: 0 0 1px ${(props) => props.theme.style_secondary_color}; */
		/* filter: brightness(110%); */
		color: ${(props) => props.theme.style_secondary_color};
		transform: scale(1.08);
	}

	width: 64px;

	/* border: 1px solid red; */
`;

const _container = styled.div`
	position: fixed;

	height: 38px;

	display: flex;
	align-items: center;
	padding: 2px 10px 0px 10px;

	gap: 4px;

	/* @media (max-width: ${style_media_break}) {
		display: none !important;
	} */
`;
