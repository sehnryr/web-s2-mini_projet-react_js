import React from "react"
import PageScroller from "./pages/PageScroller"
import { RightMenu } from "./menus/Menus"
import {
	setLanguage,
	setTranslations,
	setDefaultLanguage,
	useTranslation,
	getLanguage
} from "react-multi-lang";

import fr_FR from "./lang/fr_FR.json"
import en_US from "./lang/en_US.json"
import eo_EO from "./lang/eo_EO.json"

import "./style.css"

const languages = { fr_FR, en_US, eo_EO }

setTranslations(languages)
setDefaultLanguage(Object.keys(languages)[0])

export default function App() {
	const t = useTranslation()
	const titles = languages[getLanguage()]["titles"]

	return (
		<React.Fragment>
			<PageScroller
				titles={titles}
				useTranslation={useTranslation}
			/>
			<RightMenu
				currentLanguage={getLanguage()}
				languages={languages}
				setLanguage={setLanguage}
				useTranslation={useTranslation}
			/>
		</React.Fragment>
	)
}