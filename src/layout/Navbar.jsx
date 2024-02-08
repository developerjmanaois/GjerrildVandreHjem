import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrMoney } from 'react-icons/gr';
import { SlGlobe } from 'react-icons/sl';
import newsParam from '../assets/json/newsapi_requestparameters.json';
import currency from '../assets/json/currency.json';


const Navbar = () => {

  const [language, setLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('DKK');

  return (
    <div className='flex justify-between max-w-5xl mx-auto items-center py-6'>
      <div>
        <a href='/'><img src="assets/Billeder/Galleri/NewLogo.png" alt="" className='w-32' /></a>
      </div>
      <div className='flex gap-6 items-center uppercase text-sm'>
        <div className='mr-6'>
          <button className='px-4 py-1 rounded uppercase navBtn text-slate-500 text-xs'>
            <Link to="/list">Bestil online</Link>
          </button>
        </div>
        <div className='flex justify-center items-center border border-solid px-1'>
          <div className='flex items-center'>
            <SlGlobe className='text-xs'/>
            <div>
            <select onChange={e => setLanguage( e.target.value )} value={language} className='outline-none border-none text-xs'>

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
            <GrMoney className='text-xs'/>
            <select onChange={e => setSelectedCurrency(e.target.value)} className='outline-none border-none text-xs m-0'>
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
