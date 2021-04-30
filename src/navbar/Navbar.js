import React from "react"
import NavbarItem from "./NavbarItem"

function Navbar(props) {
	const titles = props.titles
	const navbarItems = titles.map((title, index) => <NavbarItem key={index} title={title} />)

	return (
		<nav>
			<ul>
				{navbarItems}
			</ul>
		</nav>
	)
}

export default Navbar