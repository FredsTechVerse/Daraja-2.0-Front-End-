import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = () => {
  return (
    <>
      <div className="w-full flex justify-between  px-10 mt-4 items-center">
        {["home", "table"].map((item, index) => {
          return (
            <button key={`${item}-${index} `}>
              <Link
                className="rounded-lg  text-center  capitalize w-full px-10 text-dark hover:text-white bg-rose-600 border-2 hover:bg-green-600 py-2"
                to={`/${item}`}
              >
                {item}
              </Link>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default BreadCrumb;
