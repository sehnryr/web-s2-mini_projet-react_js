import React from "react"
import Navbar from "./Navbar"
// import LangButton from "./LangButton"
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    getLanguage,
    getLanguages,
    translate,
} from "react-switch-lang";
import fr_FR from "./lang/fr_FR.json"
import en_US from "./lang/en_US.json"

setTranslations({ fr_FR, en_US })
setDefaultLanguage("fr_FR")
setLanguageCookie() // to remember selected language

function App(props) {
    const { t } = props
    const languages = getLanguages()

    let nextLangIndex = (languages.indexOf(getLanguage()) + 1) % languages.length
    let nextLang = languages[nextLangIndex]

    const handleSetLanguage = (key) => () => { setLanguage(key) }

    return (
        <div>
            <Navbar titles={t("titles")} />
            {typeof(t("titles"))}
            {/* <LangButton 
                currentLanguage={getLanguage()} 
                languages={getLanguages()} 
                setLanguage={setLanguage} 
            /> */}
            <button type="button" onClick={handleSetLanguage(nextLang)}>
                {t("flag")}
            </button>
        </div>
    )
}

export default translate(App)