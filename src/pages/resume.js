import styled from "styled-components";
import { E_page } from "../components/comp_page";

import { S_board_title_underline, style_board_text, style_default_board_shadow } from "../default_styles";

import pdf_resume from "../assets/resume_regular.pdf";

export const E_page_resume = ({}) => {
	return (
		<E_page>
			<S_board_title_underline>
				Player Attributes:
			</S_board_title_underline>
			<_board_space>
				<_iframe_pdf id="cpdf" src={pdf_resume + "#page=1&view=FitH"}></_iframe_pdf>
			</_board_space>
			<S_board_title_underline></S_board_title_underline>
		</E_page>
	);
};

const _board_space = styled.div`
	${style_board_text}
	padding: 35px 0px;
	justify-content: center;
	display: flex;
`

// style={{display:"block", width:"80%", height:"80vh", margin:"auto"}}
const _iframe_pdf = styled.iframe`
	width: 80%;
	aspect-ratio: 5/7;

	border: none;
	border-radius: 5px;

	${style_default_board_shadow}
`

const _profile_image = styled.img`
	width: 40vw;
	aspect-ratio: 1/1;

	margin: auto;
	display: flex;

	border-radius: 40px;
`