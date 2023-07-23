import { createContext, useReducer, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import tattoos from "./data/tattoos";
import TattooPost from "./components/TattooPost";
import AppSearch from "./components/AppSearch";
import TextInputApp from "./components/TextInputApp";
import AppUseEffect from "./components/AppUseEffect";
import LoginArea from "./feature/LoginArea";

function redeucer(state: any, action: any) {
  if (action.type === "login") {
    const { username, fullname } = action.payload;
    return { username, fullname };
  }

  if (action.type === "logout") {
    return null;
  }

  return state;
}

// useContext , auth
const AuthContext = createContext<any>(null);

function App() {
  //const [auth, setAuth] = useState<any>(null);
  const [authState, authDispatch] = useReducer(redeucer, null); //authDispatch({type: "login"}) dispatch action to reducer

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {/* ให้ค่าที่อยู่ใน value ไปให้ทุก component ที่อยู่ใน AuthContext.Provider --> */}
      <div className="app">
        <LoginArea />
      </div>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;
