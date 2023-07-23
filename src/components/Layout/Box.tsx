import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return (
    <div className=" m-1 p-2 border-solid border-2 border-sky-400 hover:border-sky-300 rounded-md">
      {children}
    </div>
  );
}
