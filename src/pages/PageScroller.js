import React, { useState, useEffect } from "react"
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
	// const t = props.useTranslation()
	const classes = useStyles()
	const anchors = props.titles
	// const [ anchors, setAnchors ] = useState(props.titles)
	
	// useEffect(() => {
	// 	if (anchors !== props.titles) {
	// 		setAnchors(props.titles)
	// 	}
	// })

	const content = (
		props.titles.map((title, index) => (
			<div key={ index } className="section" >
				<h1 className={ classes.root } >{ title }</h1>
			</div>
		))
	)

	return (
		<ReactFullpage
			className={ classes.navigation }

			navigation={ true }
			navigationPosition="left"
			navigationTooltips={ anchors }
			scrollingSpeed={ 600 }

			render={() => (
				<ReactFullpage.Wrapper>
					{ content }
				</ReactFullpage.Wrapper>
			)}
		/>
	)
}