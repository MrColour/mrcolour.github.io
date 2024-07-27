import styled, { useTheme } from "styled-components";

import { E_page } from "../components/comp_page";
import { E_strip_app_tiles } from "../components/comp_strip_apps";

import {
	S_text_link,
	S_board_text,
	S_board_title,

	style_text_bold,
	style_inset_board,
	style_board_max_size,
	style_default_board_shadow,
	style_default_margin_spacer,
} from "../default_styles";

const modelPath = "/rhetorician/scene.gltf";

export const E_page_home = ({}) => {
	const theme = useTheme();
	console.log(theme);

	return (
		<E_page>
			<_container6>
				<_container7>

					<_container_inset>
						<_bold_text>Kevin Mira</_bold_text>
						<_right_side>
							<S_board_text>Software Developer</S_board_text>
							<S_board_title>"I was faster than the others only because they hurried to write it twice."</S_board_title>
						</_right_side>
					</_container_inset>

					<_strip>

						<_left_side_sum>
							<S_board_title>Classically Trained with modern twist</S_board_title>
							<S_board_text>
								<p>
									The term “technology” comes from the ancient Greek techne.
								</p>
								<p>
									τέχνη: art, craft, workmanship, trade, artfulness, metier
								</p>
								<p>
								"Artisans of an earlier age were proud to sign their work. Your <S_text_link href="https://github.com/MrColour/mrcolour.github.io">signature</S_text_link> should come to be recognized as an indicator of quality."
								</p>
								<p>
									<S_text_link href="/#/about">Learn about me</S_text_link>.
								</p>
							</S_board_text>
						</_left_side_sum>

						<_container_inset_viewer>
							<model-viewer
								id="philo"
								camera-target="0m 2.18m .4m"
								scale=".8 .8 .8"
								autoplay
								style={{width:"100%", height:"100%", zIndex:"1", color: "red"}}
								src={modelPath}
								preload
								reveal-when-loaded
								field-of-view="30deg"
								camera-orbit="4deg 80deg 10m"
								shadow-intensity="2.5"
								// exposure="1.1"
								exposure={theme.name === "alabaster" ? "1.1" :"0.6"}
								// camera-controls
								>
							</model-viewer>
						</_container_inset_viewer>

					</_strip>
				</_container7>

			<_lowest_container>
				<S_board_title style={{fontSize: "max(min(3.8vw, 38px), 11px)"}}>
					Over 2048 Hours Coding
				</S_board_title>
				<S_board_text>
					<p>
						For the past five years I have been relentlessly coding 40 hours per week.
						I have built many small to medium sized programs from scratch. Most of that time I have been honing my craft using
						C, giving me strong computer science fundamentals and allowing me to quickly adapt to different tech stacks.
					</p>
					<p>
						Below are some of the programs I have created in that time.
						The source code for most of them can be found <S_text_link href="https://github.com/uplinkx" target="_blank">here</S_text_link>.
						Check them out, I have ported them to run within the browser.
					</p>
				</S_board_text>
			</_lowest_container>
			</_container6>

			<E_strip_app_tiles></E_strip_app_tiles>
		</E_page>
	);
};

const _container7 = styled.div`
	/* border: 1px solid red; */
`

const _container6 = styled.div`
	/* border: 1px solid blue; */
	display: flex;
	flex-wrap: wrap;
`

const _right_side = styled.div`
	width: 56%;
`

const _lowest_container = styled.div`
	${style_default_margin_spacer}

	@media (min-width: 1350px) {
		width: 30%;
		margin-top: 0px;
		margin-left: min(3vw, 100px);
		max-width: 500px;
	}
`

const _left_side_sum = styled.div`
	width: 50%;
	box-sizing: border-box;
	padding-right: 10px;
`

const _strip = styled.div`
	display: flex;
	max-width: ${style_board_max_size};
`

const _container_inset = styled.div`
	${style_inset_board}

	align-items: center;
	gap: min(max(8px, 1vw), 16px);
	margin-bottom: 42px;
`

const _container_inset_viewer = styled.div`
	${style_inset_board}
	width: 50%;
	aspect-ratio: 7/9;

	overflow: hidden;
`

const _bold_text = styled.div`
	${style_default_board_shadow}
	${style_text_bold}
	text-align: right;
	width: 38%;
`;
