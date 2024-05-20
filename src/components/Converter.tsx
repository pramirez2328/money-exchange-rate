function Converter() {
  return (
    <div className='container  w-11/12 md:w-9/12 rounded-lg mt-12 flex flex-col justify-center '>
      <h1 className='border-2 shadow-2xl mb-4 text-center text-4xl p-4 rounded mb-8'>CONVERSION RATE</h1>
      <div className='flex w-full justify-between'>
        <div className='w-5/12 flex border border-stone-500 p-2 rounded'>
          <input type='number' className='w-6/12' />
          <span className='mx-2'>|</span>
          <select name='from-currency' id='from' className='w-full'>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='JPY'>JPY</option>
            <option value='CNY'>CNY</option>
          </select>
        </div>

        <div className='w-5/12 flex border border-stone-500 p-2 rounded'>
          <input type='number' className='w-6/12' />
          <span className='mx-2'>|</span>
          <select name='to-currency' id='to' className='w-full'>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='JPY'>JPY</option>
            <option value='CNY'>CNY</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Converter;
