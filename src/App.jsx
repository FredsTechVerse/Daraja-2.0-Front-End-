import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import WelcomePage from "./components/welcomePage";
import { motion } from "framer-motion";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, 1500);
  }, []);

  return (
    <div className="App w-screen h-screen">
      {initialLoad ? <WelcomePage /> : <Form />}
    </div>
  );
}

export default App;
