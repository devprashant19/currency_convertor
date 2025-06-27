import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = '',
}) {
    const amountInputId = useId();
    return (
        <div className={`my-auto flex justify-between text-white h-0 to h-20 w-0 to w-180 rounded-xl py-5 px-10 4 bg-white ${className}`}>
            <div className='flex flex-col justify-center items-start'>
                <label htmlFor={amountInputId} className='px-2 text-gray-400'>{label}</label>
                <input id={amountInputId} type="number" placeholder='Amount' className='focus:outline-none p-2 text-black rounded-lg w-0 to w-80'
                    disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <select value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled} className='focus:outline-none my-auto text-black p-2 rounded-lg w-0 to w-40'>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default InputBox