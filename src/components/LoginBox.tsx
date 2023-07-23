import React, { useContext } from "react";
import { AuthContext } from "../App";
import TattoosPage from "../pages/TattoosPage";

type Props = {};

const fakeUser = { username: "nice123", fullname: "nice opitcal" };

export default function LoginBox({}: Props) {
  const { authState, authDispatch } = useContext(AuthContext); // From App.tsx -> reducer()

  function loginSummit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    authDispatch({ type: "login", payload: fakeUser });
  }
  function logoutSummit() {
    authDispatch({ type: "logout" });
  }

  if (authState != null) {
    return (
      <>
        <p>Auth username = {authState.username}</p>
        <p>Auth username = {authState.fullname}</p>
        <button
          className=" my-1 bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 text-white hover:text-gray-800"
          onClick={logoutSummit}
        >
          Log out
        </button>
        <div>
          <TattoosPage />
        </div>
      </>
    );
  }

  return (
    <>
      <form
        className=" mx-auto justify-center items-center flex flex-col w-1/2 h-1/2 bg-slate-300 p-5 rounded-md"
        onSubmit={loginSummit}
      >
        <div className=" mb-3">
          <label>Username</label>
          <input
            className="mx-3 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            placeholder="username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="mx-3 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            placeholder="password"
          />
        </div>
        <button
          className=" bg-green-500 px-2 py-1 rounded-md hover:bg-green-400 text-white hover:text-gray-800"
          type="submit"
        >
          Log in
        </button>
      </form>
    </>
  );
}
