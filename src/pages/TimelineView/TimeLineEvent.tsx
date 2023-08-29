import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

export default function TimeLineEvent({ title, description, date }: Props) {
  return (
    <div className="container mx-auto justify-center items-center">
      <div className="">{date}</div>
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
