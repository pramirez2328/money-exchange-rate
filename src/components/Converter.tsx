import { useState, useEffect } from 'react';
import { getRate } from '../api';
import { Currency } from '../types';

function Converter() {
  const [currency, setCurrency] = useState<Currency>({
    amountFrom: '1',
    currencyFrom: 'USD',
    amountTo: '1',
    currencyTo: 'MXN',
    inputFrom: true,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getRate(currency);
      setCurrency(data);
    };
    getData();
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
      <div className='container  w-11/12 md:w-9/12 rounded-lg mt-16 flex flex-col justify-center'>
        <h1 className='shadow-2xl mb-4 text-center text-2xl md:text-4xl p-4 mb-8 rounded-full'>CONVERSION RATE</h1>
        <div className='flex flex-col md:flex-row w-full justify-between mt-12'>
          <div className='md:w-5/12 flex border border-stone-500 p-2 rounded mb-10 md:mb-0'>
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
              <option value='INR'>INR</option>
              <option value='BRL'>BRL</option>
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
