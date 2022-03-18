import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OverviewPage }              from "./components/Pages/OverviewPage";
import { OperationPage }             from "./components/Pages/OperationPage";
import { ScanPage }                  from "./components/Pages/ScanPage";
import { VirtualControlOutputsPage } from "./components/Pages/VirtualControlOutputsPage";
import { VirtualControlInputPage }   from "./components/Pages/VirtualControlInputPage";
import { SettingsPage }              from "./components/Pages/SettingsPage";
import { OpDetectionZone }           from "./components/Pages/OpDetectionZone";
import { OpControlZone }             from "./components/Pages/OpControlZone";
import { OpAlarmZone }               from "./components/Pages/OpAlarmZone";


/*
react
https://reactjs.org/docs/create-a-new-react-app.html
npx create-react-app my-react-app
cd my-react-app

------
Tailwind
https://tailwindcss.com/docs/installation/using-postcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

------

https://fontawesome.com/docs/web/use-with/react/
https://fontawesome.com/v5/docs/web/use-with/react

# Free icons styles
Version 6
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest oder ohne @latest
npm install --save @fortawesome/react-fontawesome


 ging nicht  npm i --save @fortawesome/pro-solid-svg-icons
 ging nicht  npm i --save @fortawesome/pro-regular-svg-icons
 ging nicht  npm i --save @fortawesome/pro-light-svg-icons
 ging nicht  npm i --save @fortawesome/pro-duotone-svg-icons

https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-de
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
# regular icons
npm i -S @fortawesome/free-regular-svg-icons
ging nicht npm i -S @fortawesome/pro-regular-svg-icons

# solid icons
npm i -S @fortawesome/free-solid-svg-icons
ging nicht npm i -S @fortawesome/pro-solid-svg-icons

# light icons
ging nicht npm i -S @fortawesome/pro-light-svg-icons

# duotone icons
ging nicht npm i -S @fortawesome/pro-duotone-svg-icons

# brand icons
npm i -S @fortawesome/free-brands-svg-icons

-------

webpush
https://thecodebarbarian.com/sending-web-push-notifications-from-node-js.html
https://github.com/vkarpov15/web-push-demo
https://github.com/vkarpov15/web-push-demo/blob/master/index.js

https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/
https://dev.to/ronyfr3/web-push-notification-using-react-and-node-js-oc9 
https://www.npmjs.com/package/web-push
npm install express
npm install express-static
npm install web-push
npm install body-parser

npm i –S express
npm i –S body-parser
npm i –S web-push

middleware nodejs
https://youtu.be/daeIH0mtOO0

https://www.youtube.com/watch?v=-fjPtQ3caXc

https://www.youtube.com/watch?v=HlYFW2zaYQM
https://github.com/bradtraversy/node_push_notifications
https://github.com/web-push-libs/web-push


----------------------------
Router
https://www.youtube.com/watch?v=BHC-ll9PFe0

Navbar
https://github.com/codebucks27/React-responsive-navbar

Accordion
!!!!!!https://codepen.io/raubaca/pen/PZzpVe
https://tailwind-elements.com/docs/standard/components/accordion/
https://www.tailwindtoolbox.com/components/accordion
https://codepen.io/Unleashed-Design/pen/bGroJMw

Transisiton
https://www.mediaevent.de/css/transition.html
https://www.youtube.com/watch?v=BZRyIOrWfHU&t=733s

animated hamburger button
https://www.youtube.com/watch?v=EW65Ll_9ioE
https://stackoverflow.com/questions/68306441/fade-transition-tailwind-class-to-something-else-over-certain-amount-of-time

checkbox
https://www.youtube.com/watch?v=z3TgmTi42ic

button
https://www.youtube.com/watch?v=ANLgG1RtFVM

Vite

tailwind forms
https://benborgers.com/posts/tailwind-checkbox

Babylon.js
https://www.babylonjs.com/

//Styling react Using CSS
https://www.w3schools.com/react/react_css.asp

Menü
https://www.youtube.com/watch?v=EdkBNqHxw5Y
https://www.youtube.com/watch?v=74ys-dT94mA
https://www.youtube.com/watch?v=P3W7MZ3JkyA

https://stackoverflow.com/questions/70641518/how-to-do-navigate-submenu-items-using-react-router-dom-v6

https://learnwebtutorials.com/react-router-subroute-configuration-example

href menu https://www.youtube.com/watch?v=wHFflWvii3M

dom router v6 https://www.youtube.com/watch?v=UjHT_NKR_gU

https://www.youtube.com/watch?v=PWi9V9d_Jsc
https://www.youtube.com/watch?v=GqTLv0GFW2o

+++https://www.youtube.com/watch?v=EdkBNqHxw5Y&t=358s
-> https://www.youtube.com/watch?v=EdkBNqHxw5Y&t=358s 
-> https://www.youtube.com/watch?v=a1T5UvQpEDs

https://www.codavilla.com/posts/build-a-react-sidebar-with-dropdown-menu
https://github.com/briancodex/react-sidebar-dropdown

https://www.youtube.com/watch?v=O9l75KOB2pE

//deploy github page
//https://github.com/gitname/react-gh-pages
//https://pages.github.com/
//https://docs.github.com/en/pages
//https://create-react-app.dev/docs/deployment/
*/

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages text-slate-100
      text-lg

      h-screen
      w-screen
      p-0
      m-0
      top-0

      bg-gradient-to-br from-slate-900 to-slate-700">
          <Routes>
            <Route exact path="/"        element={<OverviewPage />} />
            <Route path="/system-operation"     element={<OperationPage />} />
            <Route path="/operation"     element={<OperationPage />} />
            <Route path="/operations/DetectionZone" element={<OpDetectionZone />} />
            <Route path="/operations/ControlZone" element={<OpControlZone />} />
            <Route path="/operations/AlarmZone" element={<OpAlarmZone />} />
            <Route path="/scan"          element={<ScanPage />} />
            <Route path="/virtualoutput" element={<VirtualControlOutputsPage />} />
            <Route path="/virtualinput"  element={<VirtualControlInputPage />} />
            <Route path="/settings"      element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;