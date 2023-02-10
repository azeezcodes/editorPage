import { Editor } from "@wangeditor/editor-for-react";
import React from "react";
import {
   AiOutlineOrderedList,
   AiOutlineUnorderedList,
   AiOutlineAlignLeft,
   AiOutlineAlignRight,
} from "react-icons/ai";
import "./component.css";
import MyEditor from "./Editor";

const Twofile = () => {
   return (
      <div>
         <div className="editoricon">
            <img src="/icons/bold.svg" alt="upload" />
            <img src="/icons/italic.svg" alt="upload" />
            <img src="/icons/underline.svg" alt="upload" />
            <AiOutlineOrderedList />
            <AiOutlineUnorderedList />
            <AiOutlineAlignLeft />
            <AiOutlineAlignRight />
            <img src="/icons/subscript.svg" alt="upload" />
            <img src="/icons/superscript.svg" alt="upload" />
            <img src="/icons/unlink.svg" alt="upload" />
            <img src="/icons/insertLink.svg" alt="upload" />
            <img src="/icons/imageManager.svg" alt="upload" />
         </div>
         <div className="editorspace">
            <MyEditor />
         </div>
      </div>
   );
};

export default Twofile;
