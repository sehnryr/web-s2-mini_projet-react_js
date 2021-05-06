const counter = `
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    // justifyContent: "flex-end"
  },
  paperButton: {
    margin: theme.spacing(1),
    height: 45,
    width: 45,
    textAlign: "center",
    lineHeight: "45px"
  },
  container: {
    height: 336,
    overflowY: "auto"
  }
}))

function Navbar({ totalCounters }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Badge badgeContent={totalCounters} color="secondary" style={{ marginRight: 20 }}>
          <ShoppingCart />
        </Badge>
        <Typography variant="h6">
          Cart
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function Counter(props) {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Paper className={classes.paperButton}>
        {props.counter.value}
      </Paper>
      <Fab 
        className={classes.paperButton} 
        onClick={() => props.onIncrement(props.counter)}
        color="primary"
      >
        <Add />
      </Fab>
      <Fab 
        className={classes.paperButton} 
        onClick={() => props.onDecrement(props.counter)} 
        disabled={props.counter.value === 0}
      >
        <Remove />
      </Fab>
      <Fab 
        color="secondary"
        className={classes.paperButton} 
        onClick={() => props.onDelete(props.counter.id)} 
      >
        <DeleteForever />
      </Fab>
    </Paper>
  )
}


function Counters(props) {
  return (
    <React.Fragment>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </React.Fragment>
  );
}

function App() {
  const classes = useStyles()

  const [countersNum, setCountersNum] = React.useState(3)
  const initialCounters = Array.from(Array(countersNum).keys()).map((index) => ({ id: index, value: 0 }))
  const [counters, setCounters] = React.useState(initialCounters)

  const handleIncrement = (counter) => {
    const index = counters.indexOf(counter)
    setCounters((prev) => {
      const newCounters = [...prev]; // we don't want to edit the previous state
      newCounters[index].value++
      return newCounters
    });
  };

  const handleDecrement = (counter) => {
    const index = counters.indexOf(counter)
    setCounters((prev) => {
      let newCounters = [...prev]
      newCounters[index].value--
      return newCounters
    });
  };

  const handleReset = () => {
    setCounters((prev) => {
      let newCounters = [...prev]
      return newCounters.map((elem) => {
        elem.value = 0
        return elem
      });
    });
  };

  const handleDelete = (counterId) => {
    setCounters((prev) => {
      let newCounters = [...prev]
      return newCounters.filter((elem) => elem.id !== counterId)
    });
  };

  const handleAdd = () => {
    setCounters((prev) => {
      let newCounters = [...prev]
      newCounters.push({ id: countersNum, value: 0 })
      setCountersNum((prev) => prev + 1)
      return newCounters
    });
  };

  return (
    <React.Fragment>
      <Navbar totalCounters={counters.filter((counter) => counter.value !== 0).length} />
      <Container className={classes.container}>
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </Container>
      <Fab 
        color="secondary" 
        className={classes.fab}
        onClick={handleAdd}
      >
        <Add />
      </Fab>
    </React.Fragment>
  )
}

render(<App />)
`.trim();

export default counter