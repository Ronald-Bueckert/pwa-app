import React from 'react';
import FlatButton from './FlatButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ExpandObjectListSensorItem = ({Number, Text, index, max}) => {
  console.log(index, max);
  return (
      <div className={"tab-content-item mt-2 ml-2 mr-2 p-2 h-16 flex flex-row justify-around items-baseline bg-slate-800 text-sky-100 border-t-2 border-sky-700\
           hover:border-sky-400 rounded-md select-none" + ((index==max) ? ' mb-2' : ' mb-0')}>
              
          <label className='text-base text-zinc-500'>{Number}</label>
          <label className='text-base'>{Text}</label>
          <FlatButton text="Enable"></FlatButton>
          <FlatButton text="Disable"></FlatButton>
      </div>
  );
};

export default ExpandObjectListSensorItem;