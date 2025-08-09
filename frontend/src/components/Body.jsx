import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@utils/userSlice"; // Add this import

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      // Fix: Use err.response.status instead of err.status
      if (err.status === 400 || err.status === 401) {
        navigate("/login");
      }
      console.error("Fetch user error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
