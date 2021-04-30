import React, { useEffect } from "react"
import {
	makeStyles
} from "@material-ui/core/styles"
import {
	Button,
	MobileStepper
} from "@material-ui/core"
import {
	KeyboardArrowLeft,
	KeyboardArrowRight
} from "@material-ui/icons"

const useStyles = makeStyles({
	root: {
	}
})

export default function NavbarStepper(props) {
	const classes = useStyles()
	const steps = props.steps
	const activeStep = props.currentPage

	const handleNext = () => {
		props.setCurrentPage((prevPageNumber) => prevPageNumber + 1)
	}

	const handleBack = () => {
		props.setCurrentPage((prevPageNumber) => prevPageNumber - 1)
	}

	return (
		<MobileStepper 
			variant="progress"
			steps={ steps }
			position="bottom"
			activeStep={ activeStep }
			className={ classes.root }
			nextButton={
				<Button size="small" onClick={ handleNext } disabled={ activeStep === steps - 1 }>
					Next
					<KeyboardArrowRight />
				</Button>
			}
			backButton= { 
				<Button size="small" onClick={ handleBack } disabled={ activeStep === 0 }>
					<KeyboardArrowLeft />
					Back
				</Button>
			}
		/>
	)
}