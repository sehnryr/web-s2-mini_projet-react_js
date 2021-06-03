import React, { useState, useEffect } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

import SlideButtons from "../buttons/SlideButtons"
import { Container } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
	tbody: {
		fontSize: "125%"
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
				<img src="https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png" alt="Description de l'image React-icon.svg." width="45%"/>
			</div>
			
			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<Container className={classes.tbody}>
					{t("content.presentation")}
				</Container>
			</div>

			<div className={`slide ${classes.root}`}>
			<h1 className={classes.root}>Satistique de commits</h1>
				<img src="https://i.imgur.com/eeV5mpu.png" alt="Statistique de commit!" width="35%"/>
				<p>Capture issue de <a href="https://github.com/facebook/react/graphs/contributors">https://github.com/facebook/react/graphs/contributors</a></p>
			</div>

			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>Satistique d'utilisateur</h1>
				<img src="https://i.imgur.com/4eYAp6c.png" alt="Il y a + de 6.5M d'utilisateurs!" width="25%"/>
				<p>Capture issue de <a href="https://github.com/facebook/react">https://github.com/facebook/react</a></p>
			</div>

			<SlideButtons
				className={classes.buttonGroup}
				forward={handleMovement.forward}
				backward={handleMovement.backward}
			/>
		</div >
	)
}