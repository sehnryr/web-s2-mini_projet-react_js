import React, { useState } from "react"
import ReactPageScroller from "react-page-scroller";
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

const languages = { "fr_FR": fr_FR, "en_US": en_US }

setTranslations({ fr_FR, en_US })
setDefaultLanguage(Object.keys(languages)[0])

function App(props) {
	// const t = useTranslation()
	useTranslation()

	const navbarTitles = Object.values(languages[getLanguage()]["titles"])

	const [ currentPage, handlePageChange ] = useState(0) // we indicate the initial page index in useState

	return (
		<React.Fragment>
			<Navbar 
				titles={navbarTitles} 
				currentPage={currentPage}
			/>

			<ReactPageScroller
				animationTimer={600}
				pageOnChange={handlePageChange}
				onBeforePageScroll={console.log}
				customPageNumber={currentPage}
			>
				{navbarTitles.map((title) => <div>{title}</div>)}
			</ReactPageScroller>

			<RightMenu 
				currentLanguage={ getLanguage() }
				languages={ languages }
				setLanguage={ setLanguage }
				useTranslation={ useTranslation }
			/>
		</React.Fragment>
	)
}

export default App