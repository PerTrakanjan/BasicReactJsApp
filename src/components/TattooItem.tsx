import React from "react";

type Props = {
  tattoo: any;
  onTattooClick(theTatto: any): void;
};

export default function TattooItem({ tattoo, onTattooClick }: Props) {
  return (
    <div className="tattoo-item">
      <img src={tattoo.thumbnailUrl} onClick={() => onTattooClick(tattoo)} />
      <h4>{tattoo.title}</h4>
    </div>
  );
}
