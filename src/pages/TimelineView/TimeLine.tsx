import React from "react";
import "./TimeLine.css"; // You can define your styles here
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
    <>
      <div className=" m-0 p-0 box-border">
        <div className="timeline">
          <div className="timeline-container rounded-md left-timeline-containerr">
            <img src="images/tattoo-01-small.jpg" />
            <div className="text-box relative  bg-slate-100 rounded-md">
              <h2>Concert</h2>
              <small>2018 - 2019</small>
              <p>Arists perform them music.</p>
              <span className="left-timeline-containerr-arrow"></span>
            </div>
          </div>
          <div className="timeline-container rounded-md right-timeline-container">
            <img src="images/tattoo-02-small.jpg" />
            <div className="text-box relative bg-slate-100 rounded-md">
              <h2>Concert</h2>
              <small>2018 - 2019</small>
              <p>Arists perform them music.</p>
              <span className="right-timeline-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
