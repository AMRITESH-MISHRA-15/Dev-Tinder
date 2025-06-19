import React from "react";

const HeroSection = () => {
  const heroHeading = "Swipe to match,Merge your ideas,Commit together".split(
    ","
  );
  const heroTextParaContent =
    "Looking for the one... who can debug with you at 2 AM? Match with fellow coders, merge your passions, and commit to the ultimate collab.";
  return (
    <div className="w-[100%] h-[100dvh] pt-[var(--navbar-height)] flex flex-col flex-nowrap justify-center gap-[.5rem] relative items-center">
      <div className="[height:clamp(18rem,40dvw,50rem)] aspect-square bg-[var(--bg-color-1)] absolute top-[50%] left-[50%] border-[50%] transform translate-x-[-50%] translate-y-[-50%] z-0 blur-[clamp(4rem,8dvw,8rem)]"></div>
      <div className="hero-text">
        {heroHeading.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <p className="hero-para-text z-1 text-center font-Edu_NSW [word-spacing:.05rem] para-font-3 text-[var(--support-color-1)]">
        {heroTextParaContent}
      </p>
      <div className="z-1 mt-[1rem] flex flex-col lg:flex-row flex-nowrap gap-[.75rem] lg:gap-[1rem]">
        <button className="py-[var(--global-utility-vpadding)] px-[2.5rem] border-none rounded-[100px] bg-[var(--secondary-color)]">
          <span className="font-[500] text-[var(--support-color-2)] font-DM_Sans [font-size:var(--button-font-size-2)]">
            Start Matching
          </span>
        </button>
        <button className="py-[var(--global-utility-vpadding)] px-[2.5rem] rounded-[100px] bg-transparent border-2 border-[var(--secondary-color)]">
          <span className="font-[500] text-[var(--secondary-color)] font-DM_Sans [font-size:var(--button-font-size-2)]">
            About Us
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
