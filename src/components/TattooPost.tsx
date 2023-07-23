import React, { useEffect } from "react";
import "./TattooPost.css";

type Props = {
  tattoo: any;
  onBgClick(): void;
};

export default function ({ tattoo, onBgClick }: Props) {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    console.log("TattooPost start");
    return () => {
      console.log("TattooPost end");
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={onBgClick} />
      <div className="tattoo-post-content">
        <img src={tattoo.fullImageUrl} />
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}
