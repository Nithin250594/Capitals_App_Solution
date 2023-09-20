import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capital: event.target.value})
  }

  getCountry = () => {
    const {capital} = this.state
    const countryValue = countryAndCapitalsList.find(
      eachCapitalItem => eachCapitalItem.id === capital,
    )
    return countryValue.country
  }

  render() {
    const {capital} = this.state
    const country = this.getCountry(capital)

    return (
      <div className="capitals-bg">
        <div className="capitals-container">
          <h1 className="capitals-title">Countries And Capitals</h1>
          <form>
            <select
              id="capitals"
              className="select-capital"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapitalItem => (
                <option value={eachCapitalItem.id} key={eachCapitalItem.id}>
                  {eachCapitalItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" className="capital-label">
              is capital of which country?
            </label>
          </form>
          <p className="country"> {country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
