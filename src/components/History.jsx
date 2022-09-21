import React from "react";
import Breadcrumb from "../components/BreadCrumb";
const History = ({ history }) => {
  return (
    <>
      <div className="flex flex-col align-center relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="phone:hidden tablet:visible laptop:visible 2xl:visible">
            <tr>
              <th className="py-3 px-2  bg-green-600">Item</th>
              <th className="py-3 px-6 bg-green-600">Receipt No</th>
              <th className="py-3 px-6  bg-green-600">FName</th>
              <th className="py-3 px-8  bg-green-600">Contact</th>
              <th className="py-3 px-6  bg-green-600">LName</th>
              <th className="py-3 px-10 bg-green-600">Transaction Date</th>
            </tr>
          </thead>

          <thead className="phone:visible tablet:hidden laptop:hidden 2xl:hidden">
            <tr>
              <th className="py-3 px-2  bg-green-600">Item</th>
              <th className="py-3 px-6 bg-green-600">Receipt No</th>
              <th className="py-3 px-6  bg-green-600">FName</th>
              <th className="py-3 px-6  bg-green-600">Amount</th>
            </tr>
          </thead>
          <tbody className="mb-6 phone:hidden tablet:visible laptop:visible 2xl:visible">
            {history.map((history, index) => {
              let {
                phoneNumber: contact,
                fName,
                lName,
                mpesaReceiptNumber: receiptNo,
                transactionDate,
              } = history;
              return (
                <tr>
                  <td className="py-3 px-2">{`${index + 1}`}</td>
                  <td className="py-3 px-6 bg-green-100">{receiptNo}</td>
                  <td className="py-3 px-6">{fName}</td>
                  <td className="py-3 px-6  bg-green-100">{contact}</td>
                  <td className="py-3 px-6">{lName}</td>
                  <td className="py-3 px-10 bg-green-100">{transactionDate}</td>
                </tr>
              );
            })}
          </tbody>

          <tbody className="mb-6 phone:visible tablet:hidden laptop:hidden 2xl:hidden ">
            {history.map((history, index) => {
              let {
                fName,
                mpesaReceiptNumber: receiptNo,
                amountTransacted: amount,
              } = history;
              return (
                <tr>
                  <td className="py-3 px-2">{`${index + 1}`}</td>
                  <td className="py-3 px-6 bg-green-100">{receiptNo}</td>
                  <td className="py-3 px-6">{fName}</td>
                  <td className="py-3 px-6">{amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full mt-4">
          <Breadcrumb />
        </div>
      </div>
    </>
  );
};

export default History;
