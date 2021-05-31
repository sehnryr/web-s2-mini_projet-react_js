import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
	tbody: {
		textAlign: "center",
		margin: "2%"
	}
})

export default function Principle(props) {
	const classes = useStyles()
	const t = props.useTranslation()

	return (
		<div className="section">
			<h1 className={classes.root} >{props.title}</h1>
			<p className={classes.tbody}>{t("content.principle")}</p>
		</div>
	)
}