"use client";
import { useState } from "react";

import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import ActionDropdown from "../components/actionDropdown";

function TableExample() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="flex gap-5 flex-wrap items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">
                  Example Table
                </h2>
                <form
                  action="/"
                  class="relative w-full sm:w-80 flex items-center h-12 rounded-md focus-within:shadow-lg bg-white overflow-hidden"
                >
                  <div class="grid place-items-center h-full w-12 text-gray-300 hover:text-indigo-400">
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          className="transition"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </form>
              </div>
              {/* Table */}
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Client / Invoice
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Issued / Due
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Molly Sanders
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                000004
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $20,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            USD
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 28, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due in 3 days
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Paid</span>
                          </span>
                        </td>
                        <td className="relative px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <ActionDropdown />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Michael Roberts
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                000003
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $214,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            USD
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 25, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due in 6 days
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Paid</span>
                          </span>
                        </td>
                        <td className="relative px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <ActionDropdown />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Devin Childs
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                000002
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $20,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            USD
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 14, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due in 2 weeks
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Pending</span>
                          </span>
                        </td>
                        <td className="relative px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <ActionDropdown />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Frederick Nicholas
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                000001
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $12,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            USD
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 6, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due 3 weeks ago
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Overdue</span>
                          </span>
                        </td>
                        <td className="relative px-5 py-5 bg-white text-sm text-right">
                          <ActionDropdown />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* pagination */}
              <nav aria-label="Pagination" class="text-gray-600 pt-8">
                <ul className="flex items-center justify-center gap-2">
                  <li>
                    <a
                      href="#"
                      class="p-2 inline-block align-middle rounded hover:bg-gray-200 hover:text-indigo-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 text-indigo-400 hover:text-indigo-400 bg-gray-200 inline-block rounded hover:bg-gray-200"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 hover:text-indigo-400 rounded inline-block text-gray-900 font-medium hover:bg-gray-200"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 hover:text-indigo-400 inline-block rounded hover:bg-gray-200"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 hover:text-indigo-400 inline-block rounded hover:bg-gray-200"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 hover:text-indigo-400 inline-block rounded hover:bg-gray-200"
                    >
                      9
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="p-2 inline-block align-middle rounded hover:bg-gray-200 hover:text-indigo-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TableExample;
