// import AboutUs from "./component/AboutUs";
import { useState } from "react";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";

function App() {

  const [mode, setMode] = useState("white");

  const toggleMode = () => {
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    }
  }

  return (
    <>
      <NavBar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className={`container my-3 text-${mode==="dark"?"light":"dark"}`}>
        <TextForm heading="Text Convertion box" mode = {mode}/>
        {/* <AboutUs/> */}
      </div>

    </>
  );
}

export default App;
