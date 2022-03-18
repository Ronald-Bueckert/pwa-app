import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//import { render } from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



//import Clock from "../clock/clock"
import "./NavBar.css";


import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

//import { fasHome } from "@fortawesome/free-solid-svg-icons";
//import { farHome }  from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon={faCoffee} />
//<FontAwesomeIcon icon={faSpinner} />
//<FontAwesomeIcon icon={faAddressBook} />
//<FontAwesomeIcon icon={faHome} />
/*----------------------------
Router
https://www.youtube.com/watch?v=BHC-ll9PFe0
https://github.com/codebucks27/React-responsive-navbar
*/
//hidden peer-checked:block
//flex flex-row flex-nowrap justify-center
//group-hover:rotate-180 
//<NavLink exact to="/operations" activeClassName="active" className="nav-links" onClick={handleClick}>             </NavLink>
//const element = <FontAwesomeIcon icon={faCoffee} />
//              <div className="flex flex-row flex-nowrap justify-center">


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo text-slate-100">
            IFAM
            <FontAwesomeIcon icon={faCopyright} className="pl-2"/>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/system-operation" activeClassName="active" className="nav-links" onClick={handleClick}>System-Operations</NavLink>
            </li>
            <li className="nav-item">
                <input type="checkbox" id="checkbox-submenu" className="peer absolute -z-10 opacity-0 select-none"></input>
                <label className="label-submenu" htmlFor="checkbox-submenu">Operation
                </label>
                <FontAwesomeIcon icon={faCaretDown} className="absolut right-8 mt-2 rotate-180 peer-checked:rotate-0 transition-all duration-1000"/>
                 <ul className="submenu transition-all duration-1000 static opacity-100 visible max-h-0 overflow-hidden peer-checked:max-h-screen">
                  <li className="nav-item"> <NavLink exact to="/operations/DetectionZone" activeClassName="active" className="nav-links" onClick={handleClick}> DetectionZone </NavLink> </li>
                  <li className="nav-item"> <NavLink exact to="/operations/ControlZone" activeClassName="active" className="nav-links" onClick={handleClick}> ControlZone </NavLink> </li>
                  <li className="nav-item"> <NavLink exact to="/operations/AlarmZone" activeClassName="active" className="nav-links" onClick={handleClick}> AlarmZone </NavLink> </li>
                </ul>
            </li>
            <li className="nav-item"> <NavLink exact to="/scan" activeClassName="active" className="nav-links" onClick={handleClick}>Scan</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/virtualinput"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                VirtualInputs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/virtualoutput"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                VirtualOutputs
              </NavLink>
            </li>
            <li className="nav-item"> <NavLink exact to="/settings" activeClassName="active" className="nav-links" onClick={handleClick}> Settings </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
              {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;