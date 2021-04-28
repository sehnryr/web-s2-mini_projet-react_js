import React from "react"

function LangButton(props) {

    const nextLangIndex = (Object.keys(props.languages).indexOf(props.currentLanguage) + 1) % Object.keys(props.languages).length
    const nextLang = Object.keys(props.languages)[nextLangIndex]

    const handleSetLanguage = () => { props.setLanguage(nextLang) }

    return (
        <button id="langSelector" type="button" onClick={ handleSetLanguage }>
            {props.flag}
        </button>
    )
}

export default LangButton