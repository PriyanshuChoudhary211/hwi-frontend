// import { useForm, SubmitHandler } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKEND_URL } from "../Config";



// const Signup = () => {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     let res = await axios.post(`${BACKEND_URL}/signup`, {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       password: data.password
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     localStorage.setItem('token', res.data.token);
//     localStorage.setItem('userId', res.data.userId);

//     if (res) {
//       navigate('/all-problems');
//     }
//     console.log('user signed up');
//     console.log(res.data.token);
//   }

//   return (
//     <>
//       <div className="flex flex-col min-h-screen bg-gray-900">
//         <div className="flex-grow flex items-center justify-center">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center text-white">Signup</h2>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
//               <input
//                 {...register('name')}
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
//               <input
//                 {...register('email')}
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
//               <input
//                 {...register('phone')}
//                 type="number"
//                 placeholder="Phone Number"
//                 className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
//               <input
//                 {...register('password')}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//               />
//             </div>
//             <div className="text-center">
//               <Link to="/login">
//                 <p className="text-gray-400 pb-2">Already have an account? LogIn</p>
//               </Link>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Config";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let res = await axios.post(`${BACKEND_URL}/signup`, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userId', res.data.userId);

    if (res) {
      navigate('/all-problems');
    }
    console.log('user signed up');
    console.log(res.data.token);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm transform transition-transform duration-500 hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white animate-pulse">
            Signup
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Username
            </label>
            <input
              {...register('name')}
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-400 mb-2">
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="number"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-2">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
            />
          </div>
          <div className="text-center">
            <Link to="/login">
              <p className="text-gray-400 pb-2 hover:text-blue-400 transition-colors duration-300">
                Already have an account? LogIn
              </p>
            </Link>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
