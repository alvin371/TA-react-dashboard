import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({value, onChange, ref, ...props}) => {
  return (
    <ReactQuill
      ref={ref}
      style={{height: "100px"}}
      modules={{
        toolbar: [
          ["bold", "italic", "underline"],
          [{list: "ordered"}, {list: "bullet"}],
          ["link"],
        ],
        clipboard: {
          matchVisual: false,
        },
      }}
      theme="snow"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default RichTextEditor;
