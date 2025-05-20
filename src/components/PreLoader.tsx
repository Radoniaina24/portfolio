import React from "react";

const PreLoader = () => {
  return (
    <div className="aeli fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      {/* <!-- From Uiverse.io modified to show 'AELI' --> */}
      <div className="loader">
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient
              id="b"
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
            >
              <stop stopColor="#973BED" />
              <stop stopColor="#007CFF" offset="1" />
            </linearGradient>
            <linearGradient
              id="c"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0"
              y1="64"
              x1="0"
            >
              <stop stopColor="#FFC800" />
              <stop stopColor="#F0F" offset="1" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
                dur="8s"
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
              />
            </linearGradient>
            <linearGradient
              id="d"
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
            >
              <stop stopColor="#00E0ED" />
              <stop stopColor="#00DA72" offset="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* <!-- A --> */}
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className="inline-block"
        >
          <path
            className="dash"
            pathLength="360"
            stroke="url(#b)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 32 4 L 12 60 H 20 L 25 46 H 39 L 44 60 H 52 L 32 4 Z M 28 38 L 36 38"
          />
        </svg>

        <div className="w-2"></div>

        {/* <!-- E --> */}
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className="inline-block"
        >
          <path
            className="dash"
            pathLength="360"
            stroke="url(#c)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50 4 H 14 V 60 H 50 M 14 32 H 44"
          />
        </svg>

        <div className="w-2"></div>

        {/* <!-- L --> */}
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className="inline-block"
        >
          <path
            className="dash"
            pathLength="360"
            stroke="url(#d)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 18 4 V 60 H 50"
          />
        </svg>

        <div className="w-2"></div>

        {/* <!-- I --> */}
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className="inline-block"
        >
          <path
            className="dash"
            pathLength="360"
            stroke="url(#b)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 32 4 V 60"
          />
        </svg>
      </div>
    </div>
  );
};
export default PreLoader;
