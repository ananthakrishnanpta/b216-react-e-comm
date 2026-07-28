import useCurrency from "../../hooks/useCurrency";

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();
    return(
        <select value = {currency} onChange={(event) => 
            setCurrency(event.target.value)
        } className="nav-item dropdown">

            <option value="USD" className="dropdown-item" >Dollars</option>
            <option value="INR">Rupee</option>
            <option value="EUR">Euro</option>
        </select>
    )
}

export default CurrencySelector;