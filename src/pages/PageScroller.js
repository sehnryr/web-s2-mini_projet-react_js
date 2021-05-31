import React from "react"
import ReactFullpage from "@fullpage/react-fullpage";
import Presentation from "./Presentation";
import Presentation_2 from "./Presentation_2";
import Principle from "./Principle"
import Demo from "./Demo"
import Conclusion from "./Conclusion"
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
	const anchors = Object.values(props.titles)

	return (
		<ReactFullpage
			className={classes.navigation}

			navigation={true}
			navigationPosition="left"
			navigationTooltips={anchors}
			scrollingSpeed={600}
			normalScrollElements=".LivePreview"

			render={({ fullpageApi }) => (
				<ReactFullpage.Wrapper>
					<Presentation title={props.titles["presentation"]} useTranslation={props.useTranslation}/>
					<Presentation_2 title={props.titles["presentation_2"]} useTranslation={props.useTranslation}/>
					<Principle title={props.titles["principle"]} useTranslation={props.useTranslation}/>

					<Demo
						title={props.titles["demo"]}
						fullpageApi={fullpageApi}
						useTranslation={props.useTranslation}
					/>
					<Conclusion title={props.titles["conclusion"]} />
				</ReactFullpage.Wrapper>
			)}
		/>
	)
}