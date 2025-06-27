import { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  if(amount<0){
    setAmount(0);
  }
  return (
    <>
      <div className='w-screen flex justify-center items-center h-screen bg-gray-800'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='flex flex-col justify-center items-center text-white h-0 to h-120 w-0 to w-200 rounded-xl py-5 px-10 4 bg-blue-400'>
            <h1 className='text-2xl text-black font-bold mb-4 p-4'>Currency Converter</h1>
            <InputBox label="From" amount={amount} onAmountChange={(amount)=>{setAmount(amount)}} selectedCurrency={from} currencyOptions={options} onCurrencyChange={(currency)=>{setFrom(currency)}}/>
            <button className='bg-blue-500 text-white rounded-lg p-2 m-2 w-0 to w-20' onClick={swap}>Swap</button>
            <InputBox label="To" amount={convertedAmount} selectedCurrency={to} currencyOptions={options} onCurrencyChange={(currency)=>{setTo(currency)}} amountDisabled={true}/>
            <button className='bg-blue-500 text-white rounded-lg p-2 m-2 w-full'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
