import React from 'react';
import ExpandedObjectListSubItem from './ExpandedObjectListSubItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//https://www.youtube.com/watch?v=nPpPlBAogkY
//https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
//https://dev.to/giandodev/accordion-tailwindcss-122f
//https://www.tailwindtoolbox.com/components/accordion
//"appearance-none

const allDevices = [
    { idTag: "chck4", index:"4", Number:"DZ 1", Text:"Etage 3"},    
  ];
//sm:w-auto min-w-{480}
const ExpandedDetectionZoneListItem = ({idTag, index, Text}) => {
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
                    flex flex-row flex-nowrap justify-center 
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
                    <div className="grow pl-3 pt-1 text-center">{Text}</div>
            </label>
            <div className="tab-content bg-slate-900 rounded-xl
                     transition-all duration-1000 
                    -translate-y-10

                    w-full max-h-0 p-0 relative z-10
                    
                    opacity-0
                    overflow-hidden select-none">
                    {allDevices.map((item, index) => {
                        return (
                            <ExpandedObjectListSubItem 
                              idTag={item.idTag}
                              index={item.index}
                              Number={item.Number}
                              Text={item.Text}
                            ></ExpandedObjectListSubItem>
                        );
                    })}                      
            </div>
        </div>
      );
};

export default ExpandedDetectionZoneListItem;
