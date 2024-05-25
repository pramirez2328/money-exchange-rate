import { useState, useEffect } from 'react';
const url = import.meta.env.VITE_EXCHANGE_RATE_API_URL;
const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

function Converter() {
  const [currency, setCurrency] = useState({ fromCurrency: 'USD', toCurrency: 'USD', amountFrom: 1, amountTo: 1 });
  const [result, setResult] = useState({ fromCurrency: 'USD', toCurrency: 'USD', amountFrom: 1, amountTo: 1 });

  useEffect(() => {
    fetch(`${url}/${apiKey}/pair/${currency.fromCurrency}/${currency.toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult({
          fromCurrency: data.base_code,
          toCurrency: data.target_code,
          amountFrom: currency.amountFrom,
          amountTo: data.conversion_rate * currency.amountFrom,
        });
      });
  }, [currency]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    cond: string
  ) => {
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
              value={result.amountFrom}
            />
            <span className='mx-2'>|</span>
            <select
              name='from-currency'
              id='from'
              className='w-full'
              onChange={(e) => handleOnChange(e, 'fromCurrency')}
              value={result.fromCurrency}
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
              value={result.amountTo}
            />
            <span className='mx-2'>|</span>
            <select
              name='to-currency'
              id='to'
              className='w-full'
              value={result.toCurrency}
              onChange={(e) => handleOnChange(e, 'toAmount')}
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='GBP'>GBP</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;
