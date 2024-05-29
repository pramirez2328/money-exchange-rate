function Header() {
  const date = new Date();
  const today = date.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='flex flex-col md:flex-row justify-between bg-slate-100 p-6 text-gray-500'>
      <div className='shadow-2xl p-2 rounded-md'>
        <h1 className='text-gray-500 text-3xl uppercase tracking-wider '>Exchange Rate</h1>
      </div>
      <h3 className='mt-4'>{today}</h3>
    </div>
  );
}

export default Header;
