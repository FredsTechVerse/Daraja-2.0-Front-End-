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
      axios.post("/express", customerInfo).then((response) => {
        console.log(`Response received => ${response.data}`);
        if(response.data == 0 ){
        setStatusTracker(true);
        setResponse("Success.STK push sent to client. Awaiting results hands closed!");
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
        }
        else {
        console.log(`Post request Data =>${response.data}`);
        setStatusTracker(false);
        setResponse(`${response.data}`);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
        }
      }).catch((error)=>{//This simply is called when the promise was not fulfilled.An error handles an error.
        //If axios is not the response, inajiforce yenyewe tu kufit.
        console.log(error);//
        let failed_req = error.response.data;
        /*By default it we append the error,the error.message will be output.We have to destructure 
        further to get our custom error message which is in the response data section. But we have to understand that also in the front end we have used 
        axios. So ata hiyo imepata a response of status 500 meaning the promise has not been fulfilled,so it has to shout all over the 
        place with the info that it has been given.
        DARAJA GIVES IT THE WHOLE BODY. I GIVE IT A CUSTOM MESSAGE.THE AXIOS MESSAGE IS GENERATED FROM THE SERVER STATUS IT RECIEVES
        FROM WHEREVER IT WAS DELIVERING THE INFOMATIN TO. */
        setStatusTracker(false);
        setResponse(`${failed_req}`);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
        
    })};


   const B2C = async (e) => {
    e.preventDefault();
    let customerInfo = {
      stkPushNo,
      amount,
    };

    console.log(customerInfo);
  };

 
  return (
    <>
      <form className="m-2 flex-col items-center justify-center mt-10 px-5 py-5">
        <h1
          id="form__heading"
          className=" flex items-center uppercase justify-center font-extrabold text-2xl"
        >
          Transaction Mockup
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
          <div className="w-2/3 flex phone:w-full  phone:my-1  phone:flex-col items-center justify-center ">
            <label for="contact" className="w-1/5 phone:w-full">
              Contact
            </label>
            <div className=" phone:flex phone:w-full phone:items-center">
            <input
              className="px-4 w-1/5 phone:w-2/5 phone:m-0  bg-white-200 appearance-none py-2 mr-1 border-2 border-green-400 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="Text"
              required
              value="+254"
              readOnly
            />
            <input
              className="w-3/4 phone:w-full phone:ml-2  bg-white-200 appearance-none ml-2  border-2 border-green-400 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              className="w-3/5 phone:w-3/5 phone:m-1 bg-white-200 appearance-none border-2 border-green-400 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

         <div>
        {responseTracker ? (
          <p
            className={`${
              statusTracker ? " bg-green-300 border-green-600" : " bg-red-300 border-red-600"
            } text-stone-600 text-center p-4 border-l-4`}
          >
            {response}
          </p>
        ) : (
          " "
        )}
        </div>


        <div className="flex flex-col justify-center items-center w-full mt-8">
          <Button type="button" text="Lipa na Mpesa" onClick={mpesaExpress} />
          <Button type="button" text="Business to Customer" onClick={B2C} />
        </div>

     
      </form>
    </>
  );
};

export default Form; //This is like a permission that this modules gives to be imported.
