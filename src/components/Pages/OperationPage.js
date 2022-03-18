import React from 'react'
import FlatButton from '../FlatButton'

export const OperationPage = () => {
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

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Reset"></FlatButton>
          <FlatButton text="Mute Internal Buzzer"></FlatButton>
      </div>

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Enable Sounder"></FlatButton>
          <FlatButton text="Disable Sounder"></FlatButton>
      </div>

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Silence Sounder"></FlatButton>
          <FlatButton text="Resound Sounder"></FlatButton>
      </div>

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Disable FireOutput"></FlatButton>
          <FlatButton text="Enable FireOutput"></FlatButton>
      </div>

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Disable FireControls"></FlatButton>
          <FlatButton text="Enable FireControls"></FlatButton>
      </div>
      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Terminat Test"></FlatButton>
      </div>

      <div className='flex flex-row place-content-around items-baseline pt-2 pb-2 border-t-2 border-bluegray-500'>
          <FlatButton text="Evacuate"></FlatButton>
      </div>
      
      <div className='border-b-2 border-bluegray-500'></div>

    </div>
  );
};
/*Disable FireOutput ÜE*/ 
/*Disable FireControls BFS*/