import React, { useState } from "react"
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

const languages = { "fr_FR": fr_FR, "en_US": en_US }

setTranslations({ fr_FR, en_US })
setDefaultLanguage(Object.keys(languages)[0])

function App(props) {
	useTranslation()

	const titles = Object.values(languages[getLanguage()]["titles"])

	const [ currentPage, setCurrentPage ] = useState(0) // we indicate the initial page index in useState
	const [ fastPage, setFastPage ] = useState(currentPage)

	return (
		<React.Fragment>
			<Navbar 
				titles={ titles } 
				currentPage={ fastPage }
				setCurrentPage={ setCurrentPage }
			/>

			<PageScroller
				numPages={ titles.length }
				titles={ titles }
				currentPage={ currentPage }
				setCurrentPage={ setCurrentPage }
				fastPage={ fastPage }
				setFastPage={ setFastPage }
				useTranslation={ useTranslation }
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

export default App