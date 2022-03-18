import React from 'react'

export const VirtualControlInputPage = () => {
  var imageName = require('../../images/image1.jpg');
  return (
    <div class="ScanPage
    text-slate-100
    text-lg

    h-screen
    w-screen
    p-0
    m-0
    top-0

    bg-gradient-to-br from-slate-900 to-slate-700" >
      <div className=' flex-col justify-center content-center'>
        <h2>Sensor 3<b> Detection Zone 4</b></h2>
        <div class="block w-full h-full p-2">
              <img src={imageName} className="m-auto h-fit w-fit  rotate-90 p-10 transform md:rotate-0 md:p-0 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

//rotate-90 transform scale-75
//flex flex-col justify-center content-center
//        <h2>Sensor 3<b> Detection Zone 4</b></h2>