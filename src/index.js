import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";

import WebFont from "webfontloader";

import { E_page_home } from "./pages/home";
import { E_page_about } from "./pages/about";
import { E_page_resume } from "./pages/resume";
import { E_page_contact } from "./pages/contact";
import { E_page_app } from "./pages/applications/app_template";
import { app_data } from "./pages/applications/app_data";
import { E_page_not_found } from "./pages/not_found";

WebFont.load({
	google: {
		families: ["IBM Plex Sans:700"],
	},
});

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

import { style_dark, style_alabaster } from "./default_styles_color";
import { ThemeProvider } from "styled-components";

function change_theme(current_theme, set_fn, theme) {
	if (current_theme.name != theme.name && localStorage.getItem("theme") == theme.name) {
		set_fn({ ...theme });
	}
}

export const _root = ({children}) => {
	const [theme, set_theme] = useState({ ...style_alabaster });
	// const [theme, set_theme] = useState({ ...style_dark });

	change_theme(theme, set_theme, style_alabaster);
	change_theme(theme, set_theme, style_dark);

	return (
		<div>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</div>
	)
}

rootElement.render(
	<_root>
		<Router>
			<Routes>
				<Route path="/"			element={<E_page_home />} />
				<Route path="/home"		element={<E_page_home />} />
				<Route path="/about"	element={<E_page_about />} />
				<Route path="/resume"	element={<E_page_resume />} />
				<Route path="/contact"	element={<E_page_contact />} />

				<Route path="/2048"			element={<E_page_app id={0} app_data={app_data['a2048']} />} />
				<Route path="/chess"		element={<E_page_app id={1} app_data={app_data['chess']} />} />
				<Route path="/flappy_bird"	element={<E_page_app id={3} app_data={app_data['flappy_bird']} />} />
				<Route path="/mympheus"		element={<E_page_app id={4} app_data={app_data['mympheus']} />} />
				<Route path="/pacman"		element={<E_page_app id={5} app_data={app_data['pacman']} />} />
				<Route path="/tic_tac_toe"	element={<E_page_app id={6} app_data={app_data['tic_tac_toe']} />} />

				<Route path="/*" 		element={<E_page_not_found />} />
			</Routes>
		</Router>
	</_root>
);
