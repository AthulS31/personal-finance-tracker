import React from "react";
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './home.css';

const HomePublic = () => {
  return (
<>
      <div className="bg-gradient-to-r from-red-400 to-blue-400 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center text-blue-900">
            Track Your Expenses Effortlessly
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl text-center">
            Manage your finances with a modern solution designed for you.
          </p>

          {/* Feature Icons */}
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-3xl" />
              <p className="mt-2">Efficient Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFilter className="text-3xl" />
              <p className="mt-2">Transactions Filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <IoIosStats className="text-3xl" />
              <p className="mt-2">Insightful Reports</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link to="/user/register">
            <button className="mt-8 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {/* How It Works */}
          HOW TO START YOUR EPIC JOURNEY?
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <h1></h1>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-blue-500 text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold">Sign Up</h3>
            <p>Register and start managing your expenses in a minute.</p>
          </div>
          {/* Step 2 */}
          <h1></h1>
          <div className="flex flex-col items-center text-center">
  
            <h3 className="mb-2 font-semibold">Add Transactions</h3>
            <p>Quickly add income and expenses to your account.</p>
          </div>
          {/* Step 3 */}
          <h1></h1>
          <div className="flex flex-col items-center text-center">

            <h3 className="mb-2 font-semibold">View Reports</h3>
            <p>See insightful reports & graphs of your finances.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Be the master of your goals
          </h2>
        </div>
      </div>
    </>
  );
};
export default HomePublic;
