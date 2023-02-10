import { Box, Typography } from "@mui/material";
import React from "react";
import "./component.css";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logobox">
            <img src="/icons/Logo.svg" alt="logo" />
         </div>
           <div className="navtext">
               English(Oral-Pronounciation)
         </div>
           <div>
               <img className="avater" src="/icons/girl.png" alt="avater" />
         </div>
      </div>
   );
};

export default Navbar;
