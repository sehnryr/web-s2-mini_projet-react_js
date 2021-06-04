import React, { useState, useEffect } from "react"
import {
	makeStyles
} from "@material-ui/core/styles"
import {
	IconButton,
	Container,
	Collapse,
	Box,
	Tooltip,
	Paper,
	AppBar,
	Badge,
	Toolbar,
	Typography,
	Fab,
	Link
} from "@material-ui/core/"
import {
	Code,
	ShoppingCart,
	Add,
	Remove,
	DeleteForever
} from "@material-ui/icons"
import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview
} from "react-live"
import dracula from "prism-react-renderer/themes/dracula"

import SlideButtons from "../buttons/SlideButtons"

import counter from "../demos/counter"

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center"
	},
	button: {
		position: "absolute",
		right: 0,
		bottom: 0,
		left: "auto !important"
	},
	codesandbox: {
		width: "80%",
		maxHeight: 500,
		minHeight: 400,
		border: 0,
		borderRadius: 4,
		overflow: "hidden"
	},
	live: {
		maxWidth: 500,
	},
	liveButtons: {
		display: "flex",
		justifyContent: "flex-end"
	},
	liveView: {
		position: "relative",
		height: 400,
		overflow: "hidden"
	},
	liveCode: {
		maxHeight: 400,
		overflowY: "scroll"
	}
}))

export default function Demo(props) {
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

	const [collapse, setCollapse] = useState({
		counterCode: false
	})

	const handleCollapse = (id) => {
		setCollapse((prev) => {
			const newObj = Object.assign({}, prev)
			newObj[id] = !newObj[id]
			return newObj
		})
	}

	return (
		<div className="section">
			<div className={`slide ${classes.root}`}>
				<h1 className={classes.root}>{props.title}</h1>
				<h2 className={classes.root}>{t("content.demo.counter")}</h2>
				<Container className={classes.live}>
					<LiveProvider
						code={counter}
						theme={dracula}
						className={classes.liveEditor}
						scope={{ AppBar, ShoppingCart, Badge, Toolbar, Typography, Container, Paper, Fab, Add, makeStyles, Box, Remove, DeleteForever }}
						noInline={true}
					>
						<Box
							className="LivePreview"
						>
							<Collapse in={!collapse.counterCode}>
								<Paper square className={classes.liveView}>
									<LivePreview style={{ height: "100%" }} />
								</Paper>
							</Collapse>
							<Collapse in={collapse.counterCode} >
								<Paper square className={classes.liveCode}>
									<LiveEditor style={{ tabSize: 2 }} />
								</Paper>
							</Collapse>
						</Box>
						<Box className={classes.liveButtons}>
							<Tooltip title={t("util.showcode")} placement="top">
								<IconButton onClick={() => handleCollapse("counterCode")}>
									<Code />
								</IconButton>
							</Tooltip>
						</Box>
						<LiveError />
					</LiveProvider>
				</Container>
			</div>

			<div className={`slide ${classes.root}`}>
				<h2>{t("content.demo.website")}</h2>
				<Link href="https://github.com/sehnryr/web-s2-mini_projet-react_js">sehnryr/web-s2-mini_projet-react_js</Link>
			</div>

			<SlideButtons
				forward={handleMovement.forward}
				backward={handleMovement.backward}
			/>
		</div >
	)
}