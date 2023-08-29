import React from "react";
import "./Timeline.css"; // You can define your styles here
import TimeLineEvent from "./TimeLineEvent";

const events = [
  {
    title: "Event 1",
    description: "Description for Event 1",
    date: "2023-08-29",
  },
  {
    title: "Event 2",
    description: "Description for Event 2",
    date: "2023-08-30",
  },
  // Add more events here
];

export default function TimeLine() {
  return (
    <div className="mx-auto justify-center items-center">
      <div className=" container relative bg-slate-400 w-1/2 p-1">
        <div className=" relative max-w-7xl m-28">
          <h2>Concert</h2>
          <small>2018 - 2019</small>
          <p>Arists perform them music.</p>
        </div>
      </div>
    </div>
  );
}
