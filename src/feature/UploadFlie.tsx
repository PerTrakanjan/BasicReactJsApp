import React, { useRef, useState } from "react";
import SelectTextArea from "../components/SelectTextArea";
import SendFile from "../components/SendFile";

type Props = {};

export default function UploadFlie({}: Props) {
  //const [file, setFile] = useState(null); // useState render again when state change
  const fileRef = useRef<any>(null);

  const textAreaRef = useRef<any>(null);

  function onUploadClick() {
    const myFile = fileRef.current.files[0];
    console.log(myFile);
  }

  function onAllTextClick() {
    textAreaRef.current.focus();
    textAreaRef.current.select();
  }

  return (
    <>
      <div className=" container mt-4 bg-slate-300 rounded-md p-4">
        <SendFile onUploadClick={onUploadClick} ref={fileRef} />
        <SelectTextArea onAllTextClick={onAllTextClick} ref={textAreaRef} />
      </div>
    </>
  );
}
