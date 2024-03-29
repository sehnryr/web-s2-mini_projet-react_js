import React, { useState, useEffect } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

import SlideButtons from "../buttons/SlideButtons"
import { Container , Link } from "@material-ui/core"


const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
})

export default function Principle(props) {
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
					{t("content.principle.resume")}
					<br></br>
					<h3>{t("content.principle.one_word")}</h3>
				</Container>
			</div>

			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<Container>
					{t("content.principle_2")}
				</Container>
			</div>

			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<Container>
				<h3>{t("content.principle_3.resume")}</h3>
				<Link href="https://claudiopro.github.io/react-fiber-vs-stack-demo/stack.html">React-Stack</Link>
				<br></br>
				<Link href="https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html">React-Fiber</Link>
				</Container>
			</div>

			<SlideButtons
				forward={handleMovement.forward}
				backward={handleMovement.backward}
			/>
		</div >

	)
}