// import AboutUs from "./component/AboutUs";
import { useState } from "react";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";

function App() {

  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==="dark"){
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been anabled!", "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Light mode has been anabled!", "success");
    }
  }

  return (
    <>
      <NavBar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Text Convertion box" mode = {mode}/>
        {/* <AboutUs/> */}
      </div>

    </>
  );
}

export default App;
