import React from "react"
import NavbarItem from "./NavbarItem"

function Navbar() {
    const titles = ["Présentation", "Principe", "Démonstration", "Fonctionnement"]
    const navbarItems = titles.map((title, index) => <NavbarItem key={index} title={title} />)

    return (
        <ul>
            {navbarItems}
        </ul>
    )
}

export default Navbar