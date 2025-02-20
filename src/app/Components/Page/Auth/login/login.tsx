"use client";
import React,{ useState} from "react";
import {useLoginMutation} from '@/app/redux/features/authApiSlice'
import  { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const [login] = useLoginMutation();

  // Handle changes for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password } = users;
      await login({ email, password }).unwrap();
      console.log("Login successful");
      router.push("/Home");
    } catch (error) {
      console.log(error);
    }
  };
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center bg-[#502A43] bg-clip-text text-transparent mb-6">
          Login Here
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#502A43] rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div className="text-center text-blue-600">
            You don't have an account?{" "}
            <a href="/Auth/register">
              <span className="text-indigo-600 font-semibold">Register </span>
            </a>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
