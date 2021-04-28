import React from "react"
import NavbarItem from "./NavbarItem"

function Navbar(props) {
    const titles = Object.values(props.titles)
    const navbarItems = titles.map((title, index) => <NavbarItem key={index} title={title} />)

    return (
        <ul>
            {navbarItems}
        </ul>
    )
}

export default Navbar