"use client";
import React, { useState } from "react";
import { useRegisterMutation } from "@/app/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const router = useRouter();
  const [users, setUsers] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register] = useRegisterMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { name, contact, email, password, confirmPassword } = users;
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      await register({ name, contact, email, password, confirmPassword }).unwrap();
      toast.success("Registration successful");
      router.push("/Auth/login");
    } catch (error) {
      toast.error("Registration failed");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 border-[#502A43] p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-[#502A43] mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={users.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#502A43]"
          />
         
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={users.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#502A43]"
          />
           <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={users.contact}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#502A43]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={users.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#502A43]"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={users.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#502A43]"
          />
          <button
            type="submit"
            className="w-full bg-[#502A43] text-white py-3 rounded-lg font-bold hover:bg-[#8f4d79] transition-all"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/Auth/login" className="text-[#502A43] font-bold">Login</a>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Register;
