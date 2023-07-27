import React, { forwardRef } from "react";

type Props = {
  onUploadClick(): void;
};

export type Ref = HTMLInputElement;

const SendFile = forwardRef<Ref, Props>((props, ref) => {
  return (
    <>
      <div className=" my-5 bg-slate-300 p-2 rounded-md">
        <input className=" mb-2" type="file" ref={ref} />
        <p>
          <button
            className="p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold fontpy-2 px-4 rounded-full"
            onClick={props.onUploadClick}
          >
            Upload file
          </button>
        </p>
      </div>
    </>
  );
});

export default SendFile;
