import { useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Speedometer from "../components/Speedometer";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import FiltersTableTwo from '../components/FiltersTableTwo';
import PercentageContainer from '../components/PercentageContainer';

function TableOne() {
  const [tableDetails, setTableDetails] = useState(
    [
      {
        status: "check",
        id: 624,
        start: "Nov 21, 2023, 10:38 am",
        name: "ONLINE SALES FW23_1",
        targets: "Winter sales FW23",
        steering: 90,
        products: 4465,
        rules: 3,
        predicted_revenue: 4.89,
        predicted_profit: -4.19,
        predicted_sales: 26.19,
        profit_margin: 62.7,
        from_till: ["15 Dec 2023", "21 Dec 2023"]
      },
      {
        status: "check",
        id: 624,
        start: "Nov 21, 2023, 10:38 am",
        name: "ONLINE SALES FW23_1",
        targets: "Winter sales FW23",
        steering: 90,
        products: 4465,
        rules: 3,
        predicted_revenue: 4.89,
        predicted_profit: -4.19,
        predicted_sales: 26.19,
        profit_margin: 62.7,
        from_till: ["15 Dec 2023", "21 Dec 2023"]
      },
      {
        status: "check",
        id: 624,
        start: "Nov 21, 2023, 10:38 am",
        name: "ONLINE SALES FW23_1",
        targets: "Winter sales FW23",
        steering: 90,
        products: 4465,
        rules: 3,
        predicted_revenue: 4.89,
        predicted_profit: -4.19,
        predicted_sales: 26.19,
        profit_margin: 62.7,
        from_till: ["15 Dec 2023", "21 Dec 2023"]
      },
      {
        status: "check",
        id: 624,
        start: "Nov 21, 2023, 10:38 am",
        name: "ONLINE SALES FW23_11",
        targets: "Online sales FW23",
        steering: 90,
        products: 4465,
        rules: 3,
        predicted_revenue: 4.89,
        predicted_profit: -4.19,
        predicted_sales: 26.19,
        profit_margin: 62.7,
        from_till: ["15 Dec 2023", "21 Dec 2023"]
      },
      {
        status: "dcheck",
        id: 624,
        start: "Nov 21, 2023, 10:38 am",
        name: "ONLINE SALES FW23_1",
        targets: "Winter sales FW23",
        steering: 100,
        products: 4465,
        rules: 3,
        predicted_revenue: 4.89,
        predicted_profit: -4.19,
        predicted_sales: 26.19,
        profit_margin: 62.7,
        from_till: ["7 Dec 2023", "13 Dec 2023"]
      },
    ]
  );

  return (
    <>
      {/* <Navbar /> */}
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
                      {item.status !== "check" ? <IoCheckmarkDone size={20} color={"#1D4ED8"}/> : <IoMdCheckmark size={20} color={"#1D4ED8"}/>}
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.id}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.name}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.products}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                      {item.from_till[0]}
                        {/* 15 Dec 2023 */}
                         <br/>
                        {/* 21 Dec 2023 */}
                      {item.from_till[1]}
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">{item.rules}</td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                      <Speedometer percentage={item.steering}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                        <FiltersTableTwo filter={item.targets}/>
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      <PercentageContainer number={item.predicted_revenue}/>
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      <PercentageContainer number={item.predicted_profit}/>
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      <PercentageContainer number={item.predicted_sales}/>
                    </td>
                    <td className="text-sm text-gray-500 py-3 w-auto">
                      <FiltersTableTwo filter={`${item.profit_margin}%`}/>
                    </td>
                    <td className="text-sm text-left cursor-pointer whitespace-nowrap text-gray-500 px-3 py-3">
                      <MdContentCopy color={"#1D4ED8"} size={17}/>
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
