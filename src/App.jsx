import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";
import Form from "./components/Form";
import WelcomePage from "./components/welcomePage";
import RedirectPage from "./components/Pages/RedirectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [initialLoad, setInitialLoad] = useState(false);
  const [statusTracker, setStatusTracker] = useState(true);
  const [response, setResponse] = useState("");
  const [responseTracker, setResponseTracker] = useState(false);

  // const [afterLoad, setAfterLoad] = useState(false);

  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const paymentData = async () => {
      try {
        let { data } = await axios.get("history");
        setPaymentHistory(data);
        setStatusTracker(true);
        setResponse("Database connected successfully");
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      } catch (error) {
        setStatusTracker(false);
        setResponse(`${error.message}`);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      }
    };
    paymentData();
    setTimeout(() => {
      setInitialLoad(true);
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="App w-full flex flex-col items-center justify-center">
        {initialLoad ? (
          <>
            <Routes>
              <Route exact path="/" element={<Form />}></Route>
              <Route exact path="/lastPage" element={<RedirectPage />}></Route>
              <Route exact path="/home" element={<Form />}></Route>
              <Route exact path="*" element={<Form />}></Route>

              {/* <Route
                exact
                path="/table"
                element={<History history={paymentHistory} />}
              ></Route> */}
            </Routes>
          </>
        ) : (
          <WelcomePage />
        )}
      </div>
      <div>
        {responseTracker ? (
          <p
            className={`${
              statusTracker
                ? " bg-green-300 border-green-600"
                : " bg-red-300 border-red-600"
            } fixed top-2 right-5 text-stone-600 text-center p-4 border-l-4`}
          >
            {response}
          </p>
        ) : (
          " "
        )}
      </div>
    </Router>
  );
}

export default App;
