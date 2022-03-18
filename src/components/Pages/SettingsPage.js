import React from 'react'
import FlatButton from '../FlatButton'
import CSSFlatButton from '../CSSFlatButton'

//https://stackoverflow.com/questions/2427447/does-css-hover-work-on-mobile-devices

export const SettingsPage = () => {
  return (
    <div className='Settings
    text-slate-100
    text-lg

    h-screen
    w-screen
    p-1
    m-0
    top-0

    bg-gradient-to-br from-slate-900 to-slate-700' >

      <div className='flex flex-row items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <div className=' w-1/12'></div>
          <label className=' w-2/4 text-left'>Activate Push Notification</label>
          <FlatButton text="speichern"></FlatButton>
      </div>
  
      <div className=' flex flex-row items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <div className=' w-1/12' ></div>
          <label className=' w-2/4 text-left'>Activate anything else</label>
          <FlatButton text="speichern"></FlatButton>
      </div>

      <div className=' flex flex-row items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <div className=' w-1/12'></div>
          <label className=' w-2/4 text-left'>Activate sleep mode</label>
          <FlatButton text="speichern"></FlatButton>
      </div>

      <div className='border-b-2 border-bluegray-500'></div>

    </div>
  );
};

/*overflow-hidden whitespace-nowrap
      <div className=' flex flex-row justify-around items-baseline pt-2 border-t-2 border-bluegray-500'>
          <div className=' w-1/12' ></div>
          <label className=' w-2/4 text-left'>Activate anything else</label>
          <div className=' w-2/4'><FlatButton text="speichern"></FlatButton></div>
      </div>
      <div className=' flex flex-row justify-around items-baseline pt-2 border-t-2 border-bluegray-500'>
          <div className=' w-1/12'></div>
          <label className=' w-2/4 text-left'>Activate sleep mode</label>
          <div className=' w-2/4'><FlatButton text="speichern"></FlatButton></div>
      </div>
*/
//justify-around
/*
        <a href='#' className='realativ inline-block 
             pt-3 pb-3 pl-8 pr-8 m-0 
            no-underline uppercase text-base
            text-slate-400 bg-bluegray-700 transition-all duration-500
            hover:text-slate-50'>
                <span className='block absolute bg-blue-700 left-0 bottom-0 w-1 h-full scale-y-0 origin-top transition-transform duration-500' ></span>
                <span className='block absolute bg-blue-700'></span>
                <span className='block absolute bg-blue-700'></span>
                <span className='block absolute bg-blue-700'></span>
                speichern
        </a>      
        */