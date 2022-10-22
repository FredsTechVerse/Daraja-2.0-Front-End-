import React from "react";

const RedirectPage = () => {
  return (
    <div className="flex flex-col items-center justify-start border-none rounded-lg bg-green-400 w-4/5 py-7 px-2 mt-10">
      <p className="text-center">
        <span className="uppercase text-md block font-bold mb-2">
          Congratulations!
        </span>
        <span className="px-5">
          An Mpesa Prompt has been successfully sent to your device. Do you need
          M-pesa services integrated to your website application today?
        </span>
      </p>
      <a
        href="https://alfredgithinjigichia.netlify.app/"
        role="button"
        className=" flex mt-1 py-0.5 items-center justify-center bg-black text-white rounded-xl w-1/3 hover:bg-cyan-100 hover:text-black"
      >
        Reach Out
      </a>
    </div>
  );
};

export default RedirectPage;
