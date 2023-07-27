import React, { createContext } from "react";
import LoginBox from "../components/LoginBox";

type Props = {};

export default function LoginArea({}: Props) {
  return (
    <section className="app-section">
      <div className="container">
        <LoginBox />
      </div>
    </section>
  );
}
