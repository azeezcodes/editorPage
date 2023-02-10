import React from "react";

const Threeside = () => {
   return (
      <div className="threeside">
         <p className="postp">Preveiw Post</p>

         <div>
            <img
               src="/icons/linkedinpost.png"
               alt="post"
               className="postimage"
            />
         </div>

         <div className="slideicon">
            <img src="/icons/chevron-left.svg" alt="" />
            <img src="/icons/LinkedIn logo.svg" alt="" />
            <img src="/icons/Facebook logo.svg" alt="" />
            <img src="/icons/Twitter logo.svg" alt="" />
            <img src="/icons/instagram-5 logo.svg" alt="" />
            <img src="/icons/chevron-right.svg" alt="" />
         </div>
         <div className="generate" style={{ marginTop: "40px" }}>
            <p>Post </p>
         </div>
      </div>
   );
};

export default Threeside;
