import { useState, useEffect } from 'react';
import { getRate } from '../api';

interface Currency {
  amountFrom: string;
  currencyFrom: string;
  amountTo: string;
  currencyTo: string;
  inputFrom?: boolean;
}

function Converter() {
  const [currency, setCurrency] = useState<Currency>({
    amountFrom: '1',
    currencyFrom: 'USD',
    amountTo: '1',
    currencyTo: 'EUR',
    inputFrom: true,
  });

  useEffect(() => {
    getRate(currency).then((data) => {
      setCurrency(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    cond: string
  ) => {
    if (cond === 'amountFrom') {
      getRate({ ...currency, amountFrom: e.target.value, inputFrom: true }).then((data) => {
        setCurrency(data);
      });
    } else if (cond === 'currencyFrom') {
      getRate({ ...currency, currencyFrom: e.target.value, inputFrom: true }).then((data) => {
        setCurrency(data);
      });
    } else if (cond === 'amountTo') {
      getRate({ ...currency, amountTo: e.target.value, inputFrom: false }).then((data) => {
        setCurrency(data);
      });
    } else if (cond === 'currencyTo') {
      getRate({ ...currency, currencyTo: e.target.value, inputFrom: false }).then((data) => {
        setCurrency(data);
      });
    }
  };

  console.log(currency);

  return (
    <>
      <div className='container  w-11/12 md:w-9/12 rounded-lg mt-12 flex flex-col justify-center '>
        <h1 className='shadow-2xl mb-4 text-center md:text-4xl p-4 mb-8 rounded-full'>CONVERSION RATE</h1>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div className='md:w-5/12 flex border border-stone-500 p-2 rounded mb-5 md:mb-0'>
            <input
              type='number'
              className='w-6/12'
              onChange={(e) => handleOnChange(e, 'amountFrom')}
              value={currency.amountFrom}
            />
            <span className='mx-2'>|</span>
            <select
              name='from-currency'
              id='from'
              className='w-full'
              onChange={(e) => handleOnChange(e, 'currencyFrom')}
              value={currency.currencyFrom}
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='MXN'>MXN</option>
              <option value='GBP'>GBP</option>
              <option value='JPY'>JPY</option>
              <option value='CNY'>CNY</option>
            </select>
          </div>

          <div className='md:w-5/12 flex border border-stone-500 p-2 rounded'>
            <input
              type='number'
              className='w-6/12'
              onChange={(e) => handleOnChange(e, 'amountTo')}
              value={currency.amountTo}
            />
            <span className='mx-2'>|</span>
            <select
              name='to-currency'
              id='to'
              className='w-full'
              value={currency.currencyTo}
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
