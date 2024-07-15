import { useEffect, useState } from "react";

import styled from "styled-components";
import { E_page } from "../../components/comp_page";

import { S_board_title_underline, style_board_text, style_default_board_shadow, style_border_base, S_text_link, S_board_text } from "../../default_styles";

import { E_strip_app_tiles } from "../../components/comp_strip_apps";

const _container = styled.canvas`
	${style_border_base}
	filter: drop-shadow(-12px 10px 10px #151515bf);
	width: min(80%, 400px);
	height: min(80%, 400px);
	aspect-ratio: ${(props) => props.ratios};

	border-radius: 10px;

	margin: 0px auto 70px;
	display: block;
	box-sizing: border-box;
`;


export const E_page_app = ({app_data, id}) => {
	window.addEventListener('hashchange', e => {
		window.location.reload()
		if (document.getElementById("canvas") != undefined)
		{
			if (document.getElementsByClassName("canvas0")[0] != undefined && id != 0) {document.getElementsByClassName("canvas0")[0].remove();}
			if (document.getElementsByClassName("canvas1")[0] != undefined && id != 1) {document.getElementsByClassName("canvas1")[0].remove();}
			if (document.getElementsByClassName("canvas3")[0] != undefined && id != 3) {document.getElementsByClassName("canvas3")[0].remove();}
			if (document.getElementsByClassName("canvas4")[0] != undefined && id != 4) {document.getElementsByClassName("canvas4")[0].remove();}
			if (document.getElementsByClassName("canvas5")[0] != undefined && id != 5) {document.getElementsByClassName("canvas5")[0].remove();}
			if (document.getElementsByClassName("canvas6")[0] != undefined && id != 6) {document.getElementsByClassName("canvas6")[0].remove();}
			if (document.getElementsByClassName("canvas7")[0] != undefined && id != 7) {document.getElementsByClassName("canvas7")[0].remove();}
			if (document.getElementsByClassName("canvas8")[0] != undefined && id != 8) {document.getElementsByClassName("canvas8")[0].remove();}
		}

	  });

	useEffect(() => {
		if (module != undefined) {
			app_data['module']({
				canvas: (() => document.getElementsByClassName("canvas" + id)[0])(),
			});
		}
	}, []);

	return (
		<E_page id={id}>
		<S_board_title_underline>
		{app_data['title']}:
		</S_board_title_underline>
			<_summary>
				{app_data['description']}
			</_summary>
		<S_board_title_underline></S_board_title_underline>
		<_board_space>
		<div style={{ margin: "auto" }}>
			<_container id={"canvas"} className={"canvas" + id} ratios={app_data['aspect_ratio']}></_container>
		</div>
		</_board_space>
		{ app_data['url'] != undefined &&
			<>
				<S_board_title_underline>Source Code:</S_board_title_underline>
				<_link_font href={app_data['url']} target="_blank">{app_data['url']}</_link_font>
				<br></br>
			</>
		}
		<E_strip_app_tiles></E_strip_app_tiles>
		</E_page>
	);
};

const _board_space = styled.div`
	${style_board_text}
	padding: 35px 0px;
`

const _summary = styled(S_board_text)`
	margin: 20px 0px;
`

const _link_font = styled(S_text_link)`
	padding: 10px 0px;
	text-align: start;
	&:hover {
		border: none;
	}
`

// style={{display:"block", width:"80%", height:"80vh", margin:"auto"}}
const _iframe_pdf = styled.iframe`
	width: 100%;
	aspect-ratio: 5/7;

	border: none;
	border-radius: 3px;

	${style_default_board_shadow}
`


const _profile_image = styled.img`
	width: 40vw;
	aspect-ratio: 1/1;

	margin: auto;
	display: flex;

	border-radius: 40px;
`
