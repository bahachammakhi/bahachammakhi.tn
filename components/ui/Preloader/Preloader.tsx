import React from "react";

const Preloader = () => {
  return (
    <div>
      {/* <img src="/static/nobglogo.png" alt="Logo" /> */}
      <div id="preload">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
      <style jsx global>{`
        body {
          overflow-x: hidden;
          @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
          background: rgb(227, 228, 228);
          background: linear-gradient(
            90deg,
            rgba(227, 228, 228, 0.6895133053221288) 0%,
            rgba(255, 255, 255, 1) 98%
          );
          font-family: "Montserrat", sans-serif;
        }
        div#preload {
          margin: auto;
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: 9999999;
          display: flex;
          align-content: center;
          justify-content: center;
        }

        .sk-folding-cube {
          top: 50%;
          left: 50%;
          margin-left: -25px;
          margin-top: -25px;
          width: 50px;
          height: 50px;
          position: absolute;
          -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
        }

        .sk-folding-cube .sk-cube {
          float: left;
          width: 50%;
          height: 50%;
          position: relative;
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
          transform: scale(1.1);
        }

        .sk-folding-cube .sk-cube2 {
          -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
        }

        .sk-folding-cube .sk-cube4 {
          -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
        }

        .sk-folding-cube .sk-cube3 {
          -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
        }

        .sk-folding-cube .sk-cube:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
          -webkit-transform-origin: 100% 100%;
          -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
          background: #2a878f;
        }

        .sk-folding-cube .sk-cube2:before {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }

        .sk-folding-cube .sk-cube4:before {
          -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
        }

        .sk-folding-cube .sk-cube3:before {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }

        @keyframes sk-foldCubeAngle {
          0%,
          10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -webkit-transform: perspective(140px) rotateX(0);
            transform: perspective(140px) rotateX(0);
            opacity: 1;
          }
          100%,
          90% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
