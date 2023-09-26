import React from "react";
import NavBar from "./component/navbar";
import SideBar from "./component/SideBar";

const Dashboard = () => {
    return (
      <div>
        <NavBar />
        <SideBar />
        <div class="p-4 sm:ml-64">
          <div class="p-4 border-2 border-white rounded-lg dark:border-gray-700 mt-14">

              <div class="grid grid-cols-4 gap-4 mb-4">   
                <a href="#" class="text-center text-sm text-gray-400 font-medium block max-w-sm sm:p-8 bg-white border shadow border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Unresolved
                    <span class="flex flex-col items-center text-3xl font-bold text-black-500 dark:text-black-400">60</span>
                </a>
                <a href="#" class="text-center text-sm text-gray-400 font-medium block max-w-sm sm:p-8 bg-white border shadow border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Overdue
                    <span class="flex flex-col items-center text-3xl font-bold text-black-500 dark:text-black-400">16</span>
                </a>
                <a href="#" class="text-center text-sm text-gray-400 font-medium block max-w-sm sm:p-8 bg-white border shadow border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Open
                    <span class="flex flex-col items-center text-3xl font-bold text-black-500 dark:text-black-400">43</span>
                </a>
                <a href="#" class="text-center text-sm text-gray-400 font-medium block max-w-sm sm:p-8 bg-white border shadow border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">On Hold
                    <span class="flex flex-col items-center text-3xl font-bold text-black-500 dark:text-black-400">64</span>
                </a>
              </div>

              <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex-1 min-w-0">
                          <h5 class="text-lg font-medium leading-none text-gray-900 dark:text-white">Unresolved tickets</h5>
                          <span class="text-xs text-gray-500 truncate dark:text-gray-400">Group: <span className="text-gray-900 font-medium">Support</span></span>
                        </div>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                              View details
                        </a>
                    </div>
                    <div class="flow-root">
                          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">                                
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                              Waiting on Feature Request
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                          4238
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                              Awaiting Customer Response
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                          914
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                              Awaiting Developer Fix
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                          914
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                              Pending
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                          281
                                      </div>
                                  </div>
                              </li>
                          </ul>
                    </div>
                  </div>
                  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex-1 min-w-0">
                          <h5 class="text-lg font-medium leading-none text-gray-900 dark:text-white">Task</h5>
                          <span class="text-xs text-gray-500 truncate dark:text-gray-400">Today</span>
                        </div>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                              View all
                        </a>
                    </div>
                    <div class="flow-root">
                          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">                                
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-400 truncate dark:text-white">
                                              Create new task
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                      <p class="text-xl text-gray-400 dark:text-gray-500">
                                      <button class="text-gray-500 bg-gray-100 font-medium rounded-lg text-xs px-1 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                          <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                          </svg>
                                      </button>
                                      </p>
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            <div class="flex items-center">
                                                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Finish ticket update</label>
                                            </div>
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                        <button type="button" class="focus:outline-none text-white bg-yellow-300 font-medium rounded-lg text-xs px-3 py-1 mr-2 dark:focus:ring-yellow-900">URGENT</button>
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            <div class="flex items-center">
                                                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Create new ticket example</label>
                                            </div>
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                        <button type="button" class="text-white bg-green-500 font-medium rounded-lg text-xs px-3 py-1 mr-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">NEW</button>
                                      </div>
                                  </div>
                              </li>
                              <li class="py-3 sm:py-3">
                                  <div class="flex items-center space-x-4">
                                      <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            <div class="flex items-center">
                                                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Update ticket report</label>
                                            </div>
                                          </p>
                                      </div>
                                      <div class="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-white">
                                        <button type="button" class="text-gray-500 bg-gray-100 font-medium rounded-lg text-xs px-3 py-1 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">DEFAULT</button>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Dashboard;