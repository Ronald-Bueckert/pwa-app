import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ExpandedDeviceListSubItem = ({ChannelAddress, Typ, ChannelLabel, ZoneNumber, ZoneText, value, index}) => {
  return (
      <div class="tab-content-item
           m-2.5
           flex
           flex-row
           justify-between
           items-baseline

           bg-slate-800
           text-sky-100

           border-t-2
           border-sky-700
           hover:border-sky-400
            rounded-md
            select-none">
              
        <div className='pl-3 py-2'>
          <label className='block'>{ChannelAddress} {Typ} </label>
          <label className='block'>{ChannelLabel}</label>
        </div>
        <div className='py-2'>
          <label className='block'>Zone Number {ZoneNumber}</label>
          <label className='block'>Zone Label {ZoneText}</label>
        </div>
        <div className='py-2'>
          <label className='block'>Value {value}</label>
        </div>
        <div className='py-2 pr-4 w-10'>
          {(value>"40") ?  <FontAwesomeIcon icon={faExclamation} color="yellow" size="1x" /> :
                           <FontAwesomeIcon icon={faCheck} color="lime" size="1x"/> }

        </div>
      </div>
  );
};

export default ExpandedDeviceListSubItem;

