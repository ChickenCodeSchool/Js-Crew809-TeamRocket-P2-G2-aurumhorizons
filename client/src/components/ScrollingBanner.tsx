import type { FC } from "react";
import "./ScrollingBanner.css";

interface ScrollingBannerProps {
  text: string;
}

const ScrollingBanner: FC<ScrollingBannerProps> = ({ text }) => {
  return (
    <div className="scrolling-banner-container">
      <div className="scrolling-banner-content">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
