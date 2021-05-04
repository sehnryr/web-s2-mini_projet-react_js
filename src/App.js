import React, { useState } from "react"
import NavBar from "./components/NavBar"
import Counters from "./components/Counters"
import {
    Container
} from "react-bootstrap"

export default function App() {
    const [countersNum, setCountersNum] = useState(4)
    const initialCounters = [...Array(countersNum)].map((_, index) => { return { id: index, value: 0 } })
    const [counters, setCounters] = useState(initialCounters)

    const handleIncrement = (counter) => {
        const index = counters.indexOf(counter)
        setCounters((prev) => {
            const newCounters = [...prev] // we don't want to edit the previous state
            newCounters[index].value++
            return newCounters
        })
    }

    const handleDecrement = (counter) => {
        const index = counters.indexOf(counter)
        setCounters((prev) => {
            let newCounters = [...prev]
            newCounters[index].value--
            return newCounters
        })
    }

    const handleReset = () => {
        setCounters((prev) => {
            let newCounters = [...prev]
            return newCounters.map((elem) => {
                elem.value = 0
                return elem
            })
        })
    }

    const handleDelete = (counterId) => {
        setCounters((prev) => {
            let newCounters = [...prev]
            return newCounters.filter((elem) => elem.id !== counterId)
        })
    }

    const handleAdd = () => {
        setCounters((prev) => {
            let newCounters = [...prev]
            newCounters.push({ id: countersNum, value: 0 })
            setCountersNum((prev) => prev + 1)
            return newCounters
        })
    }

    return (
        <React.Fragment>
            <NavBar
                totalCounters={counters.filter((counter) => counter.value !== 0).length}
            />
            <Container>
                <Counters
                    counters={counters}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    onAdd={handleAdd}
                />
            </Container>
        </React.Fragment>
    )
}