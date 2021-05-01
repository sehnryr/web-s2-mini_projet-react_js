import React from "react"
import NavbarButton from "./NavbarButton"
import NavbarItem from "./NavbarItem"
// import NavbarStepper from "./NavbarStepper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	root: {
		position: "absolute",
		top: "50vh",
		transform: "translateY(-50%)"
	}
})

function Navbar(props) {
	const classes = useStyles()
	const titles = props.titles
	const navbarItems = titles.map((title, index) => <NavbarItem key={index} title={title} />)

	return (
		<React.Fragment>
			<NavbarButton />
			<nav className={ classes.root }>
				<ul>
					{navbarItems}
				</ul>
			</nav>
			{/* <NavbarStepper 
				steps={ titles.length } 
				currentPage={ props.currentPage }
				setCurrentPage={ props.setCurrentPage }
			/> */}
		</React.Fragment>
	)
}

export default Navbar