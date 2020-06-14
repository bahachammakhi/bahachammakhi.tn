import React from "react";
import Button from "../../ui/Button/Button";

const imgs = [
  "https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png",
];
const icons = imgs.map((img) => {
  let width = "50px";
  let heigth = "50px";
  // if (window.innerWidth < 768) {
  //   width = "50px";
  //   heigth = "50px";
  // }
  return (
    <div className="img">
      <img
        onClick={() => {
          window.open("https://github.com/bahachammakhi");
        }}
        src={img}
        alt="pic"
        style={{
          width: "50px",
          height: "50px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
});
const Footer = () => {
  return (
    <div className="wrapper">
      <hr />
      <div className="row1">
        <div className="colmun">
          <p className="title">Lets build something together!</p>
          <div className="row">
            <Button
              content="CONTACT ME"
              width="170px"
              height="50px"
              path="contact"
              executed={false}
            />
            {icons}
          </div>
        </div>

        <div className="contactsection">
          <p className="title">Contact me on</p>
          <p>Email: bahachammakhi25@gmail.com</p>
          <p>Phone: 55592675</p>
        </div>
      </div>

      <hr />
      <div className="copyrigth">
        <p>bahachammakhi.me © 2019 all rigths reserved</p>
      </div>
      <style jsx>{`
        .wrapper {
          height: 200px;
          background-color: rgb(242, 243, 243);
        }
        .copyrigth {
          padding: 20px;
          text-align: center;
          font-weight: bold;
        }
        .colmun {
          padding: 70px;
        }
        .title {
          font-weight: bolder;
          color: black;
          font-size: 1.5em;
        }
        .img {
          display: flex;
        }
        .row {
          display: flex;
          margin-left: -60px;
        }
        .row1 {
          display: flex;
        }
        .contactsection {
          position: absolute;
          right: 20px;
          padding: 70px;
          font-weight: bold;
        }
        @media only screen and (max-width: 767px) {
          .row {
            display: flex;
            flex-direction: column;
            margin-left: 0;
          }
          .row1 {
            display: inline;
          }
          .colmun {
            padding: 70px;
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .contactsection {
            position: relative;
            right: 20px;
            padding: 70px;
            font-weight: bold;
          }
          .wrapper {
            background-color: rgb(242, 243, 243);
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
