import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";

const Onefile = () => {
   return (
      <div className="oneside">
         <div>
            <p className="cp">Create Post</p>
         </div>
         {/* '''''''' */}
         <div>
            <div className="pd">
               <div className="textwithicon">
                  {" "}
                  <p> Post Description</p>
                  <img src="/icons/information-circle.svg" alt="" />
               </div>
               <div>
                  <p>0/180</p>
               </div>
            </div>
            <TextField
               id="outlined-multiline-static"
               multiline
               rows={2}
               sx={{ width: "100%" }}
            />
         </div>
         {/* '''''''' */}
         <div style={{ marginTop: "40px" }}>
            <div className="textwithicon">
               {" "}
               <p>Media Content</p>
               <img src="/icons/information-circle.svg" alt="" />
            </div>

            <div className="medis">
               <img src="/icons/Upload icon.svg" alt="upload" />
               <div className="contentmedia">
                  <p className="bold">Drag & drop files or Browsers</p>
                  <p>Supported formates: JPEG, JPG, PNG, MP4</p>
               </div>
            </div>
         </div>

         {/* '''''''' */}

         <div style={{ marginTop: "40px" }}>
            <div className="tonep">
               <p>Tone of voice</p>
               <p>0/3</p>
            </div>
            <div>
               <TextField id="" select style={{ width: "100%" }}></TextField>
            </div>
            <div style={{ marginTop: "20px" }}>
               <Stack direction="row" spacing={1}>
                  <Chip label="Tone 1" />
                  <Chip label="Tone 2" />
                  <Chip label="Tone 2" />
               </Stack>
            </div>
         </div>

         {/* '''''''' */}
         <div style={{ marginTop: "40px" }}>
            <div className="tonep">
               <p>Keywords</p>
               <p>0/5</p>
            </div>
            <div>
               <TextField id="" select style={{ width: "100%" }}></TextField>
            </div>
            <div style={{ marginTop: "20px" }}>
               <Stack direction="row" spacing={1}>
                  <Chip label="Tone 1" />
                  <Chip label="Tone 2" />
                  <Chip label="Tone 3" />
               </Stack>
               <Stack direction="row" spacing={1} mt={2}>
                  <Chip label="Tone 4" />
                  <Chip label="Tone 5" />
               </Stack>
            </div>
         </div>

         {/* '''''''' */}

         <div style={{ marginTop: "40px" }}>
            <p>Place holder</p>
            <Box>
               <Slider
                  aria-label="Always visible"
                  defaultValue={140}
                  step={10}
                  valueLabelDisplay="on"
                  sx={{ borderColor: "#2f327d;" }}
               />
            </Box>
         </div>

         {/* '''''''' */}
         <div style={{ marginTop: "40px" }}>
            <p className="selectsocial"> Select Social Media</p>
            <div>
               <div className="selector">
                  <div className="iconadjust">
                     <img src="/icons/instagram-5 logo-1.svg" alt="" />
                     <p>Instagram</p>
                  </div>
                  <div>
                     <Checkbox />
                  </div>
               </div>
               <div className="selector">
                  <div className="iconadjust">
                     <img src="/icons/Twitter logo-1.svg" alt="" />
                     <p>Twitter</p>
                  </div>
                  <div>
                     <Checkbox />
                  </div>
               </div>
               <div className="selector">
                  <div className="iconadjust">
                     <img src="/icons/LinkedIn logo-1.svg" alt="" />
                     <p>LinkedIn</p>
                  </div>
                  <div>
                     <Checkbox />
                  </div>
               </div>
               <div className="selector">
                  <div className="iconadjust">
                     <img src="/icons/Facebook logo-1.svg" alt="" />
                     <p>Facebook</p>
                  </div>
                  <div>
                     <Checkbox />
                  </div>
               </div>
            </div>
         </div>
         {/* '''''''' */}
         <div className="generate" style={{ marginTop: "40px" }}>
            <p>Generate </p>
            <img src="/icons/arrow-right.svg" alt="" />
         </div>
         {/* '''''''' */}
      </div>
   );
};

export default Onefile;
