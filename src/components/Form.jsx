import React, { useState } from "react";
import Button from "./Button";
import axios from "../axios";
import { motion } from "framer-motion";

const Form = () => {
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
    e.preventDefault();

    let customerInfo = {
      fName,
      lName,
      stkPushNo: `254${stkPushNo}`,
      amount,
    };

    console.log(customerInfo);

    try {
      axios.post("/express", customerInfo).then(async (response) => {
        let description = await response.data.ResponseDescription;
        console.log(description);
        setStatusTracker(true);
        setResponse(description);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      setStatusTracker(false);
      setResponse(error.message);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };

  const B2C = async (e) => {
    e.preventDefault();
    let customerInfo = {
      stkPushNo,
      amount,
      // token,
    };

    console.log(customerInfo);

    try {
      axios.delete(`/email/${info.name}`).then((response) => {
        setStatusTracker(true);
        setResponse(response.data);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      });
    } catch (error) {
      setStatusTracker(false);
      setResponse(error.message);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };
  return (
    <>
      <form className="border-2 border-orange-700 flex-col items-center justify-center mt-10 px-5 py-5">
        <h1
          id="form__heading"
          className=" flex items-center uppercase justify-center font-extrabold text-2xl"
        >
          Transaction Details
        </h1>

        <div className="flex phone:flex-col justify-around items-center my-10">
          <label for="contact" className="w-1/5 phone:w-full">
            Names
          </label>
          <input
            className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
            className="phone:w-full phone:my-1 px-4 mr-4 w-2/5 bg-white-200 appearance-none py-2 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          <div className="w-2/3 flex phone:flex-col items-center justify-center ">
            <label for="contact" className="w-1/5">
              Contact
            </label>
            <div className="phone:flex  phone:items-center">
            <input
              className="px-4 w-1/5 phone:w-2/5 phone:m-0  bg-white-200 appearance-none py-2 mr-1 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="Text"
              required
              value="+254"
              readOnly
            />
            <input
              className="w-3/5 phone:w-3/5 phone:m-0 phone:px-0  bg-white-200 appearance-none ml-2 mr-10  border-2 border-green-400 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          <div className="w-1/3 phone:w-full flex items-center justify-center ">
            <label for="contact" className="w-2/5">
              Amount
            </label>
            <input
              className="w-3/5 bg-white-200 appearance-none border-2 border-green-400 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

        <div className="flex items-center justify-between my-5 mx-5"></div>

        <div className="flex justify-around items-center w-100 my-5 ">
          <Button type="button" text="Mpesa Express" onClick={mpesaExpress} />
          <Button type="button" text="B2C" onClick={B2C} />
        </div>

        {responseTracker ? (
          <p
            className={`${
              statusTracker ? "bg-green-500" : "bg-red-500"
            } text-stone-600 text-center`}
          >
            {response}
          </p>
        ) : (
          " "
        )}
      </form>
    </>
  );
};

export default Form; //This is like a permission that this modules gives to be imported.
