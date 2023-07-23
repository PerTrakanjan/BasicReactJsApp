import React from "react";
import Box from "../components/Layout/Box";
import Orders from "../components/Orders";

type Props = {};

export default function OrderGrid({}: Props) {
  return (
    <>
      <div className=" container mx-auto justify-center items-center">
        <Orders columns={4} />
      </div>
    </>
  );
}
