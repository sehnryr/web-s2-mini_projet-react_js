import React from "react"
import { ButtonGroup, IconButton } from "@material-ui/core"
import { NavigateBefore, NavigateNext } from "@material-ui/icons"
import {
    makeStyles
} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        position: "absolute",
        zIndex: 4,
        bottom: 0,
        right: 0,
    }
}))

export default function SlideButtons(props) {
    const classes = useStyles()

    return (
        <ButtonGroup className={classes.buttonGroup}>
            <IconButton
                onClick={props.backward}
            >
                <NavigateBefore fontSize="large" />
            </IconButton>
            <IconButton
                onClick={props.forward}
            >
                <NavigateNext fontSize="large" />
            </IconButton>
        </ButtonGroup>
    )
}