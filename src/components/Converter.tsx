function Converter() {
  return (
    <div className='container w-9/12 rounded-lg h-svh flex justify-between items-center'>
      <div className='w-3/12 border-2 w-full shadow-2xl'>conversion rate</div>
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
  );
}

export default Converter;
