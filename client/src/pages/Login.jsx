import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data?.success) {
        dispatch(loginSuccess(data?.user));
        toast.success(data?.message);
        navigate("/");
      } else {
        dispatch(loginFailure(data?.message));
        toast.error(data?.message);
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error);
    }
  };

  return (
    <div className=" w-full mx-auto h-screen flex justify-center items-center bg-[#FFF1DA]">
      <div className="w-full min-h-screen flex items-center justify-center bg-[#FFF1DA]">
        <div className=" rounded-md w-[90%] bg-white md:w-[60%] mx-auto flex flex-col gap-6">
          {/* Centered Heading */}
          <h1 className="text-center text-lg mt-6 font-medium md:text-3xl md:font-bold text-gray-800">
            Welcome to <span className="text-[#6358DC]">TravaGo</span>
          </h1>

          {/* Form + Image Box */}
          <div className="flex flex-col md:flex-row gap-5  h-auto md:h-[450px] rounded-md items-center justify-center p-4">
            
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-4">
            
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="mt-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Your Password"
                />
              </div>
              <button className="w-full bg-[#EB662B] text-white p-3 mt-4 rounded-md">
                {loading ? "Loading..." : "Login"}
              </button>
              <p className="my-4 text-center">
                Don't have an account?{" "}
                <span className="text-[#EB662B]">
                  <Link to="/signup">Signup</Link>
                </span>
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
