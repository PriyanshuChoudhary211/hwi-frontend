import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import Modal from "./Modal";

const quizData = {
  quizTitle: "Array Quiz Assessment",
  questions: [
    {
      question: "What is the correct way to declare an array in JavaScript?",
      options: [
        "var arr = ();",
        "var arr = [];",
        "var arr = {};",
        "var arr = <>;",
      ],
      correctAnswer: "var arr = [];",
    },
    {
      question: "How do you find the length of an array 'arr'?",
      options: ["arr.length;", "length(arr);", "arr.length();", "arr.size;"],
      correctAnswer: "arr.length;",
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "Which method removes the last element from an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "pop()",
    },
    {
      question: "How do you merge two arrays 'arr1' and 'arr2'?",
      options: [
        "arr1 + arr2",
        "arr1.concat(arr2)",
        "merge(arr1, arr2)",
        "arr1.append(arr2)",
      ],
      correctAnswer: "arr1.concat(arr2)",
    },
    {
      question:
        "Which method creates a new array with the results of calling a function for every array element?",
      options: ["map()", "forEach()", "filter()", "reduce()"],
      correctAnswer: "map()",
    },
    {
      question: "How do you check if 'arr' is an array?",
      options: [
        "typeof arr === 'array'",
        "Array.isArray(arr)",
        "arr.isArray()",
        "arr instanceof Array",
      ],
      correctAnswer: "Array.isArray(arr)",
    },
    {
      question: "Which method removes the first element from an array?",
      options: ["shift()", "pop()", "push()", "unshift()"],
      correctAnswer: "shift()",
    },
    {
      question:
        "Which method adds one or more elements to the beginning of an array?",
      options: ["unshift()", "push()", "pop()", "shift()"],
      correctAnswer: "unshift()",
    },
    {
      question: "How do you sort the elements of an array?",
      options: ["sort()", "order()", "arrange()", "setOrder()"],
      correctAnswer: "sort()",
    },
  ],
};

const Quiz = () => {
    const [score, setScore] = useState(null); // State to store the final score
    const [modalOpen, setModalOpen] = useState(false);
    // Function to handle form submission and calculate score
    const { register, handleSubmit } = useForm(); // Initialize useForm
    const closeModal = () => {
        setModalOpen(false);
    };
    
    const handleClick = () => {
        setModalOpen(true);
    }

    const onSubmit = (data) => {
        let totalScore = 0;
    quizData.questions.forEach((question, index) => {
      if (data[`question${index}`] === question.correctAnswer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
  };

  return (
    <div className="quiz-container min-h-screen bg-gray-900 ">
      <h2 className="text-white text-2xl p-8">{quizData.quizTitle}</h2>

      {/* Display the quiz form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {quizData.questions.map((question, index) => (
          <div key={index} className="question-group text-white p-8">
            <p>{question.question}</p>
            {question.options.map((option, optIndex) => (
              <div key={optIndex}>
                <input
                  type="radio"
                  id={`question${index}_option${optIndex}`}
                  value={option}
                  {...register(`question${index}`, { required: true })} // Register each question with react-hook-form
                />
                <label
                  className="pl-4 py-8"
                  htmlFor={`question${index}_option${optIndex}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        {/* Submit button */}
        <div className="p-8">
          <button
            type="submit"
            onClick={handleClick}
            className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Submit Quiz
          </button>
        </div>
      </form>

      {/* Display the score after submission */}
      {/* {score !== null && (
        <div className="score text-white p-8">
          <h3>
            Your Score: {score} / {quizData.questions.length}
          </h3>
        </div>
      )} */}

    {modalOpen && score !== null && (
        <Modal onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <h3>Your Score: {score} / {quizData.questions.length}</h3>
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-700"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Quiz;
