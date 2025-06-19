import React, { useState } from "react";
import { SubmitType } from "../utils";

const Authform = () => {
  const [currentType, setCurrentType] = useState(SubmitType.LOGIN);

  return (
    <form action="" className="form max-w-[22rem] w-[100%]">
      {/* main form */}
      <div className="flex flex-col flex-nowrap gap-[2.25rem]">
        <h2 className="form-heading text-[var(--support-color-1)] font-[500]">
          {currentType}
        </h2>
        <div className="relative w-[100%]">
          <label className="input-label">Email</label>
          <input required className="input-field" type="email" placeholder="Email" />
        </div>
        <div className="relative w-[100%]">
          <label className="input-label">Password</label>
          <input required className="input-field" type="password" placeholder="Password" />
        </div>
        {currentType === SubmitType.SIGNUP && (
          <div className="relative w-[100%]">
            <label className="input-label">Confirm Password</label>
            <input
              required
              className="input-field"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        )}
      </div>
      <div className="cursor-pointer">
        <button className="button">{currentType}</button>
      </div>

      {/* toggle text */}
      <div className="form-toggle cursor-pointer">
        <p>
          {currentType === SubmitType.LOGIN
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="font-600"
            onClick={() =>
              setCurrentType(
                currentType === SubmitType.LOGIN
                  ? SubmitType.SIGNUP
                  : SubmitType.LOGIN
              )
            }
          >
            {currentType === SubmitType.LOGIN ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
      <div className="flex flex-col flex-nowrap gap-[1rem]">
        {/* seperator */}
        <div className=" w-[100%] flex flex-nowrap items-center gap-[.5rem]">
          <div className="flex-1 h-[.1rem] bg-[#222]"></div>
          <p>or</p>
          <div className="flex-1 h-[.1rem] bg-[#222]"></div>
        </div>

        <div className="cursor-pointer">
          <button className="button social-auth-button">
            Continue with Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Authform;
