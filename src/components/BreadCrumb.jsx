import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const BreadCrumb = ({ position }) => {
  return (
    <>
      <div className="w-full flex justify-end  mt-4 items-center">
        <button className="ml-5 flex w-28">
          <Link
            className="rounded-lg  text-center  capitalize w-full px-2 py-1 text-white hover:text-white bg-rose-600 border-2 hover:bg-green-600 "
            to="/home"
          >
            <div className="flex justify-between px-2 items-center w-full ">
              <span>
                <AiOutlineLeft />
              </span>
              <p className="pt-0.5">Home</p>
            </div>
          </Link>
        </button>
        <button className="ml-5  flex w-28">
          <Link
            className="rounded-lg  text-center  capitalize w-full px-2 py-1 text-white hover:text-white bg-rose-600 border-2 hover:bg-green-600 "
            to="/table"
          >
            <div className="flex justify-between px-2 items-center w-full  ">
              <p className="pt-0.5">Table</p>
              <span>
                <AiOutlineRight />
              </span>
            </div>
          </Link>
        </button>
      </div>
    </>
  );
};

export default BreadCrumb;
