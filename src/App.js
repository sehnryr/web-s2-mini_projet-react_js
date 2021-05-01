import React from "react"
import PageScroller from "./pages/PageScroller"
import Navbar from "./navbar/Navbar"
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

import "./style.css"

const languages = { fr_FR, en_US }

setTranslations({ fr_FR, en_US })
setDefaultLanguage(Object.keys(languages)[0])

export default function App() {
	const t = useTranslation()
	const titles = Object.values(languages[getLanguage()]["titles"])
	console.log(titles)

	return (
		<React.Fragment>
			<Navbar 
				titles={ titles }
			/>
			<PageScroller 
				titles={ titles }
			/>
			<RightMenu 
				currentLanguage={ getLanguage() }
				languages={ languages }
				setLanguage={ setLanguage }
				useTranslation={ useTranslation }
			/>
		</React.Fragment>
	)
}