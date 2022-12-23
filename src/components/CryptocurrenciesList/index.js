import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isTrue: true,
    cryptoList: [],
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const {cryptoList} = this.state
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const newList = data.map(eachValue => ({
      currencyName: eachValue.currency_name,
      usdValue: eachValue.usd_value,
      euroValue: eachValue.euro_value,
      id: eachValue.id,
      currencyLogo: eachValue.currency_logo,
    }))
    this.setState({cryptoList: newList, isTrue: false})
  }

  render() {
    const {cryptoList, isTrue} = this.state
    return (
      <>
        {isTrue && (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
        {!isTrue && (
          <>
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="image-crypto"
              alt="cryptocurrency"
            />
            <ul className="cryptoList">
              <li className="top-item">
                <h1 className="top-name">COIN TYPE</h1>
                <div className="second-div">
                  <h1 className="top-names">USD</h1>
                  <h1 className="top-names">EURO</h1>
                </div>
              </li>
              {cryptoList.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} itemValue={eachItem} />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}
export default CryptocurrenciesList