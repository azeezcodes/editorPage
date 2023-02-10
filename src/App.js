// /**
//  * @description React wangEditor usage
//  * @author wangfupeng
//  */

import React, { useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css";
// import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import "./App.css";
import Navbar from "./components/Navbar";
import Onefile from "./components/Onefile";
import Twofile from "./components/Twofile";
import Threeside from "./components/Threeside";



function App() {
   return (
      <div>
         <Navbar />
         <div className="body">
            <div className="one">
              <Onefile/>
            </div>
            <div className="two">
               <Twofile/>
            </div>
            <div className="three">
               <Threeside/>
            </div>
         </div>
      </div>
   );
}

export default App;
