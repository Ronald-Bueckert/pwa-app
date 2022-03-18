import React from 'react';
import ExpandedDeviceListSubItem from './ExpandedDeviceListSubItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//https://www.youtube.com/watch?v=nPpPlBAogkY
//https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
//https://dev.to/giandodev/accordion-tailwindcss-122f
//https://www.tailwindtoolbox.com/components/accordion
//"appearance-none

const allDevices = [
    { ChannelAddress: "01.01.M005:01", Typ:"Input",  ChannelLabel:"Channel Label", ZoneNumber:"2", ZoneText:"Text", value:"40"},
    { ChannelAddress: "01.01.M005:02", Typ:"Input",  ChannelLabel:"Channel Label", ZoneNumber:"3", ZoneText:"Text", value:"50"},
    { ChannelAddress: "01.01.M005:03", Typ:"Output", ChannelLabel:"Channel Label", ZoneNumber:"4", ZoneText:"Text", value:"60"},
  ];
//sm:w-auto min-w-{480}
const ExpandedDeviceListeItem = ({idTag, index, loop, device}) => {
    console.log(index);
    return (
        <div className="tab
            w-auto sm:w-4/5 m-1.5 sm:mx-auto

            overflow-hidden
            select-none

            shadow-md
            hover:shadow-lg

            bg-slate-900

            border-2
            hover:border-2
            border-solid
            border-sky-700
            hover:border-sky-400

            rounded-xl
            ">
            <input type="checkbox" id={idTag} className="peer absolute -z-10 opacity-0 select-none"></input>
            <label className="tab-label 
                    flex flex-row flex-nowrap
                    h-auto p-2 m-0.5 relativ
                    font-bold text-slate-50

                    cursor-pointer overflow-hidden select-none

                    /*hover:scale-102
                    active:scale-102*/
                    active:bg-blue-600

                    after:content-['❯']
                    after:font-bold
                    after:text-xl
                    after:relative
                    after:w-6
                    after:h-6
                    after:text-center
                    after:peer-checked:rotate-90
                    after:transition-all
                    after:duration-1000"

                    htmlFor={idTag}>
                    {(index==="1" || index==="3") ? <FontAwesomeIcon icon={faExclamation} color="yellow" size="2x" className="flex-none basis-1/12"/> :
                                                    <FontAwesomeIcon icon={faCheck} color="lime" size="2x" className="flex-none basis-1/12"/> }
                    <div className="text-left basis-1/5 pl-3 pt-1">{loop}</div>
                    <div className="text-left grow pl-3 pt-1" >{device}</div>
            </label>
            <div className="tab-content bg-slate-900 rounded-xl
                     transition-all duration-1000 
                    -translate-y-10

                    w-full max-h-0 p-0 relative z-10
                    
                    opacity-0
                    overflow-hidden select-none">
                {allDevices.map((item, index) => {
                        return (
                            <ExpandedDeviceListSubItem 
                                ChannelAddress={item.ChannelAddress}
                                Typ={item.Typ}
                                ChannelLabel={item.ChannelLabel}
                                ZoneNumber={item.ZoneNumber}
                                ZoneText={item.ZoneText}
                                value={item.value}
                                index={index}
                            ></ExpandedDeviceListSubItem>
                        );
                    })}
            </div>
        </div>
      );
};

export default ExpandedDeviceListeItem;
