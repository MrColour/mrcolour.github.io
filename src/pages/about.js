import styled from "styled-components";
import { E_page } from "../components/comp_page";

import { S_board_title_underline, S_board_title, style_board_text, S_board_text, style_default_board_shadow, style_default_border_inset, style_inset_board, S_text_link, style_default_margin_spacer, style_board_title } from "../default_styles";

import profile_picture from "../assets/profile.gif";

export const E_page_about = ({}) => {
	return (
		<E_page>
				<S_board_title_underline>
					About Me
				</S_board_title_underline>
				<_board_space>
					<_profile_image src={profile_picture}></_profile_image>
					<S_board_text>
						<p>
							Experienced self-taught Software Engineer coding over 42 hours a week for the past 5 years.
							I've coded and designed video games, websites, and dev tools from scratch.
							Fullstack, any stack, I have done low-level x86 assembly to modern frameworks like React,
							with a deep affinity for the C programming language.
						</p>
						<p>
							Software Developer at indie games company Sugargenix for 3 years,
							worked 2 years as a Fullstack programmer at startup Rendition,
							and excelled as a top student in a Masters-level computer science program 42 Silicon Valley for 2 years.
						</p>
					</S_board_text>
				</_board_space>

				<S_board_title_underline></S_board_title_underline>

				<_board_space>
					<S_board_text style={{marginTop:"5px"}}><_line> Github: </_line><S_text_link href="https://github.com/MrColour" target="_blank">MrColour</S_text_link></S_board_text>
					<S_board_text style={{marginTop:"5px"}}><_line>Player Name:</_line> Kevin Mira </S_board_text>
					<S_board_text style={{marginTop:"5px"}}><_line>Location:</_line> Hayward, CA </S_board_text>
					<S_board_text style={{marginTop:"5px"}}><_line>LinkedIn:</_line> <S_text_link href="https://www.linkedin.com/in/kevin-dev/" target="_blank">kevin-dev</S_text_link></S_board_text>
				</_board_space>
				<S_board_title_underline></S_board_title_underline>

				<_card>
					<_card_tittle>2021-2023 (<S_text_link href="https://www.sugargenix.com" target="blank">Sugargenix</S_text_link>)</_card_tittle>
					<br></br>
					<li>Game developer: mechanics, build systems, rendering pipeline, engine development</li>
					<li>Frontend React Developer and Designer</li>
					<li>Google IT Admin, hosting website, analytics, and company accounts</li>
				</_card>
				<_card>
					<_card_tittle>2022-2023 (<S_text_link href="https://www.figma.com/community/plugin/1031998871372194709/Rendition-[Beta]:-Figma-%3EReact/Rendition-[Beta]%3A-Figma-%3EReact" target="blank">Rendition</S_text_link>)</_card_tittle>
					<br></br>
					<li>Startup bridging the gap between design and web development</li>
					<li>Create React Components and Pages from Figma designs using our Rendition Figma Plugin</li>
					<li>Fullstack developer maintaining the backend that generates valid React, JSX, CSS, and styled-components</li>
					<li>Migration to different outputs such as Webflow</li>
					<li>Integration of Google Cloud based products such as Firebase, VertexAI, Tensorflow Edge</li>
				</_card>
				<_card>
					<_card_tittle>2020-2021 (Lockdown Period)</_card_tittle>
					<br></br>
					<li>Advent of
						Code, <S_text_link href="https://leetcode.com/kecolour/" target="blank">Leetcode</S_text_link>
						, <S_text_link href="https://www.hackerrank.com/kmira?hr_r=1" target="blank">HackerRank</S_text_link>
						, Project Euler, Codewars</li>
					<li>Game Development in C from scratch</li>
					<li>IT and hardware consultant</li>
				</_card>
				<_card>
					<_card_tittle>2018-2020 (<S_text_link href="https://42.fr/en/homepage/" target="blank">42 Silicon Valley</S_text_link>)</_card_tittle>
					<br></br>
					<li>Hands-on learning environment where success is tied with peer reviewed software projects</li>
					<li>Minimum requirements included 40 hours/week of C coding</li>
					<li>Tech Conference Volunteer (AngelHack, Bixby, Google, Oracle)</li>
					<li>Audio/Visual Technician</li>
					<li><S_text_link href="https://github.com/42kmira" target="blank">https://github.com/42kmira</S_text_link></li>
				</_card>
				<_card>
					<_card_tittle>2014-2018 (<S_text_link href="https://www.sjc.edu/" target="blank">St John's College</S_text_link>)</_card_tittle>
					<br></br>
					<li>Electromagnetism</li>
					<li>Newtonian Physics</li>
					<li>Discrete Math (Lambda Calculus)</li>
					<li>Bachelor's Degree in Liberal Arts: double major in philosophy and history of science, double minor in classical studies and comparative literature</li>
					<li>Audio/Visual Technician</li>
					<li>Python Scripts and ML starter projects</li>
				</_card>
				<_card>
					<_card_tittle>2012-2014 (High School)</_card_tittle>
					<br></br>
					<li>AP Computer Science (Java)</li>
					<li>AP Calculus AB</li>
					<li>AP Physics</li>
					<li>Highschool Computer Science II (Java)</li>
					<li>plus 8 other AP classes</li>
				</_card>
		</E_page>
	);
};

const _line = styled.b`
	${style_board_title}
	font-size: max(min(2.2vw, 24px), 12px);
`

const _card = styled.div`
	${style_inset_board}
	${style_default_margin_spacer}

	width: 80%;
	flex-direction: column;
	font-size: max(min(1.8vw, 16px), 8px);
	color: ${(props) => props.theme.style_accent_color};
`

const _card_tittle = styled(S_board_title_underline)`
	font-size: max(min(2.2vw, 24px), 12px);
`

const _board_space = styled.div`
	padding: 15px 0px;
`

const _profile_image = styled.img`
	${style_default_board_shadow}
	width: max(20vw, 84px);
	aspect-ratio: 1/1;

	margin: auto;
	display: flex;

	border-radius: min(2vw, 18px);
`