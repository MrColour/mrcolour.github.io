import styled from "styled-components";
import { useEffect, useState, useLayoutEffect } from "react";

import icon_2048 from "../assets/icon_2048.png";
import icon_chess from "../assets/icon_chess.png";
import icon_flappy from "../assets/icon_flappy.png";
import icon_mym from "../assets/icon_mym.png";
import icon_pac from "../assets/icon_pac.png";
import icon_tictac from "../assets/icon_tictac.png";
import icon_taptiles from "../assets/icon_taptiles.png";

import { E_hexagon_image } from "../components/comp_hexagon";

import { S_board_title_underline} from "../default_styles";

export const E_strip_app_tiles = ({}) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (document.getElementById('hexagon_grid'))
		{
			setWidth(document.getElementById('hexagon_grid').clientWidth);
		}
	})

	useLayoutEffect(() => {
		function updateSize() {
			if (document.getElementById('hexagon_grid'))
			{
				setWidth(document.getElementById('hexagon_grid').clientWidth);
			}
		}
		window.addEventListener('resize', updateSize);
	});

	return (
		<_strip>
			Showcase of Self-Built
			<S_board_title_underline>Applications: </S_board_title_underline>
			<_hexagon_grid id="hexagon_grid">
				<E_hexagon_image id={0} parent_size={width} img={icon_2048}		 url={"#/2048"}/>
				<E_hexagon_image id={1} parent_size={width} img={icon_chess}	 url={"#/chess"}/>
				<E_hexagon_image id={3} parent_size={width} img={icon_flappy}	 url={"#/flappy_bird"}/>
				<E_hexagon_image id={4} parent_size={width} img={icon_mym}		 url={"#/mympheus"}/>
				<E_hexagon_image id={5} parent_size={width} img={icon_pac}		 url={"#/pacman"}/>
				<E_hexagon_image id={6} parent_size={width} img={icon_tictac}	 url={"#/tic_tac_toe"}/>
				<E_hexagon_image id={7} parent_size={width} img={icon_taptiles}	 url={"#/taptiles"}/>
			</_hexagon_grid>
			<S_board_title_underline></S_board_title_underline>
		</_strip>
	)
}

const _hexagon_grid = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	padding-top: 30px;

	width: 90%;

	@media (min-width: 721px) {
		width: 460px;
		width: 90%;
		left: -30px;
	}

	@media (max-width: 720px) {
		width: min(260px, 90%);
		left: -15px;
	}
	box-sizing: border-box;
	margin: auto;
	margin-bottom: 40px;
	/* margin-top: 35px; */
	/* border: 1px solid red; */
	/* justify-content: space-between; */
	/* justify-content: center; */

	/* width: min(100%, 800px); */
`

const _strip = styled.div`
	width: 100%;
	color: ${(props) => props.theme.style_accent_color};
`