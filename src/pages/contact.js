import styled from "styled-components";
import { E_page } from "../components/comp_page";

import { S_board_title_underline, style_board_text } from "../default_styles";

import profile_picture from "../assets/profile.gif";
import bottom_border from "../assets/border.png"

import { useEffect, useState } from "react";

const dataText = [
`I'm a Digital Mage!
`,

`I'm a Software Developer, writing big to small systems from scratch.

Sincerely,
Kevin Mira`,

`Experienced self-taught Software Engineer with 7 years of coding expertise, specializing in SDL Libraries, React, and dev tool development. Proficient in a wide range of technologies, ranging from frameworks like React or low level code, with a particular focus on the C programming language.

I fully designed and programmed in React the website you are on.

Below are ways in which you can contact me:
Email: kmira@lookup.email
Or the other form on this page?

Cheers,
Kevin Mira`,
];

const SPEED_SLOW = 32;
const SPEED_FAST = 16;
const SPEED_NEAR_INSTANT = 2;

export const E_page_contact = ({}) => {
	const [_my_email, set_email] = useState('');
	const [index, set_index] = useState(0);
	const [j_index, set_j_index] = useState(0);
	const [background, set_background] = useState("rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3)");

	const [speed, set_speed] = useState(32);

	function increase_speed() {
		if (speed == SPEED_SLOW)
		{
			set_speed(SPEED_FAST);
		} else if (speed == SPEED_FAST) {
			set_speed(SPEED_NEAR_INSTANT);
		}
	}

	useEffect(() => {
		let cursor = " ▌";
		if (Math.floor(index / 4) % 3 == 0) { cursor = ""; }
		if (index >= dataText[j_index].length - 1) { cursor = ""; }

		if (index >= dataText[j_index].length && j_index < 2)
		{
			setTimeout(function() {
				set_j_index(j_index + 1);
				set_index(0);
			}, 420);

			setTimeout(function() {
				set_background("#509ef185");
			}, 100);
			setTimeout(function() {
				set_background("rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3)");
			}, 380);
		} else if (index < dataText[j_index].length) {
			setTimeout(function() {
				set_email(dataText[j_index].substring(0, index + 1) + cursor);
				set_index(index + 1);
			}, speed);
		}

	}, [index]);

	return (
		<E_page>
				<S_board_title_underline>
					Get in Touch:
				</S_board_title_underline>

				<_form_container>
					<_form onMouseDown={() => increase_speed()}>
						<_input name="Email" id="email" placeholder="kmira@lookup.email" disabled></_input>
								<_text_input type="text" name="message" rows="15" disabled value={_my_email} style={{backgroundColor:background}}></_text_input>
					</_form>
				</_form_container>

				<_form_container>
					<_form action="https://formspree.io/f/mnqlagwl" method="post">
						<_input name="Email" id="email" placeholder="eg: foobar@email.com"></_input>
						<_text_input type="text" name="message" placeholder="Text: Hi, I'd like to..." rows="13"></_text_input>
						<_button_submit type="submit">Submit</_button_submit>
					</_form>
				</_form_container>
				<S_board_title_underline></S_board_title_underline>
					<_soft_text>We would make a great team together, what are you waiting for?</_soft_text>
				<S_board_title_underline></S_board_title_underline>
		</E_page>
	);
};

const _board_space = styled.div`
	${style_board_text}
	padding: 15px 0px;
`

const _form = styled.form`
	padding: 18px 12px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const _text_input = styled.textarea`
	font-size: max(min(2vw, 14px), 8px);
	display: flex;

	line-height: 1.15;
`

const _form_container = styled.div`
	width: min(100%, 650px);

	margin: auto;
`

const _input = styled.input`

`
const _button_submit = styled.button`
	width: 80px;
	aspect-ratio: 3/1;
`
const _standout_font = styled.div`
	margin-top: 20px;
	`

const _soft_text = styled.a`
	${style_board_text}
`

const _profile_image = styled.img`
	width: 40vw;
	aspect-ratio: 1/1;

	margin: auto;
	display: flex;

	border-radius: 40px;
`