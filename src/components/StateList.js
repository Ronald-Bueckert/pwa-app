import React from 'react';
import StateListItem from './StateListItem';
import {useState, useEffect} from "react";


const allEvents = [
  { state: "Feuer", zone: "DetectionZone 2", element: "Sensor 2", done: false, eventcolor: "bg-orange-700" },
  { state: "Feuer", zone: "DetectionZone 3", element: "Sensor 3", done: false, eventcolor: "bg-orange-700" },
  { state: "Feuer", zone: "DetectionZone 4", element: "Sensor 4", done: true,  eventcolor: "bg-orange-700" },
];

const StateList = () => {
  const [getOpenEvents, setOpenEvents] = useState(0);
  const [getEvents, setEvents] = useState(allEvents);

  const countOpen = () => {
      const donetEvents = allEvents.filter((item) => {
        return !item.done;
      });
      setOpenEvents(donetEvents.length)
  };

  const changeEvent = (index) => {
    console.log(index)
    const newEventList = [...getEvents]
    if(newEventList[index].done)
    {
      newEventList[index].done = false;
      console.log(newEventList[index].done)
    }
    else
    {
      newEventList[index].done = true;
      console.log(newEventList[index].done)
    }
    setEvents(newEventList);
  };

  useEffect(() => {
    countOpen();
    document.title = 'Du hast {getOpenEvents} aktive Ereignisse';
  }, [getEvents])

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-3xl py-4 font-semibold text-white">
          <h1 className="text-3xl">Zustandsliste</h1>
          <h2> Aktive Events: {getOpenEvents}</h2>
      </div>
      {allEvents.map((item, index) => {
          return (
            <StateListItem 
                state={item.state}
                zone={item.zone}
                elements={item.element}
                done={item.done}
                eventcolor={item.eventcolor}
                key={index}
                index={index}
                onChangeEvent={changeEvent}
            ></StateListItem>
          );
      })}
    </div>
  );
}

export default StateList;
