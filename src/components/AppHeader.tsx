import React from "react";
import "./AppHeader.css";

type Props = {};

export default function AppHeader({}: Props) {
  return (
    <header className="app-header">
      <img className="app-header-logo" src="/images/logo.png" />
    </header>
  );
}
