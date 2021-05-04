import React, { useState, useEffect } from "react"
import {
    IconButton,
    ButtonGroup,
    makeStyles
} from "@material-ui/core/"
import {
    NavigateBefore,
    NavigateNext
} from "@material-ui/icons"


const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },
    buttonGroup: {
        position: "absolute",
        zIndex: 4,
        bottom: 0,
        right: 0,
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
    }
})

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

    return (
        <div className="section">
            <div className={`slide ${classes.root}`}>
                <h2>{t("pages.demo.counter")}</h2>
                <iframe
                    src="https://codesandbox.io/embed/react-counter-demo-xu107?fontsize=11&hidenavigation=1&theme=dark"
                    className={classes.codesandbox}
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                >
                </iframe>
            </div>
            <div className={`slide ${classes.root}`}>
                <h3>Slide 2.2</h3>
            </div>
            <div className={`slide ${classes.root}`}>
                <h3>Slide 2.3</h3>
            </div>

            <ButtonGroup className={classes.buttonGroup}>
                <IconButton
                    onClick={handleMovement.backward}
                >
                    <NavigateBefore fontSize="large" />
                </IconButton>
                <IconButton
                    onClick={handleMovement.forward}
                >
                    <NavigateNext fontSize="large" />
                </IconButton>
            </ButtonGroup>
        </div>
    )
}