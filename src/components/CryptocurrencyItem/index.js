import './index.css'

const CryptocurrencyItem = props => {
  const {itemValue} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemValue
  return (
    <li className="list-item">
      <div className="logo-holder">
        <img src={currencyLogo} className="logo-crypto" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="right-div">
        <p className="currency-values">{usdValue}</p>
        <p className="currency-values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
