import React from "react";
import Box from "./Layout/Box";

type Props = {
  columns: number;
};

export default function ({ columns }: Props) {
  let gridTemplate = `grid grid-cols-${columns} gap-y-5 gap-x-5`;

  return (
    <>
      <div className={gridTemplate}>
        <Box>
          <h3 className="font-semibold">Date</h3>
          <ul>
            <li>1/11/2022</li>
            <li>2/11/2022</li>
            <li>3/11/2022</li>
          </ul>
        </Box>
        <Box>
          <h3 className="font-semibold">Order</h3>
          <ul>
            <li>Chicken - 200</li>
            <li>Pork - 600</li>
            <li>Apple - 300</li>
          </ul>
        </Box>
        <Box>
          <h3 className="font-semibold"> </h3>
          <ul>
            <li>Chicken - 200</li>
            <li>Pork - 600</li>
            <li>Apple - 300</li>
          </ul>
        </Box>
      </div>
    </>
  );
}
