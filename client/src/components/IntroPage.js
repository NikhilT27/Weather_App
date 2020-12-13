import React from "react";

export default function IntroPage() {
  return (
    <div className="IntroPage">
      <div className="IntroPage-image">
        <img
          src="https://image.freepik.com/free-vector/fall-is-coming-concept-illustration_114360-1206.jpg"
          alt="Girl in a jacket"
          width="450px"
          height="auto"
        />
      </div>
      <div className="IntroPage-selectCity">
        <div className="IntroPage-selected">Selected</div>
        <div className="IntroPage-scroll">
          <div>Sroll</div>
        </div>
      </div>
    </div>
  );
}
