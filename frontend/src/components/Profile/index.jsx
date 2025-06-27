import React from "react";
import useAuth from "../../hooks/useAuth";

const ProfilePage = () => {
  const { LogoutHandler } = useAuth();


  return (
    <div className=" h-[100%] pt-[calc(var(--navbar-height)+.75rem)] pb-[.75rem]">
      <main className="profile-container realtive">
        <aside className="profile-sidebar hidden lg:flex flex-col justify-between para-font-3 p-[1.75rem_1.25rem] h-[39rem]">
          <ul className=" font-[500] flex flex-col gap-[1.5rem]">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-pink-500">
              <img
                src="/icons/profile.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Profile</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/icons/add_img.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Add Pics</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/icons/message.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Messages</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/icons/projects.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Projects</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-[1.5rem] font-[500]">
            <hr />
            <li className="flex items-center space-x-2 cursor-pointer">
              <img
                src="/icons/editProfile.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Edit Profile</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-pink-500 cursor-pointer" onClick={LogoutHandler}>
              <img
                src="/icons/logout.svg"
                className="aspect-square h-[1.75rem]"
              />
              <span className="para-font-1">Logout</span>
            </li>
          </ul>
        </aside>
        <div className="profile-main w-[100%] flex flex-col gap-[.75rem]">
          <div className="bio shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] flex md:flex-row flex-col bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] overflow-hidden className='para-font-1'">
            <div className="profile-img h-[clamp(10rem,120dvw,25rem)] md:h-[14rem] aspect-square">
              <img
                src="https://preview.redd.it/qb5mm556vei71.jpg?auto=webp&s=29bee2062481c32630dacc1f6c74b9f3a764e03a"
                alt="img"
                className="inline-block h-[100%] w-[100%] object-cover object-center"
              />
            </div>
            <div className="profile-info  flex flex-col flex-1 p-[1rem_1.25rem] gap-[.75rem]">
              <div>
                <div className="profile-name font-[600] [font-size:var(--subheading-size-2)]">
                  Vishal Minj, 22
                </div>
                <div className="profile-location para-font-2 text-zinc-500">
                  MDGR
                </div>
              </div>
              <div className="profile-discription para-font-1 max-h-[4.25rem] overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Optio voluptate iusto tempore fugiat magni facilis placeat
                molestiae odio voluptatum, perferendis, in recusandae,
                laboriosam minima! Excepturi laboriosam nobis ullam
                necessitatibus rem?
              </div>
              <div className="profile-bad flex flex-wrap gap-[.75rem] flex-1 items-start">
                <span className="badge bg-pink-200 p-[.25rem_.5rem] text-pink-900 rounded font-[500]">
                  Frontend
                </span>
                <span className="badge bg-pink-200 p-[.25rem_.5rem] text-pink-900 rounded font-[500]">
                  React
                </span>
              </div>
            </div>
          </div>

          <div className="photos shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600] mb-[.5rem]">Photos</h2>
            <div className="photos-container h-[75dvw] md:h-auto flex-wrap md:flex-nowrap flex gap-[1.25rem] overflow-hidden ">
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture flex-1 md:flex-auto h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>

          <div className="shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600] mb-[1rem]">About me</h2>
            <div className="data-container  columns-1 lg:columns-2">
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Live in:</span>
                &nbsp;&nbsp;&nbsp;
                <span>Ohayo</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Hometown:</span>
                &nbsp;&nbsp;&nbsp;
                <span>Ohayo</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Work as:</span>
                &nbsp;&nbsp;&nbsp;
                <span>Gooner</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Education:</span>
                &nbsp;&nbsp;&nbsp;
                <span>ITUS</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Languages:</span>
                &nbsp;&nbsp;&nbsp;
                <span>C++</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Relationship:</span>
                &nbsp;&nbsp;&nbsp;
                <span>NoPe</span>
              </div>
              <div className="mb-[.5rem]">
                <span className="text-zinc-500">Family plans:</span>
                &nbsp;&nbsp;&nbsp;
                <span>...</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[39rem] hidden lg:block">
          <div className="notice bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] relative h-[20rem] pt-[3rem]">
            <div className="absolute top-[1rem] left-[50%] translate-x-[-50%] rounded-3xl flex overflow-hidden shadow-[0px_5px_10px_0px_rgba(0,0,0,0.075)]">
              <button className=" border-gray-300 p-[.125rem_1rem] border-[0px_1px_0px_0px]">
                Notifications
              </button>
              <button className="border-gray-300 p-[.125rem_1rem] border-[0px_0px_0px_1px]">
                Requests
              </button>
            </div>
            <div className="notification-box flex justify-center items-center w-[100%] h-[100%] text-zinc-500">
              No Notifications
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
