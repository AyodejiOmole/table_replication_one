import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import ReviewersBox from '../components/ReviewersBox';
import { IoCheckmarkDone } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";
import Speedometer from "../components/Speedometer";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

function TableOne() {
  const [tableDetails, setTableDetails] = useState(
    [
      {
        status: "Lorem ipsum dolor",
        ID: "59",
        Start: "Nov 21, 2023, 10:38 am",
        Optimization: "ONLINE SALES FW23_8(ID:616)",
        steering: 90,
        Rules: "4",
        Configuration: "Price Changes - S3",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 10:38 am",
      },
      {
        status: "Lorem ipsum dolor",
        ID: "58",
        Start: "Nov 21, 2023, 10:38 am",
        Optimization: "ONLINE SALES FW23_8(ID:616)",
        Rules: "4",
        steering: 10,
        Configuration: "Price Changes - S3",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 2:53 pm",
      },
      {
        status: "Lorem ipsum dolor",
        ID: "58",
        Start: "Nov 21, 2023, 10:38 am",
        Optimization: "ONLINE SALES FW23_8(ID:616)",
        Rules: "4",
        steering: 80,
        Configuration: "Price Changes - S3",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 2:53 pm",
      },
      {
        status: "Lorem ipsum dolor",
        ID: "58",
        Start: "Nov 21, 2023, 10:38 am",
        Optimization: "ONLINE SALES FW23_8(ID:616)",
        Rules: "4",
        steering: 50,
        Configuration: "Price Changes - S3",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 2:53 pm",
      },
      {
        status: "Lorem ipsum dolor",
        ID: "58",
        Start: "Nov 21, 2023, 10:38 am",
        Optimization: "ONLINE SALES FW23_8(ID:616)",
        Rules: "4",
        steering: 30,
        Configuration: "Price Changes - S3",
        Reviewers: "Andrea Antonescu",
        Upload: "Nov 6, 2023, 2:53 pm",
      }
    ]
  );

  return (
    <>
      <Navbar />
      <div className="relative w-full p-3 mb-6 mt-6">
        <div className="flex justify-between w-full pb-10 border-b-2 border-green-600 mb-10">
          <div className="flex justify-between shadow-lg gap-2 items-center py-2 px-4 bg-blue-700 rounded-md cursor-pointer">
            <FaPlus className="fill-white"/>
            <p className="text-white text-sm">Create</p>
          </div>

          <div className="flex justify-center items-center bg-gray-300 cursor-pointer py-2 px-4 rounded-md border-b-2 border-gray-500">
            Upload
          </div>
        </div>

        <div className="bg-transparent rounded-md shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="border border-solid border-l-0 border-r-0 ">
              <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3">    </th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Status</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">ID</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Name</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">#Products</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">From<br/>Till</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">#Rules</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Steering</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Targets</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Predicted Revenue</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Predicted Profit</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Predicted Sales</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">Profit Margin</th>
                <th className="text-xs text-left border border-l-0 border-r-0 text-gray-500 px-2 py-3 whitespace-nowrap">      </th>
              </tr>
            </thead>
            <tbody className="">
              {tableDetails.map((item) => {
                return (
                  <tr className="border border-solid w-auto border-l-0 border-r-0 px-4 py-3">
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      <MdOutlinePushPin size={20} color={"#1D4ED8"}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      <IoCheckmarkDone className="" size={20} color={"#1D4ED8"}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.ID}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.Start}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">4465</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                        15 Dec 2023 <br/>
                        21 Dec 2023
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.Rules}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                      {/* <Steering value={item.Steering}/> */}
                      <Speedometer percentage={item.steering}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                        Winter Sales FW23
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      {/* <div className="w-full">
                        <ReviewersBox name={item.Reviewers}/>
                      </div> */}
                      +4.89%
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      {/* <div className="w-full">
                        <ReviewersBox name={item.Reviewers}/>
                      </div> */}
                      -4.19%
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      {/* <div className="w-full">
                        <ReviewersBox name={item.Reviewers}/>
                      </div> */}
                      +26.19%
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      {/* <div className="w-full">
                        <ReviewersBox name={item.Reviewers}/>
                      </div> */}
                      62.7%
                    </td>
                    {/* <td className="text-sm whitespace-nowrap text-left text-gray-500 px-3 py-3">{item.Upload}</td> */}
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      {/* <div className="flex space-between gap-2 w-full ">
                        <IoPencil className="fill-gray-400" size={17}/>
                        <RiEyeCloseLine className="fill-blue-700" size={17}/>
                        <FaTrash className="fill-gray-400" size={17}/>
                      </div> */}
                      <MdContentCopy  color={"#1D4ED8"} size={17}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TableOne;
