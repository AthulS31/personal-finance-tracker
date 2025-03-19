import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { SiAuthy } from "react-icons/si";
import { TbPigMoney } from "react-icons/tb";
import { logoutAction } from "../../redux/slice/Authentication-Slice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    //Remove user on logout
    localStorage.removeItem("userInfo");
  };

  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-start items-center">
              <div className="flex justify-center flex-row w-full">
                <div className="-ml-80 mr-2 flex items-left md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo */}
                  <TbPigMoney className="h-8 w-auto text-green-500" />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    to="/user/home"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    SpendWise
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    to="/user/add-transaction"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Add Transaction
                  </Link>
                  <Link
                    to="/user/category/add-category"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Add Category
                  </Link>
                  <Link
                    to="/user/categories"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Categories
                  </Link>
                  <Link
                    to="/user/profile"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/user/expense-tracker/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Finance Tracker
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    onClick={logoutHandler}
                    type="button"
                    className="relative m-2 inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  >
                    <IoLogOutOutline className="h-5 w-5" aria-hidden="true" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Navs  private links*/}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link to="/user/home">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  SpendWise
                </Disclosure.Button>
              </Link>
              <Link to="/user/add-transaction">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Add Transaction
                </Disclosure.Button>
              </Link>
              <Link to="/user/category/add-category">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Add Category
                </Disclosure.Button>
              </Link>
              <Link to="/user/categories">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Categories
                </Disclosure.Button>
              </Link>
              <Link to="/user/profile">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Profile
                </Disclosure.Button>
              </Link>
              <Link to="/user/expense-tracker/">
                <Disclosure.Button
                  as="button"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Finance Tracker
                </Disclosure.Button>
              </Link>
            </div>
            {/* Profile links */}
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="button"
                  onClick={logoutHandler}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}