import React from "react";
import useAuthStore from "../store/useAuthStore";
import usePasswordUpdate from "../hooks/usePasswordUpdate";

const ProfileEditForm = () => {
  const user = useAuthStore((state) => state.user);
  const { newPasswordHandler,updatePasswordCall, updatePasswordHandler } = usePasswordUpdate();

  return (
    <div className=" w-full flex-1 ">
      <form className="w-full flex flex-col md:flex-row gap-4">
        <div className="img-container self-center md:self-start shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
          <div className="image relative aspect-square h-[12rem] mx-auto rounded-[var(--global-radius-2)] overflow-hidden mb-[.75rem]">
            <img
              className="object-center object-cover w-[100%] h-[100%]"
              src={user?.photoUrl}
              alt=""
            />
            <img
              src="/icons/pencil_white.svg"
              alt="img"
              className="absolute right-2.5 bottom-2.5 border-2 border-amber-50 p-0.5 rounded-full"
            />
          </div>
          <div className="info font-[600] [font-size:var(--subheading-size-2)] text-center">
            <div>
              <span>Vishal Minj</span>&nbsp;
            </div>
          </div>
        </div>
        <div className="bio-container flex-3 flex flex-col gap-[1rem]">
          <div className="Bio shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="mb-2 para-font-4 font-[600] ">Update Password</h2>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Current Password:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="password" className="p-1 border" required onChange={updatePasswordHandler}/>
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">New Password:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="password" className="p-1 border" required onChange={newPasswordHandler} />
            </div>
            <button onClick={updatePasswordCall} className="btn-1 bg-[var(--secondary-color)] text-amber-50 rounded-[var(--global-radius-2)] para-font-3 p-[.25rem_1rem]" type="submit">
              Update Password
            </button>
          </div>
          <div className="Bio shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600] ">Bio</h2>
            <textarea className="profile-discription para-font-1 max-h-[4.25rem] w-full outline-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Optio voluptate iusto tempore fugiat magni facilis placeat
              molestiae odio voluptatum, perferendis, in recusandae, laboriosam
              minima! Excepturi laboriosam nobis ullam necessitatibus rem?
            </textarea>
            <h2 className="para-font-4 font-[600] ">Age</h2>
            <input type="text" value={22} />
          </div>
          <div className="About shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600]">About</h2>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Live in:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"India"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Hometown:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"MDGR"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Work as:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"NOPE"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Education:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"ITUS"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Languages:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"C++"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Relationship:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"SINGLE HE HU"} />
            </div>
            <div className="mb-[.5rem]">
              <span className="text-zinc-500">Family plans:</span>
              &nbsp;&nbsp;&nbsp;
              <input type="text" value={"JOB LAG JYA PAHLE"} />
            </div>
          </div>
          <div className="buttons mt-6 flex gap-[1rem]">
            <button className="btn-2 para-font-3 p-[.25rem_1rem] bg-amber-50 rounded-[var(--global-radius-2)]">
              Cancel
            </button>
            <button className="btn-1 bg-[var(--secondary-color)] text-amber-50 rounded-[var(--global-radius-2)] para-font-3 p-[.25rem_1rem]">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
