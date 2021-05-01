import React from "react"
import ReactFullpage from "@fullpage/react-fullpage";
import {
	makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	}
})

export default function PageScroller(props) {
	const classes = useStyles()

	const content = (
		props.titles.map((title, index) => (
			<div key={ index } className="section" >
				<h1 className={ classes.root } >{ title }</h1>
			</div>
		))
	)

	return (
		<ReactFullpage
			scrollingSpeed = { 600 }

			render={() => (
				<ReactFullpage.Wrapper>
					{ content }
				</ReactFullpage.Wrapper>
			)}
		/>
	)
}