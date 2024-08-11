
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Form = () => {
//   const [question, setQuestion] = useState("");
//   const [username, setUsername] = useState("User"); // Placeholder for username, update as needed

//   const handleInputChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Question:", question);
//     // You can add further actions like saving the question or redirecting the user
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">
//       <div className="text-center text-white">
//         <h1 className="text-4xl font-bold mb-4">
//           Hello, {username}! How can I help you today?
//         </h1>
//         <p className="text-xl mb-8">
//           Ask us anything or let us know how we can assist you.
//         </p>
//       </div>
      
//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-6">
//           <input
//             type="text"
//             value={question}
//             onChange={handleInputChange}
//             placeholder="Type your question here..."
//             className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="text-center">
//           <Link to="/quiz">
//             <button
//               type="submit"
//               className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
//             >
//               Submit
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

// import React, { useState, useEffect} from "react";
// import { Link } from "react-router-dom";

// const Form = () => {
//   const [question, setQuestion] = useState("");
//   const [username, setUsername] = useState("User");
//   const [compliment, setCompliment] = useState("");
//   const [animating, setAnimating] = useState(true);
//   const compliments = [
//     "You're doing great!",
//     "Keep up the amazing work!",
//     "You're awesome!",
//     "You can achieve anything!",
//     "Believe in yourself!",
//   ];

//   // Function to animate the compliment display
//   useEffect(() => {
//     const randomCompliment =
//       compliments[Math.floor(Math.random() * compliments.length)];
//     let i = 0;
//     const interval = setInterval(() => {
//       setCompliment((prev) => prev + randomCompliment.charAt(i));
//       i++;
//       if (i === randomCompliment.length) {
//         clearInterval(interval);
//       }
//     }, 100); // Adjust speed as needed
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Question:", question);
//     // Additional actions like saving the question or redirecting the user
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">
//       <div className="text-center text-white animate-fade-in">
//         <h1 className="text-4xl font-bold mb-4 animate-slide-in">
//           Hello, {username}! {compliment}
//         </h1>
//         <p className="text-xl mb-8 animate-fade-in-delay">
//           Ask us anything or let us know how we can assist you.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-6">
//           <input
//             type="text"
//             value={question}
//             onChange={handleInputChange}
//             placeholder="Type your question here..."
//             className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//         <div className="text-center">
//           <Link to="/quiz">
//             <button
//               type="submit"
//               className="w-fit px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transform transition-transform duration-300 hover:scale-110"
//             >
//               Submit
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Form = () => {
//   const [question, setQuestion] = useState("");
//   const [username, setUsername] = useState("User"); // Placeholder for username, update as needed
//   const [compliment, setCompliment] = useState("");
//   const [animating, setAnimating] = useState(true);
  
//   const compliments = [
//     "You're doing great!",
//     "Keep up the amazing work!",
//     "You're awesome!",
//     "You can achieve anything!",
//     "Believe in yourself!",
//   ];

//   useEffect(() => {
//     const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
//     let i = 0;
//     const interval = setInterval(() => {
//       setCompliment((prev) => prev + randomCompliment.charAt(i));
//       i++;
//       if (i === randomCompliment.length) {
//         clearInterval(interval);
//         setTimeout(() => setAnimating(false), 1000); // Start hiding after 1 second
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!animating && compliment.length > 0) {
//       const interval = setInterval(() => {
//         setCompliment((prev) => prev.slice(0, -1));
//         if (compliment.length === 1) {
//           clearInterval(interval);
//           setAnimating(true); // Reset the animating flag for next compliment
//         }
//       }, 100);

//       return () => clearInterval(interval);
//     }
//   }, [animating, compliment]);

//   const handleInputChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Question:", question);
//     // Add further actions like saving the question or redirecting the user
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">
//       <div className="text-center text-white">
//         <h1 className="text-4xl font-bold mb-4">
//           Hello, {username}! How can I help you today?
//         </h1>
//         <p className="text-xl mb-8">
//           Ask us anything or let us know how we can assist you.
//         </p>
//         <p className="text-2xl font-semibold text-blue-400 mb-6">
//           {compliment}
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-6">
//           <input
//             type="text"
//             value={question}
//             onChange={handleInputChange}
//             placeholder="Type your question here..."
//             className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="text-center">
//           <Link to="/quiz">
//             <button
//               type="submit"
//               className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
//             >
//               Submit
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Form = () => {
//   const [question, setQuestion] = useState("");
//   const [username, setUsername] = useState("User"); // Placeholder for username, update as needed
//   const [compliment, setCompliment] = useState("");
//   const [animating, setAnimating] = useState(true);

//   const compliments = [
//     "You're doing great!",
//     "Keep up the amazing work!",
//     "You're awesome!",
//     "You can achieve anything!",
//     "Believe in yourself!",
//   ];

//   useEffect(() => {
//     const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
//     let i = 0;
//     const interval = setInterval(() => {
//       setCompliment((prev) => prev + randomCompliment.charAt(i));
//       i++;
//       if (i === randomCompliment.length) {
//         clearInterval(interval);
//         setTimeout(() => setAnimating(false), 1000); // Start hiding after 1 second
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!animating && compliment.length > 0) {
//       const interval = setInterval(() => {
//         setCompliment((prev) => prev.slice(0, -1));
//         if (compliment.length === 1) {
//           clearInterval(interval);
//           setAnimating(true); // Reset the animating flag for next compliment
//         }
//       }, 100);

//       return () => clearInterval(interval);
//     }
//   }, [animating, compliment]);

//   const handleInputChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User Question:", question);
//     // Add further actions like saving the question or redirecting the user
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">
//       <div className="text-center text-white">
//         <h1 className="text-4xl font-bold mb-4">
//           Hello, {username}! {compliment}
//         </h1>
//         <p className="text-xl mb-8">
//           Ask us anything or let us know how we can assist you.
//         </p>
//         <p className="text-2xl font-semibold text-blue-400 mb-6">
//           {compliment}
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="w-full max-w-md">
//         <div className="mb-6">
//           <input
//             type="text"
//             value={question}
//             onChange={handleInputChange}
//             placeholder="Type your question here..."
//             className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="text-center">
//           <Link to="/quiz">
//             <button
//               type="submit"
//               className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
//             >
//               Submit
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [question, setQuestion] = useState("");
  const [username, setUsername] = useState("User"); // Placeholder for username, update as needed
  const [compliment, setCompliment] = useState("");
  const [animating, setAnimating] = useState(true);

  const compliments = [
    "You're doing great!",
    // "Keep up the amazing work!",
    "You're awesome!",
    "You can achieve anything!",
    "Believe in yourself!",
  ];

  const startAnimation = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    let i = -1;
    setCompliment(""); // Clear the compliment before starting the new one

    const interval = setInterval(() => {
      setCompliment((prev) => prev + randomCompliment.charAt(i));
      i++;
      if (i === randomCompliment.length) {
        clearInterval(interval);
        setTimeout(() => setAnimating(false), 1000); // Start hiding after 1 second
      }
    }, 100);
  };

  useEffect(() => {
    startAnimation(); // Start the animation when the component mounts
  }, []);

  useEffect(() => {
    if (!animating && compliment.length > 0) {
      const interval = setInterval(() => {
        setCompliment((prev) => prev.slice(0, -1));
        if (compliment.length === 1) {
          clearInterval(interval);
          setTimeout(() => {
            setAnimating(true); // Reset the animating flag for the next compliment
            startAnimation(); // Start the animation again
          }, 1000);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [animating, compliment]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Question:", question);
    // Add further actions like saving the question or redirecting the user
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Hello, {username}! {compliment}
        </h1>
        <p className="text-xl mb-8">
          Please let us know! What do you want to learn?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <Link to="/quiz">
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