import { useState, useEffect } from 'react';
const url = import.meta.env.VITE_EXCHANGE_RATE_API_URL;
const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

interface Currency {
  amountFrom: string;
  currencyFrom: string;
  amountTo: string;
  currencyTo: string;
  inputFrom?: boolean;
}

function Converter() {
  const [currency, setCurrency] = useState<Currency>({
    currencyFrom: 'USD',
    currencyTo: 'EUR',
    amountFrom: '1',
    amountTo: '1',
    inputFrom: true,
  });
  const [result, setResult] = useState<Currency>({
    amountFrom: '',
    currencyFrom: '',
    amountTo: '',
    currencyTo: '',
  });

  useEffect(() => {
    const apiFrom = currency.inputFrom ? currency.currencyFrom : currency.currencyTo;
    const apiTo = currency.inputFrom ? currency.currencyTo : currency.currencyFrom;

    fetch(`${url}/${apiKey}/pair/${apiFrom}/${apiTo}`)
      .then((response) => response.json())
      .then((data) => {
        setResult({
          amountFrom: currency.inputFrom ? currency.amountFrom : (+currency.amountTo * data.conversion_rate).toFixed(2),
          currencyFrom: currency.currencyFrom,
          amountTo: currency.inputFrom ? (+currency.amountFrom * data.conversion_rate).toFixed(2) : currency.amountTo,
          currencyTo: currency.currencyTo,
        });
      });
  }, [currency]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    cond: string
  ) => {
    if (cond === 'amountFrom') {
      setCurrency({
        ...result,
        amountFrom: e.target.value,
        inputFrom: true,
      });
    } else if (cond === 'currencyFrom') {
      setCurrency({ ...result, currencyFrom: e.target.value, inputFrom: true });
    } else if (cond === 'amountTo') {
      setCurrency({
        ...result,
        amountTo: e.target.value,
        inputFrom: false,
      });
    } else if (cond === 'currencyTo') {
      setCurrency({ ...result, currencyTo: e.target.value, inputFrom: false });
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
              onChange={(e) => handleOnChange(e, 'amountFrom')}
              value={result.amountFrom}
            />
            <span className='mx-2'>|</span>
            <select
              name='from-currency'
              id='from'
              className='w-full'
              onChange={(e) => handleOnChange(e, 'currencyFrom')}
              value={result.currencyFrom}
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='MXN'>MXN</option>
              <option value='GBP'>GBP</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>

          <div className='w-5/12 flex border border-stone-500 p-2 rounded'>
            <input
              type='number'
              className='w-6/12'
              onChange={(e) => handleOnChange(e, 'amountTo')}
              value={result.amountTo}
            />
            <span className='mx-2'>|</span>
            <select
              name='to-currency'
              id='to'
              className='w-full'
              value={result.currencyTo}
              onChange={(e) => handleOnChange(e, 'currencyTo')}
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='MXN'>MXN</option>
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
