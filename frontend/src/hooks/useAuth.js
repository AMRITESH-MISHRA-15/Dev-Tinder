import React from "react";
import { useState } from "react";
import { SubmitType } from "../utils";
import LoginAPI from "../api/LoginAPI";
import SignUpAPI from "../api/SignUpAPI";
import LogoutAPI from "../api/LogoutAPI";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [currentType, setCurrentType] = useState(SubmitType.LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    let data = null;
    if (currentType === SubmitType.SIGNUP) {
      data = await SignUpAPI(firstName, email, password);
      if (data.status === 200) {
        setCurrentType(SubmitType.LOGIN);
      }
    } else {
      data = await LoginAPI(email, password);
      if (data.status === 200) {
        navigate("/");
      }
    }
    console.log(data);
  };

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const FirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const LogoutHandler = async () => {
    await LogoutAPI();
    navigate("/auth");
  };

  return {
    currentType,
    setCurrentType,
    EmailHandler,
    PasswordHandler,
    SubmitHandler,
    FirstNameHandler,
    LogoutHandler,
  };
};

export default useAuth;
