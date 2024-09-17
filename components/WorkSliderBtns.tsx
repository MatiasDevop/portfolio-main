"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: any) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles}>{/* <PiCaretRightBold /> */}</button>
    </div>
  );
};

export default WorkSliderBtns;
