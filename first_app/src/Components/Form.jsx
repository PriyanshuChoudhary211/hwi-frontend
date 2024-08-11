import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
const Form = () => {
  const arr = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Recursion",
    "Tree",
    "Graph",
    "Sorting",
    "Searching",
    "Dynamic Programming",
    "Greedy Algorithm",
    "Bit Manipulation",
    "Hashing",
    "Mathematics for DSA",
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-2xl text-white ">Select Your Levels</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {arr.map((a) => (
          <div className="text-xl text-white mt-4 flex flex-row justify-between border border-current p-4 rounded-xl">
            {a}
            <div>
              <input type="checkbox" id="beginner" {...register("beginner")} />
              <label htmlFor="beginner" className="pl-2">
                Beginner
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="intermediate"
                {...register("intermediate")}
              />
              <label htmlFor="intermediate" className="pl-2">
                Intermediate
              </label>
            </div>
            <div>
              <input type="checkbox" id="advance" {...register("advance")} />
              <label htmlFor="advance" className="pl-2">
                advance
              </label>
            </div>
          </div>
        ))}
        <div className="mt-6">
            <Link to = "/quiz">
        <button
          type="submit"
          className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
          Submit
        </button>
              </Link>
            </div>
      </form>
    </div>
  );
};

export default Form;
