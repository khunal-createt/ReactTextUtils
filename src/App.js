// import AboutUs from "./component/AboutUs";
import { useState } from "react";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";

function App() {

  const [mode, setMode] = useState("white");

  const toggleMode = () => {
    if(mode==="dark"){
      setMode("white");
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
      <div className="container my-3">
        <TextForm heading="Text Convertion box" mode = {mode}/>
        {/* <AboutUs/> */}
      </div>

    </>
  );
}

export default App;
