import { useState } from "react";

import styled from "styled-components";
import { style_default_board_shadow } from "../default_styles";

import glass from "../assets/glass_feel6.png";

let hexagon_size = 126;
let offset = 10;
const hexagon_border_size = 8;

export const E_hexagon_image = ({img, id, parent_size, url}) => {
	const [isHovered, setHover] = useState(false);

	return (
		<_container parent_size={parent_size} href={url}>
			<_hexagon parent_size={parent_size} id={id + '_hexagon'} onMouseOver={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
					<path stroke="none" fill="#f6f6f6" d="M118 2.618802153517a16 16 0 0 1 16 0l94.851251684408 54.762395692966a16 16 0 0 1 8 13.856406460551l0 109.52479138593a16 16 0 0 1 -8 13.856406460551l-94.851251684408 54.762395692966a16 16 0 0 1 -16 0l-94.851251684408 -54.762395692966a16 16 0 0 1 -8 -13.856406460551l1.7443573448258e-13 -109.52479138593a16 16 0 0 1 8 -13.856406460551">
					</path>
				</svg>
				<_hexagon2>
					<svg xmlns="http://www.w3.org/2000/svg" width={256} height={256}>
						<path stroke="none" fill={"url(#" + id + "img6)"} d="M110 2.618802153517a16 16 0 0 1 16 0l87.923048454133 50.762395692966a16 16 0 0 1 8 13.856406460551l0 101.52479138593a16 16 0 0 1 -8 13.856406460551l-87.923048454133 50.762395692966a16 16 0 0 1 -16 0l-87.923048454133 -50.762395692966a16 16 0 0 1 -8 -13.856406460551l1.6169445592635e-13 -101.52479138593a16 16 0 0 1 8 -13.856406460551"></path>

						<defs>
							<pattern id={id + "img6"} patternUnits="userSpaceOnUse" width="256" height="256" x="-10" y ="-10">
								<_hexagon_svg href={img} hover={isHovered} width="256"/>
								<_glass href={glass} hover={isHovered} x="-80" y="-35" width="300" height="300" transform="rotate(-20 0 0)"/>
							</pattern>
						</defs>
					</svg>
				</_hexagon2>
			</_hexagon>
		</_container>
	);
}

const _container = styled.a`
	position: relative;
	aspect-ratio: 1;
	/* width: 126px; */
	box-sizing: border-box;
	/* border: 1px solid black; */
	margin-top: -10px;

	@media (min-width: 900px) {
		width: 125.9px;
			:nth-child(${(props) => {
				let num = parseInt((props.parent_size) / (126));
				if (num % 2 == 1)
				{
				num = parseInt((props.parent_size) / 126);
			} else {
				num = parseInt((props.parent_size) / (126 / 2));
				num = parseInt((props.parent_size) / (126));
				return (num * 2) + "n"
			}
			return ((num) * 2 + "n");
		}}
		) {
			/* border: 1px solid red; */
			width: 64.5px;
		}

		:nth-child(${(props) => {
			let num = parseInt((props.parent_size) / 126);
			if (num % 2 == 1)
			{
				num = parseInt((props.parent_size) / 126);
			}

			return ((num) * 2 + "n + " + (num + 1));
		}}
		) {
			margin-left: ${61.5 + 'px'};
		}
	}

	@media (max-width: 899px) {
		width: 79.5px;
		:nth-child(${(props) => {
				let num = parseInt((props.parent_size) / (80));
				if (num % 2 == 1)
				{
				num = parseInt((props.parent_size) / 80);
			} else {
				num = parseInt((props.parent_size) / (80 / 2));
				num = parseInt((props.parent_size) / (80));
				return (num * 2) + "n"
			}
			return ((num) * 2 + "n");
		}}
		) {
			/* border: 1px solid red; */
			width: 41.1px;
		}

		:nth-child(${(props) => {
			let num = parseInt((props.parent_size) / 80);
			if (num % 2 == 1)
			{
				num = parseInt((props.parent_size) / 80);
			}

			return ((num) * 2 + "n + " + (num + 1));
		}}
		) {
			/* border: 1px solid blue; */
			margin-left: ${10 * 4 + 'px'};
		}
	}
`


const _glass = styled.image`
	filter: ${(props) => props.hover==true ? "opacity(.9) brightness(450%)" : "opacity(.05)"};
	transition: all .7s ease;
`

const _hexagon_svg = styled.image`
	filter: ${(props) => props.hover==true ? "blur(0) saturate(1.2)" : "blur(3px)"};
	transition: all 0.6s ease;
	transform: ${(props) => props.hover==true ? "scale(1.042)" : ""};
	transform-origin: center;

	/* ::acted_hover {
		filter: blur(0px);
		transition: all .5s ease;
	} */
`
const _hexagon = styled.div`
	${style_default_board_shadow}
	transition: all .5s ease;

	:hover {
		filter: drop-shadow(-14px 14px 8px ${(props) => props.theme.style_shadow_color});
	}

	@media (min-width: 900px) {
		width: ${126 + 'px'};
		height: ${126 - 15 + 'px'};
		transform: scale(calc(126 / 252));
	}

	@media (max-width: 899px) {
		width: ${80 + 'px'};
		height: ${80 - 15 + 'px'};
		transform: scale(calc(80 / 252));
	}

	position: relative;
	top: -27px;
	left: -30px;
`

const _hexagon2 = styled.div`
	position: absolute;
	top: ${hexagon_border_size + 'px'};
	left: ${hexagon_border_size + 'px'};
	filter: grayscale(90%) brightness(60%) saturate(.7);
	transition: all 3s ease;

	:hover {
		filter: grayscale(10%);
		transition: all .5s ease;
	}
`