import React from "react";

const Feeds = () => {
  return (
    <div className="pt-[var(--navbar-height)] min-h-[100dvh] grid place-items-center">
      <div className="feed-container flex md:flex-row gap-[.75rem] py-[1rem] flex-col h-[100%] w-[100%] items-start">
        <div className="feed-pt-1 shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] p-[1.25rem_1.5rem] gap-[1.5rem] flex-col text-[var(--support-color-2)] flex justify-end w-[100%] md:w-[35dvw] h-[100%] md:h-[clamp(28rem,40dvw,60rem)] [background-image:linear-gradient(rgba(255,255,255,0),rgba(0,0,0,0.7)),url('https://preview.redd.it/qb5mm556vei71.jpg?auto=webp&s=29bee2062481c32630dacc1f6c74b9f3a764e03a')]  bg-[center] bg-[cover] bg-no-repeat rounded-[var(--global-radius-2)]">
          <div className="info flex flex-col">
            <div className="[font-size:var(--subheading-size-3)] font-[500]">
              <span>Vishal Minj,</span>&nbsp;
              <span>22</span>
            </div>
            <div className="para-font-4">
              <span>Ohoyo</span>
            </div>
            <div className="profile-discription para-font-1 max-h-[4.25rem] my-[.75rem] overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quasi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Optio voluptate iusto tempore fugiat magni facilis placeat
              molestiae odio voluptatum, perferendis, in recusandae, laboriosam
              minima! Excepturi laboriosam nobis ullam necessitatibus rem?
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
          <div className="buttons text-[var(--support-color-1)] flex gap-0 justify-between lg:justify-start lg:gap-[2.5rem]">
            <button className="aspect-square rounded-full bg-[var(--support-color-2)] p-[.25rem] h-[clamp(2.5rem,4dvw,6rem)] cursor-pointer">
              <img
                className="object-center object-cover h-[100%] w-[100%]"
                src="/icons/refresh.svg"
                alt=""
              />
            </button>
            <button className="aspect-square rounded-full bg-[var(--support-color-2)] p-[.25rem] h-[clamp(2.5rem,4dvw,6rem)] cursor-pointer">
              <img
                className="object-center object-cover h-[100%] w-[100%]"
                src="/icons/stars.svg"
                alt=""
              />
            </button>
            <button className="aspect-square rounded-full bg-[var(--support-color-2)] p-[.25rem] h-[clamp(2.5rem,4dvw,6rem)] cursor-pointer">
              <img
                className="object-center object-cover h-[100%] w-[100%]"
                src="/icons/favorite.svg"
                alt=""
              />
            </button>
            <button className="aspect-square rounded-full bg-[var(--support-color-2)] p-[.25rem] h-[clamp(2.5rem,4dvw,6rem)] cursor-pointer">
              <img
                className="object-center object-cover h-[100%] w-[100%]"
                src="/icons/close.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="feed-pt-2 flex-1 h-[100%] hidden md:flex flex-col gap-[1rem]">
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
          <div className="photos block md:hidden lg:block  w-[100%] shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600] mb-[.5rem]">Photos</h2>
            <div className="photos-container h-[75dvw] md:h-auto flex-wrap md:flex-nowrap flex gap-[1.25rem] overflow-hidden ">
              <div className="picture h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height">
                <img
                  src="/img/photos.jpg"
                  alt=""
                  className="object-center object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className="picture h-[clamp(6.85rem,34.25dvw,10rem)] md:h-[clamp(4rem,15dvw,8rem)]  lg:h-[clamp(2rem,8.25dvw,8rem)] xl:h-[clamp(4rem,9dvw,13.5rem)] aspect-square photo-height border text-center [align-content:center] rounded border-zinc-400 text-zinc-500">
                More Images
              </div>
            </div>
          </div>
          <div className="shadow-[0px_5px_20px_8px_rgba(0, 0, 0, 0.025)] bg-[var(--support-color-4)] rounded-[var(--global-radius-2)] p-[1rem]">
            <h2 className="para-font-4 font-[600] mb-[.5rem]">Projects</h2>
            <div className="text-zinc-500">No projects available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
