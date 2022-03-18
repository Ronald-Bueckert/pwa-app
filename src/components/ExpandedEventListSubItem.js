import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ExpandedEventListSubItem = ({Event, ChannelAddress, Typ, ChannelLabel, ZoneLabel, ZoneNumber, DeviceNumber, DeviceTyp, index}) => {
    //console.log("ExpandedEventListSubItem");
    console.log(Event);
  return (
      <div className={"tab-content-item\
           m-2.5\
           flex\
           flex-row\
           justify-between\
           items-baseline\
           border-t-2\
           border-slate-500\
           hover:border-slate-50\
           rounded-md\
           select-none " + ((Event==="Fire" || (Event==="First Fire")) ? 'bg-red-600 text-slate-50'
            : (Event==="Fault") ? 'bg-yellow-300 text-slate-900'
            : (Event==="Disable") ? 'bg-yellow-500 text-slate-900'
            : 'bg-indigo-500 text-slate-50')}>
              
        <div className='pl-3 py-2'>
          <label className='block'>{ChannelAddress} </label>
        </div>
        <div className='py-2'>
          <label className='block'>{Typ} </label>
        </div>
        <div className='py-2'>
          <label className='block'>{DeviceTyp} </label>
        </div>        
        <div className='py-2 pr-3'>
            <label className='block'>{ChannelLabel}</label>
        </div>
      </div>
  );
};

export default ExpandedEventListSubItem;

