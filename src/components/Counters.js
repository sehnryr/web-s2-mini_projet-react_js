import React from "react"
import Counter from "./Counter"
import {
    Button
} from "react-bootstrap"
import makeStyle from "@material-ui/core/styles/makeStyles"
import {
    Add,
    Refresh
} from "@material-ui/icons"

const useStyles = makeStyle({
    button: {
        padding: 6
    },
    icon: {
        width: "1.65625rem"
    }
})

export default function Counters(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Button
                className={`m-2 ${classes.button}`}
                variant="primary"
                onClick={props.onAdd}
            >
                <Add className={classes.icon} />
            </Button>
            <Button
                className={`m-2 ${classes.button}`}
                variant="success"
                onClick={props.onReset}
            >
                <Refresh className={classes.icon} />
            </Button>
            {
                props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={props.onIncrement}
                        onDecrement={props.onDecrement}
                        onDelete={props.onDelete}
                    />
                ))
            }
        </React.Fragment>
    )
}