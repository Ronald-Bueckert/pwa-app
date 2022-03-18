import React from 'react';
import ExpandedEventListSubItem from './ExpandedEventListSubItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell }    from "@fortawesome/free-solid-svg-icons";


//https://www.youtube.com/watch?v=nPpPlBAogkY
//https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
//https://dev.to/giandodev/accordion-tailwindcss-122f
//https://www.tailwindtoolbox.com/components/accordion
//"appearance-none


//https://stackoverflow.com/questions/57936759/adding-margin-to-font-awesome-icon-in-react
//https://github.com/tailwindlabs/tailwindcss/discussions/1507
//https://stackoverflow.com/questions/46230449/conditionally-inline-style-a-react-component-based-on-prop
//https://de.reactjs.org/docs/conditional-rendering.html

const allEvents = [
    { Event:"Fire", ChannelAddress:"01.01.M005:01", Typ:"Sensor", ChannelLabel:"Room 1", ZoneLabel:"Detection Zone 1", ZoneNumber:"1", DeviceNumber:"12", DeviceTyp:"NFXI-OPT"},
    { Event:"Fire", ChannelAddress:"01.01.M005:02", Typ:"Sensor", ChannelLabel:"Floor 2", ZoneLabel:"Detection Zone 1", ZoneNumber:"1", DeviceNumber:"13", DeviceTyp:"NFXI-TDIFF"},
  ];

  const allAlarm = [
    { Event:"Alarm", ChannelAddress:"01.01.M005:01", Typ:"Input", ChannelLabel:"Door Open Technique Room", ZoneLabel:"Keller", ZoneNumber:"3", DeviceNumber:"12", DeviceTyp:"M701"},
    { Event:"Alarm", ChannelAddress:"01.01.M006:01", Typ:"Input", ChannelLabel:"Window Open Heating Room", ZoneLabel:"Keller", ZoneNumber:"3", DeviceNumber:"12", DeviceTyp:"M701"},
  ];

  function FireStyle(props) {
    return <h1>Willkommen zurück!</h1>;
  }
  
  function FaultStyle(props) {
    return <h1>Willkommen zurück!</h1>;
  }


//                    <div className="expandicon basis-1/12 font-bold text-xl w-6 h-6 group-checked:rotate-90 transition-all duration-1000">❯</div>
 const ExpandedEventListeItem = ({idTag, index, event, text, label}) => {
    console.log(index, event);

    const eventColor = {
        //{(event=="Fire") ? {backgroundColor: 'red'} : {backgroundColor : 'yellow'}
        backgroundColor: (event=="Fire") ? 'bg-red-800' : 'bg-yellow-800'
     };
     /*style={eventColor} >*/

    /*console.log(Event);*/
    return (
        /*<div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (expanded ? 'block' : 'hidden')}> oder als one liner*/
        <div className={"tab\
            w-auto sm:w-4/5 m-1.5 sm:mx-auto\
            overflow-hidden\
            select-none\
            shadow-md\
            hover:shadow-lg\
            border-2\
            hover:border-2\
            border-solid\
            border-slate-500\
            hover:border-slate-50\
            rounded-xl " + ((event==="Fire") ? 'bg-red-800' 
            : (event==="First Fire") ? 'bg-red-700' 
            : (event==="Fault") ? 'bg-yellow-500' 
            : (event==="Disable") ? 'bg-yellow-600'
            : 'bg-indigo-600')}>

            <input type="checkbox" id={idTag} className="peer absolute -z-10 opacity-0 select-none"></input>
            <label className={"tab-label\
                    flex flex-row flex-nowrap\
                    h-auto p-2 m-0.5 relativ\
                    font-bold\
                    after:content-['❯'] after:font-bold after:text-xl after:relative after:w-6 after:h-6 after:text-center after:peer-checked:rotate-90 after:transition-all after:duration-1000\
                    cursor-pointer overflow-hidden select-none " + ((event==="Fire" || event==="First Fire" || event==="Alarm") ? 'text-slate-50' : 'text-slate-900')} 
                    
                    htmlFor={idTag}>
                    {(event==="Fire") ? <FontAwesomeIcon icon={faFire} color="white" size="2x" className="flex-none basis-1/12"/> 
                    : (event==="First Fire") ? <FontAwesomeIcon icon={faFireAlt} color="white" size="2x" className="flex-none basis-1/12"/> 
                    : (event==="Fault") ? <FontAwesomeIcon icon={faTriangleExclamation} size="2x" className="flex-none w-1/12 text-slate-900"/>
                    : (event==="Disable") ? <FontAwesomeIcon icon={faCircleXmark} size="2x" className="flex-none w-1/12 text-slate-900"/>
                    :                       <FontAwesomeIcon icon={faBell} color="white" size="2x" className="flex-none basis-1/12"/>}
                    <div className="text-left basis-1/4 pl-3 pt-1">{event}</div> 
                    <div className="text-left grow pl-3 pt-1" >{text} {label} </div>
            </label>

            <div className={"tab-content rounded-xl transition-all duration-1000 -translate-y-10 w-full max-h-0 p-0 relative z-10 opacity-0 overflow-hidden select-none "
                 + ((event==="Fire") ? 'bg-red-800' : (event==="First Fire") ? 'bg-red-700' 
                 : (event==="Fault") ?'bg-yellow-500' : (event==="Disable") ? 'bg-yellow-600' : 'bg-indigo-600')}>
                   {(event==="Alarm") ? (allAlarm.map((item, index) => {
                        return (
                            <ExpandedEventListSubItem 
                                Event={event}
                                ChannelAddress={item.ChannelAddress}
                                Typ={item.Typ}
                                ChannelLabel={item.ChannelLabel}
                                ZoneLabel={item.ZoneLabel}
                                ZoneNumber={item.ZoneNumber}
                                DeviceNumber = {item.DeviceNumber}
                                DeviceTyp={item.DeviceTyp}
                                index={index}
                            ></ExpandedEventListSubItem>
                        );
                    }))
                  :
                    (allEvents.map((item, index) => {
                        return (
                            <ExpandedEventListSubItem 
                                Event={event}
                                ChannelAddress={item.ChannelAddress}
                                Typ={item.Typ}
                                ChannelLabel={item.ChannelLabel}
                                ZoneLabel={item.ZoneLabel}
                                ZoneNumber={item.ZoneNumber}
                                DeviceNumber = {item.DeviceNumber}
                                DeviceTyp={item.DeviceTyp}
                                index={index}
                            ></ExpandedEventListSubItem>
                        );
                    }))}
            </div>
        </div>
      );
};

export default ExpandedEventListeItem;


     //align-items: center;
     //align-content: flex-start;