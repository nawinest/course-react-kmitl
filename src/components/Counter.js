import React from 'react'

const Counter = (props) => {
  const [timer, setTimer] = React.useState(0) // value - function to update
  const handleClick = () => {
    setTimer(timer + 1)
  }

  React.useEffect(() => {
    // use when updating value (componentdidmount / didupdate)
    // 1st argument is callback when value has update
    // 2nd argument for specific values
    // if [] in 2nd argument it mean it will do only one time.
    // return statement , it means componentdidUnmount
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])

  return (
    <div>
        Timer: {timer}
      <button type="button" onClick={handleClick}> Add </button>
    </div>
  )
}

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       timer: 0,
//     }
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState((state) => { this.setState({ timer: state.timer + 1 }) })
//     }, 1000)
//   }

//   render() {
//     const { timer } = this.state
//     return (
//       <div>
//          Timer: {timer}
//       </div>
//     )
//   }
// }

export default Counter
