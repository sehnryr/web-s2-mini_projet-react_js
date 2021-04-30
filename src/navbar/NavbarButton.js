import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { 
	IconButton 
} from "@material-ui/core"
import {
	ArrowForward,
	Close
} from "@material-ui/icons"

const useStyles = makeStyles({
	root: {
		position: "absolute",
		top: ".5rem",
		left: ".5rem"
	}
})

export default function NavbarButton(props) {
	const classes = useStyles()
	const [ clicked, setClickedState ] = useState(false)

	const handleClick = () => {
		setClickedState((prev) => {
			return !prev 
		})
	}

	return (
		<IconButton 
			className={ classes.root } 
			onClick={ handleClick }
		>
			{ !clicked ? <ArrowForward /> : <Close /> }
		</IconButton>
	)
}