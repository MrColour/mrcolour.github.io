import { styled } from "../default_styles";

import { E_background_default } from "./comp_background";
import { E_bar_bottom_page } from "./comp_bar_bottom.js";
import { E_bar_top_page } from "./comp_bar_top";
// import { E_hamburger_switch } from "./comp_hamburger_switch";
// import { E_theme_switch } from "./comp_theme_switch";

import bottom_border from "../assets/border.png"

export const E_page = ({ children }) => {
	return (
		<div>
			<E_bar_top_page></E_bar_top_page>
			{/* <E_theme_switch set_theme={set_theme}></E_theme_switch> */}
			{/* <E_hamburger_switch set_theme={set_theme}></E_hamburger_switch> */}
			<E_background_default></E_background_default>
			<E_full_page>
				{children}
				<img src={bottom_border} style={{width:"80%", maxWidth:"600px", margin:"auto", filter: "drop-shadow(-3px 3px 2px #05050588)"}}></img>
			</E_full_page>
			<E_bar_bottom_page></E_bar_bottom_page>
		</div>
	);
};

const max_gutter = 50
const min_gutter = 12
const resp_gutter = 1.7

const E_full_page = styled.div`
	margin-left: calc(max(30px, min(50px, 6.7vw)) + max(10px, min(32px, 6.5vw)));
	padding:
		calc(max(${min_gutter}px, min(${max_gutter}px, ${resp_gutter}vw)) + 18px + 40px)
		calc(max(${min_gutter}px, min(${max_gutter}px, ${resp_gutter}vw)) + 18px)
		80px
		calc(max(${min_gutter}px, min(${max_gutter}px, ${resp_gutter}vw)) + 18px);

	display: flex;
	justify-content: center;
	flex-direction: column;
`;
