import React, { useState } from "react";
import Button from "./Button";
import axios from "../axios";
// import { motion } from "framer-motion";
// import Breadcrumb from "../components/BreadCrumb";
import CustomNav from "./CustomNav";
import { useNavigate } from "react-router-dom";
const Form = () => {
  let navigate = useNavigate();
  // DECLARATION OF VARIABLES
  //=========================
  const [stkPushNo, setStkPushNo] = useState("");
  const [amount, setAmount] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [responseTracker, setResponseTracker] = useState(false);
  const [statusTracker, setStatusTracker] = useState(true);
  const [response, setResponse] = useState("");

  const mpesaExpress = async (e) => {
    try {
      e.preventDefault();

      const customerInfo = {
        fName,
        lName,
        stkPushNo: `254${stkPushNo}`,
        amount,
      };
      const { data, status } = await axios.post("/express", customerInfo);
      if (status == 202) {
        setStatusTracker(true);
        setResponse("STK push has been sent successfully.");
        setFName("");
        setLName("");
        setAmount("");
        setStkPushNo("");
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
        navigate("/last-page");
      }
    } catch (error) {
      // Destructuring the axios error which comes in 3 diff flavours
      const { message, status, code, config } = error;
      const { method, url, data } = config;
      console.log(message, method, url, data);
      console.log(status, code);
      // Status is present but one cannot reach out to it.

      setStatusTracker(false);
      setResponse(
        `Confirm that all details have been filled correctly or if you have stable internet.`
      );
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col phone:w-full phone:px-2 phone:mt-1 w-4/5 items-center justify-center phone:border-none border-2 border-green-400 phone mt-5 rounded-lg">
      <CustomNav />
      <form className="flex-col items-center justify-center px-5 w-full phone:border-2 phone:border-green-200 phone:rounded-b-md">
        {responseTracker ? (
          <p
            className={`${
              statusTracker
                ? " bg-green-300 border-green-600"
                : " bg-red-300 border-red-600"
            } relative text-stone-600 text-center my-3 p-4 border-l-4`}
          >
            {response}
          </p>
        ) : (
          " "
        )}
        <div className="flex phone:flex-col justify-around items-center my-10">
          <label for="contact" className="w-1/5 phone:w-full">
            Names
          </label>
          <input
            className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-sm"
            id="fName"
            type="Text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
            required
          ></input>

          <input
            className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-sm"
            id="lName"
            type="Text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => {
              setLName(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="flex phone:flex-col  items-center justify-center my-5">
          <div className="w-2/3 flex phone:w-full  phone:my-1  phone:flex-col items-center justify-center ">
            <label for="contact" className="w-1/5 phone:w-full">
              Contact
            </label>
            <div className=" phone:flex phone:w-full phone:items-center">
              <input
                className="px-2 w-1/5 phone:w-2/5 phone:m-0  bg-white-200 appearance-none py-2 mr-1 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                type="Text"
                required
                value="+254"
                readOnly
              />
              <input
                className="w-3/4 phone:w-full phone:ml-2  bg-white-200 appearance-none ml-2  border-2 border-green-400 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-sm"
                id="contact"
                type="Number"
                placeholder="Safaricom No."
                value={stkPushNo}
                onChange={(e) => {
                  setStkPushNo(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="w-1/3 phone:w-full phone:my-1  phone:flex flex items-center">
            <label for="contact" className=" w-2/5">
              Amount
            </label>
            <input
              className="w-3/5 phone:w-3/5 phone:m-1 bg-white-200 appearance-none border-2 border-green-400 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:text-sm"
              id="amount"
              type="Number"
              placeholder=" Enter Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mt-8 ">
          <Button
            type="button"
            text="Complete Transaction"
            onClick={mpesaExpress}
          />
        </div>
      </form>
    </div>
  );
};

export default Form; //This is like a permission that this modules gives to be imported.
