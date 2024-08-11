import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
        <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-xl">
          <div className="text-2xl font-bold mb-4 text-center text-white">
            AI APPLICATION
          </div>
          <div className="text-xl text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, veniam
            eum blanditiis animi quam quas dignissimos odio ut, ducimus eligendi
            quod ex nihil autem suscipit? Porro iusto minima nam doloribus
            numquam nobis a vitae voluptate voluptates eum soluta dolorem
            temporibus, nihil adipisci, harum unde corporis ut eveniet suscipit
            incidunt voluptatem.
          </div>
          <div className="text-center mt-4">
            <Link to = '/form'>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
                Getting Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
