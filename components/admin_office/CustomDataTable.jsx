"use client";
import React, { useState } from "react";
import data from "../../data.json";

export default function CustomerDataTable() {
  const arr = [1, 2, 3, 4, 5];
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  // console.log(data);
  const itemStartIndex = startIndex+1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);
  return (
    <div className="mt-4">
      <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-100">Recent Order</h2>
      {/* table */}

      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyDisplayedData.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.first_name}
                    </th>
                    <td className="px-6 py-4">{item.last_name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav
            className="flex flex-wrap items-center justify-between p-4 flex-column md:flex-row"
            aria-label="Table navigation"
          >
            <span className="block w-full mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
              {" "}
              Showing{" "}
              <span className="font-semibold dark:text-slate-50 text-slate-800">
                {itemStartIndex}-{itemEndIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold dark:text-slate-50 text-slate-800">
                {data.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px text-sm rtl:space-x-reverse h-14">
              <li>
                <button 
                   onClick={()=>setCurrentPage(currentPage-1)}
                   disabled = {currentPage==1}
                  className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
             
             {
              Array.from({length:totalPages},(_,index)=>{
                return(
                  <li key={index}>
                  <button
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage == index + 1}
                  className={
                    currentPage == index + 1
                      ? "flex items-center justify-center px-3 h-10 leading-tight text-gray-50 bg-blue-500 border border-blue-300 hover:bg-blue-800 hover:text-white dark:bg-slate-200 dark:border-slate-300 dark:text-slate-900 dark:hover:bg-slate-300 "
                      : "flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
                  }
                >
                  {index + 1}
                  </button>
                </li>
                )
              })
             }
              
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage == totalPages}
                  className="flex items-center justify-center h-10 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
