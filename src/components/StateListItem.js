//https://www.youtube.com/watch?v=zJxJerQtUdk
import React from 'react';
import {useState} from "react";

const StateListItem = ({state, zone, done, onChangeEvent, index}) => {
  
  //const[isDone,setDone] = useState(done)

  /*const changeDone = (done) => {
    console.log("hallo")
    /*if (isDone) {
      setDone(false);
    }
    else{
      setDone(true);
    }
    console.log(isDone);*/
  /*}*/

  return (
    <div
      className={
        done
          ? "flex justify-between p-2 bg-green-600 text-white"
          : "flex justify-between p-2 bg-red-500 text-white"
      }
    >
      <h1 className="text-lg font-bold cursor-pointer"
          onClick={() => {
            onChangeEvent(index)
          }}
      >
        {state}</h1>
      <h1>{zone}</h1>
      <button className="text-lg bg-gray-400 p-2 text-white ">Reset</button>
    </div>
  );
}

export default StateListItem;
