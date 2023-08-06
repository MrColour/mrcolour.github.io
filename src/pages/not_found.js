import styled from "styled-components";
import { style_default_board_shadow, style_text_base } from "../default_styles";

import { E_page } from "../components/comp_page";

export const E_page_not_found = ({}) => {
	return (
		<E_page>
			<_container>
				<_left_side>
					<_bold_text>404</_bold_text>
				</_left_side>

				<_right_side>
					<_soft_text>
						Route Error
					</_soft_text>
					<_description>
						This page does not exist.
					</_description>
				</_right_side>
			</_container>
		</E_page>
	);
};

const _description = styled.div`
	${style_text_base}
	/* font-size: min(calc(14px + 2.2vw), 12px); */
	font-size: max(min(calc(0px + 4vw), 42px), 9.8px);

	${style_default_board_shadow}
	text-align: left;
`

const _soft_text = styled.div`
	${style_text_base}
	text-align: start;

	color: ${(props) => props.theme.style_neutral_light_color};
	font-size: min(calc(14px + 2.2vw), 8px);
	opacity: 70%;
`

const _right_side = styled.div`
	width: 68%;
	/* border: 1px solid purple; */

	padding-left: 12px;
`

const _left_side = styled.div`
	width: 32%;
	display: flex;
`

const _container = styled.div`
	/* border: 1px solid red; */
	max-width: 680px;

	padding: 32px 6%;
	margin: 30px;
	border-radius: 10px;
	background-color: ${(prop) => prop.theme.style_main_color};

	display: flex;
	gap: 20px;

	box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5),
           inset 10px 10px 15px rgba(70, 70, 70, 0.12);
`

const _bold_text = styled.div`
	font-weight: bold;

	/* border: 1px solid blue; */
	${style_default_board_shadow}
	${style_text_base}
	line-height: 80%;
	font-size: max(min(calc(10px + 6.2vw), 80px), 10px);
	font-family: IBM Plex Sans;
	text-align: right;

	margin: auto;
`;
