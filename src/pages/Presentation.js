import React, { useState, useEffect } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

import SlideButtons from "../buttons/SlideButtons"
import { Container } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
	tbody: {
		textAlign: "center",
		margin: "2%"
	}
})

export default function Presentation(props) {
	const classes = useStyles()
	const t = props.useTranslation()

	const [handleMovement, setHandleMovement] = useState({
		forward: function () { },
		backward: function () { }
	})
	useEffect(() => {
		if (props.fullpageApi !== undefined) {
			setHandleMovement({
				forward: () => props.fullpageApi.moveSlideRight(),
				backward: () => props.fullpageApi.moveSlideLeft()
			})
		}
	}, [props.fullpageApi])

	return (
		<div className="section">
			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<Container>
					{t("content.presentation")}
				</Container>
			</div>

			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<Container>
					{t("content.presentation_2")}
				</Container>
			</div>

			<SlideButtons
				className={classes.buttonGroup}
				forward={handleMovement.forward}
				backward={handleMovement.backward}
			/>
		</div >
	)
}