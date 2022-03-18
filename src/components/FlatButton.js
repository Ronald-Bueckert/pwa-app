import React from 'react';
//import './FlatButton.css'

//https://www.w3schools.com/react/react_css.asp
const FlatButton = ({ text }) => {
    return (
        <label className="flatbutton
        text-slate-100
         bg-bluegray-700 border-2 border-bluegray-500
         px-5 py-2.5 m-1
         font-medium rounded-lg uppercase text-center tracking-widest text-base
         active:bg-bluegray-800
          outline-none overflow-hidden select-none">{text}
        </label>
    );
}


export default FlatButton;
//          transition-colors duration-500
//         active:bg-gradient-to-b active:from-bluegray-800 active:to-bluegray-700
//style={{outline:"hidden"}}
//md:hover:bg-gradient-to-b md:hover:from-blue-900  md:hover:to-blue-700
//md:hover:bg-gradient-to-b md:hover:from-blue-900  md:hover:to-blue-700
/*      hover:bg-gradient-to-b from-blue-900 to-blue-600
        active:bg-blue-300

        active:bg-blue-300
        hover:bg-blue-800
        hover:bg-blue-800
        active:bg-blue-600
         dark:bg-blue-600
         dark:hover:bg-blue-700
         dark:focus:ring-blue-800
focus:ring-4 focus:ring-blue-300
*/
/*
        <div className='flex justify-center content-center m-2' >
            <div className='shrink-0 pt-3 pb-3 pl-8 pr-8 uppercase text-center tracking-wide text-base text-slate-400 bg-bluegray-700
        hover:text-slate-50 
        border-2 border-blue-600
        hover:border-blue-600
        transition-colors duration-500
        active:bg-blue-600
        focus:outline-none ring-offset-2 focus:ring-4 focus:ring-violet-300'>
                {text}
            </div>
        </div>
*/


//border-bluegray-700
//scale-y-0 origin-top ease-linear duration-500 hover:scale-y-100 hover:origin-bottom hover:duration-500
//h-full h-screen h-auto h-fit

/*
        < div className='flex justify-center items-center'>
            <a href='test.html' className='realativ inline-block pt-0 pb-0 pl-0 pr-0 m-0 no-underline uppercase text-base text-slate-400 bg-bluegray-700 bg transition-all duration-500
             hover:text-slate-50'>
                <span className=' inline-block bg-blue-700 left-0 top-0 w-1' ></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </a>
        </div >
*/