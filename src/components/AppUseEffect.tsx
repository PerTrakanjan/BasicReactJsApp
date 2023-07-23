import React, { useEffect, useState } from "react";

type Props = {};

export default function AppUseEffect({}: Props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`App current count is ${count}`);
    //document.documentElement.style.overflowY = "hidden";
    return () => {
      console.log(`App previous count is ${count}`);
      //document.documentElement.style.overflowY = "auto";
    };
  }, [count]); // []: run only once

  return (
    <div className="app-section">
      <div className=" container">
        <button
          onClick={() => {
            setCount((prev: number) => prev + 1);
          }}
        >
          {count}
        </button>
      </div>
    </div>
  );
}
