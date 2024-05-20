function Converter() {
  return (
    <div className='container w-9/12 rounded-lg mt-12 flex flex-col justify-center '>
      <h1 className='border-2 shadow-2xl mb-4 text-center text-4xl'>CONVERSE RATE</h1>
      <div className='flex w-full justify-between'>
        <div className='w-3/12'>
          <select name='from-currency' id='from' className='w-full'>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='JPY'>JPY</option>
            <option value='CNY'>CNY</option>
          </select>
        </div>

        <div className='w-3/12'>
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
