import React, { forwardRef } from "react";

type Props = {
  onAllTextClick(): void;
};

export type Ref = HTMLTextAreaElement;

const SelectTextArea = forwardRef<Ref, Props>((props, ref) => {
  return (
    <>
      <div className=" my-5 bg-slate-300 p-2 rounded-md">
        <p>
          <textarea
            rows={4}
            className="block w-full mb-2 rounded-md"
            ref={ref}
          />
        </p>
        <p>
          <button
            className="p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold fontpy-2 px-4 rounded-full"
            onClick={props.onAllTextClick}
          >
            Select text
          </button>
        </p>
      </div>
    </>
  );
});

export default SelectTextArea;

// export default function SelectTextArea({ onAllTextClick }: Props) {
//   return (
//     <>
//       <div className=" my-5 bg-slate-300 p-2 rounded-md">
//         <p>
//           <textarea rows={4} className="block w-full mb-2 rounded-md" />
//         </p>
//         <p>
//           <button
//             className="p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold fontpy-2 px-4 rounded-full"
//             onClick={onAllTextClick  }
//           >
//             Select text
//           </button>
//         </p>
//       </div>
//     </>
//   );
// }
