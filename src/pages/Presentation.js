import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	}
})

export default function Presentation(props) {
	const classes = useStyles()

	return (
		<div className="section">
			<h1 className={classes.root} >{props.title}</h1>
			<p>{props.content}</p>
		</div>
	)
}