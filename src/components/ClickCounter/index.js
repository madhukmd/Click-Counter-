import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  resetCount = () => {
    this.setState(prevState => ({count: prevState.count - prevState.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="contentContainer">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="element">{count}</span> times
        </h1>

        <p className="paragraph">Click the button to increase the count!</p>

        <div className="btnContainer">
          <button
            type="button"
            className="buttonStyle"
            onClick={this.increaseCount}
          >
            Click Me!
          </button>
          <button
            style={{display: 'inline-block'}}
            type="button"
            className="buttonStyle"
            onClick={this.resetCount}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
