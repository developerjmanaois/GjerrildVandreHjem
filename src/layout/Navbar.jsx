import React, { useState } from 'react';
import { GrMoney } from 'react-icons/gr';
import { SlGlobe } from 'react-icons/sl';
import newsParam from './newsapi_requestparameters.json';
import currency from './currency.json';

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('DKK');

  return (
    <div className='flex justify-between max-w-5xl mx-auto items-center py-6'>
      <div>
        <img src="assets/Billeder/Galleri/NewLogo.png" alt="" className='w-32' />
      </div>
      <div className='flex gap-6 items-center uppercase text-sm'>
        <div className='mr-6'>
          <button className='px-4 py-1 rounded uppercase navBtn text-slate-500'>
            Bestil online
          </button>
        </div>
        <div className='flex justify-center items-center border border-solid py-2 px-4'>
          <div className='flex items-center'>
            <SlGlobe />
            <div>
              <select onChange={e => setLanguage(e.target.value)} className='outline-none border-none'>
                {newsParam &&
                  newsParam.language.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.language}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className='mx-4'>
            <span>|</span>
          </div>
          <div className='flex items-center'>
            <GrMoney />
            <select onChange={e => setSelectedCurrency(e.target.value)} className='outline-none border-none'>
              {currency &&
                currency.currencies.map(curr => (
                  <option key={curr.code} value={curr.code}>
                    {curr.code}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
