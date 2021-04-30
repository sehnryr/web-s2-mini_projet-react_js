import React from "react"
import ReactPageScroller from "react-page-scroller"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
	}
})

export default function PageScroller(props) {
	const classes = useStyles()
	props.useTranslation()

	const handlePageChange = (pageNumber) => {
		pageNumber !== props.currentPage && props.setCurrentPage(pageNumber)
	}

	return (
		<ReactPageScroller
			className={ classes.root }
			animationTimer={ 600 }
			pageOnChange={ handlePageChange }
			onBeforePageScroll={ props.setFastPage }
			customPageNumber={ props.currentPage }
		>
			{ props.titles.map((title, index) => <div key={ index }>{ title }</div>) }
		</ReactPageScroller>
	)
}