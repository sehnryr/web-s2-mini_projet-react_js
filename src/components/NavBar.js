import React from "react"
import {
    Badge,
    Navbar
} from "react-bootstrap"
import {
    ShoppingCart
} from "@material-ui/icons"

export default function NavBar({ totalCounters }) {
    return (
        <Navbar bg="light">
            <Navbar.Brand>
                <ShoppingCart className="m-2" />
                <Badge className="m-2" pill variant="info" style={{ width: 50 }}>0</Badge>
                Items
            </Navbar.Brand>
        </Navbar>
    )
}