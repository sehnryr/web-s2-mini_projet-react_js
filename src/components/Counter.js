import React from "react"
import {
    Badge,
    Button
} from "react-bootstrap"
import makeStyle from "@material-ui/core/styles/makeStyles"
import {
    AddCircle,
    RemoveCircle,
    DeleteForever
} from "@material-ui/icons"

const useStyles = makeStyle({
    badge: {
        fontSize: 24,
        height: "2.53125rem"
    },
    button: {
        padding: 6
    },
    icon: {
        width: "1.65625rem"
    }
})

export default function Counter(props) {
    const classes = useStyles()

    return (
        <div className="row">
            <div className="col-md-1">
                <Badge
                    variant={props.counter.value !== 0 ? "info" : "warning"}
                    className={`m-2 ${classes.badge}`}
                >
                    {props.counter.value}
                </Badge>
            </div>
            <div className="col-md-4">
                <Button
                    variant="secondary"
                    onClick={() => props.onIncrement(props.counter)}
                    className={`m-2 ${classes.button}`}
                >
                    <AddCircle className={classes.icon} />
                </Button>
                <Button
                    variant="info"
                    onClick={() => props.onDecrement(props.counter)}
                    className={`m-2 ${classes.button}`}
                    disabled={props.counter.value === 0}
                >
                    <RemoveCircle className={classes.icon} />
                </Button>
                <Button
                    variant="danger"
                    onClick={() => props.onDelete(props.counter.id)}
                    className={`m-2 ${classes.button}`}
                >
                    <DeleteForever className={classes.icon} />
                </Button>
            </div>
        </div>
    )
}