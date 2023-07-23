import React from "react";
import "./AppSearch.css";

type Props = {
  value: string;
  onValueChanged(target: string): void;
};

export default function AppSearch({ value, onValueChanged }: Props) {
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="search..."
        value={value}
        onChange={(event) => {
          onValueChanged(event.target.value);
        }}
      />
    </div>
  );
}
