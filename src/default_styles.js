import styled, { css } from "styled-components";
import * as _themes from "./default_styles_color";

export const style_media_break = "770px";
export const style_text_default = "Istok Web";

export const style_border_base = css`
	border-style: solid;
	border-color: ${(props) => props.theme.style_main_border};
`;

export const style_default_board_shadow = css`
	filter: drop-shadow(-3px 4px 5px ${(props) => props.theme.style_shadow_color});
`;

export const style_inset_border = css`
	box-shadow: inset -10px -10px 15px ${(props) => props.theme.style_inset_color_bot}, inset 10px 10px 15px ${(props) => props.theme.style_inset_color_top};
`;

export const style_board_max_size = "680px"

export const style_default_margin_spacer = css`
	margin-top: 32px;
`

export const style_inset_board = css`
	display: flex;
	box-sizing: border-box;
	max-width: ${style_board_max_size};

	padding: max(min(32px, 1.2vw), 10px);

	aspect-ratio: 10/4;
	margin: auto;

	border-radius: 10px;
	${style_inset_border}
	background-color: ${(prop) => prop.theme.style_main_color};
`

export const style_text_base = css`
	color: ${(props) => props.theme.style_accent_color};
	text-align: center;
	font-family: ${style_text_default};
	font-display: swap;
	line-height: 1.15;
`;

export const style_text_bold = css`
	color: ${(props) => props.theme.style_accent_color};
	font-weight: bold;
	line-height: 84%;
	font-size: max(min(calc(8px + 6.5vw), 84px), 11px);
	font-family: IBM Plex Sans;
`;

export const style_board_title = css`
	${style_text_base}

	font-size: min(max(3.8vw, 10px), 28px);

	${style_default_board_shadow}
	text-align: left;
	font-weight: 600;
`;

export const style_text_link = css`
	${style_text_base}
	font-weight: bold;

	background: ${(props) => props.theme.style_gradient_multicolor};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.4));

	&:hover {
		background: ${(props) => props.theme.style_gradient_pink};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		border-bottom: 1px solid ${(props) => props.theme.style_accent_color};
	}
`;

export const style_board_text = css`
	${style_text_base}
	text-align: start;

	color: ${(props) => props.theme.style_neutral_light_color};
	font-size: max(min(2.2vw, 24px), 8px);
`;

export const S_board_title = styled.div`
	${style_board_title}
`;

export const S_board_title_underline = styled.div`
	${style_board_title}
	border-bottom: 1px solid ${(props) => props.theme.style_accent_color};
`;

export const S_board_text = styled.div`
	${style_board_text}
	white-space: pre-line;
`;

export const S_paragraph_compact = styled.p`
	${style_text_base}

	width: 90%;
	margin: 5px auto;
	margin-bottom: 2px;
	margin-top: 2px;
`;

export const S_board_text_alert = styled.em`
	${style_board_text}
	text-decoration: underline;
`;

export const S_text_link = styled.a`
	${style_text_link}
`;

export { styled, css };
