// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {totalCount: 0}

  onCount = event => {
    const a = event.target.value
    this.setState({totalCount: a.length})
  }

  render() {
    const {totalCount} = this.state
    return (
      <div className="container">
        <div className="frame">
          <div>
            <h1>
              Calculate the <br />
              Letters you <br />
              enter
            </h1>
            <label className="para" htmlFor="t">
              Enter the phrase
            </label>
            <br />
            <input
              id="t"
              type="text"
              className="search-tab"
              placeholder="Enter the phrase"
              onChange={this.onCount}
            />
            <div className="card">
              <p>No.of letters: {totalCount}</p>
            </div>
          </div>
        </div>
        <div className="frame2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
