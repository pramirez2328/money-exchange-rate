function header() {
  const date = new Date();
  const today = date.toISOString().split('T')[0];

  return (
    <div className='flex justify-between w-full bg-slate-200 p-6 text-gray-500'>
      <h1 className='text-gray-500 text-3xl uppercase tracking-wider'>Exchange Rate</h1>
      <h3>{today}</h3>
    </div>
  );
}

export default header;
