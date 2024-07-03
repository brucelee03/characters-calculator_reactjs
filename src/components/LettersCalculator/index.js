import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {numOfLetters: 0, typeInput: ''}

  onTypingLetters = event => {
    this.setState({
      typeInput: event.target.value,
      numOfLetters: event.target.value.length,
    })
  }

  render() {
    const {typeInput, numOfLetters} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letters-calculator-img"
          alt="letters calculator"
        />
        <div className="calculating-letters-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase" className="title">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phrase"
            placeholder="Enter the phrase"
            value={typeInput}
            onChange={this.onTypingLetters}
          />
          <div>
            <p className="calculating-letters">No.of letters: {numOfLetters}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
