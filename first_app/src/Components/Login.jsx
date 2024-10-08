// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { BACKEND_URL } from "../Config";


// const Login = () => {
 
//  const { register, handleSubmit } = useForm();
//  const navigate = useNavigate();


//  const onSubmit = async (data) => {
// //   console.log(data);
// //   console.log(data.email);
// //   console.log(data.password);
//   let res = await axios.post(`${BACKEND_URL}/login`, {
//    email: data.email,
//    password: data.password,

//   });

//   localStorage.setItem("token", res.data.token);
//   localStorage.setItem("userId", res.data.userId);



//   if(res){
//    navigate('/dashboard');
//   }
//   console.log(res.data.msg);
//  };

//  return (
//   <>
//   <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
//    <form
//     onSubmit={handleSubmit(onSubmit)}
//     className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
//    >
//     <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
//     <div className="mb-4">
//      <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
//      <input
//       {...register("email")}
//       type="email"
//       placeholder="Email"
//       className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//      />
//     </div>
//     <div className="mb-4">
//      <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
//      <input
//       {...register("password")}
//       type="password"
//       placeholder="Password"
//       className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
//      />
//     </div>
//     <div className="text-center">
//      <Link to = "/signup">
//      <p className="text-gray-400 pb-2">Don't have an account?SignUp</p>
//      </Link>
//      <button
//       type="submit"
//       className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
//      >
//       Login
//      </button>
//     </div>
//    </form>
//   </div>
//   </>
//  );
// };

// export default Login;

import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../Config";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let res = await axios.post(`${BACKEND_URL}/login`, {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data.userId);

    if (res) {
      navigate("/dashboard");
    }
    console.log(res.data.msg);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm transform transition-transform duration-500 hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white animate-pulse">
          Login
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-400 mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 transition-colors duration-300 hover:bg-gray-600"
          />
        </div>
        <div className="text-center">
          <Link to="/signup">
            <p className="text-gray-400 pb-2 hover:text-blue-400 transition-colors duration-300">
              Don't have an account? SignUp
            </p>
          </Link>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;






