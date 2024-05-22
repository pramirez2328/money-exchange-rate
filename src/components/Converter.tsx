import { useState, useEffect } from 'react';
const url = import.meta.env.VITE_EXCHANGE_RATE_API_URL;
const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

function Converter() {
  const [rate, setRate] = useState(0);
  const [currency, setCurrency] = useState({ fromCurrency: 'USD', toCurrency: 'USD', amountFrom: 1, amountTo: 1 });

  useEffect(() => {
    fetch(`${url}/${apiKey}/pair/${currency.fromCurrency}/${currency.toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.conversion_rate);
      });
  }, [currency.fromCurrency, currency.toCurrency, currency.amountFrom, currency.amountTo]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, cond: string) => {
    if (cond === 'fromAmount') {
      setCurrency({ ...currency, amountFrom: +e.target.value });
    } else if (cond === 'fromCurrency') {
      setCurrency({ ...currency, fromCurrency: e.target.value });
    } else if (cond === 'toCurrency') {
      setCurrency({ ...currency, amountTo: +e.target.value });
    } else if (cond === 'toAmount') {
      setCurrency({ ...currency, toCurrency: e.target.value });
    }
  };

  return (
    <>
      <div className='container  w-11/12 md:w-9/12 rounded-lg mt-12 flex flex-col justify-center '>
        <h1 className='shadow-2xl mb-4 text-center text-4xl p-4 rounded mb-8'>CONVERSION RATE</h1>
        <div className='flex w-full justify-between'>
          <div className='w-5/12 flex border border-stone-500 p-2 rounded'>
            <input
              type='number'
              className='w-6/12'
              onChange={(e) => handleOnChange(e, 'fromAmount')}
              value={currency.amountFrom}
            />
            <span className='mx-2'>|</span>
            <select
              name='from-currency'
              id='from'
              className='w-full'
              onChange={(e) => handleOnChange(e, 'fromCurrency')}
              value={currency.fromCurrency}
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='GBP'>GBP</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>

          <div className='w-5/12 flex border border-stone-500 p-2 rounded'>
            <input
              type='number'
              className='w-6/12'
              onChange={(e) => handleOnChange(e, 'toCurrency')}
              value={currency.amountTo}
            />
            <span className='mx-2'>|</span>
            <select name='to-currency' id='to' className='w-full' onChange={(e) => handleOnChange(e, 'toAmount')}>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='GBP'>GBP</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h2 className='rate-result text-center'>{rate}</h2>
      </div>
    </>
  );
}

export default Converter;
