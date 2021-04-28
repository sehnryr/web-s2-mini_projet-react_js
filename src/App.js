import React from "react"
import Navbar from "./navbar/Navbar"
import { 
    setLanguage,
    setTranslations,
    setDefaultLanguage,
    useTranslation,
    getLanguage
} from "react-multi-lang";

import fr_FR from "./lang/fr_FR.json"
import en_US from "./lang/en_US.json"

const languages = { "fr_FR": fr_FR, "en_US": en_US }

setTranslations({ fr_FR, en_US })
setDefaultLanguage(Object.keys(languages)[0])

function App(props) {
    const t = useTranslation()

    let nextLangIndex = (Object.keys(languages).indexOf(getLanguage()) + 1) % Object.keys(languages).length
    let nextLang = Object.keys(languages)[nextLangIndex]

    const handleSetLanguage = (key) => () => { setLanguage(key) }

    return (
        <div>
            <Navbar titles={languages[getLanguage()]["titles"]} />
            <button type="button" onClick={handleSetLanguage(nextLang)}>
                {t("flag")}
            </button>
        </div>
    )
}

export default App