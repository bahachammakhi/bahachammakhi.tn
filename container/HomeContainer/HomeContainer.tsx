import React, { useState, useEffect } from "react";
import ContactHome from "../../components/ui/ContactHome/ContactHome";
import Technologies from "../../components/ui/Technologies/Technologies";
import Services from "../Services";
import DevProccess from "../DevProccess/DevProccess";
import CardProject from "../../components/ui/CardProject/CardProject";
import Typing from "react-typing-animation";
import ContactSection from "../ContactSection";
import { Art, Art2, GroupArt, Wrapper, MobileUxPic } from "./styles";
import { InterButtonOnHover } from "../../components/ui/Inter2Button/Inter2Button";
import { useDidMount } from "../../hooks/useLifeCycle";
import ArticlesGrid from "../../components/ui/ArticlesGrid/ArticlesGrid";
interface Props {
  redux: any;
}

const HomeContainer: React.FC<any> = ({ redux }: Props) => {
  const [bo, changebo] = useState(false);
  const [state, setState] = useState("Lets build your next ");
  const [state1, setState1] = useState("big idea");
  const [projects, setProjects] = useState([]);
  const [articles, setArticles] = useState([]);
  let width = "180px";

  useDidMount(() => {
    redux.calls.getProjects.call();
    redux.calls.getArticles.call();
  });
  useEffect(() => {
    if (redux?.calls?.getProjects?.success) {
      setProjects(redux.calls.getProjects.data);
    }
    if (redux?.calls?.getProjects?.success) {
      setArticles(redux?.calls?.getArticles?.data);
    }
  }, [redux.calls.getProjects.success, redux.calls.getArticles.success]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      width = "300px";
    }
    if (window.innerWidth > 768) {
      width = "500px";
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setState("Baha");
      setState1("Chammakhi");
      window.onresize = () => changebo(!bo);
    }
  }, [bo]);

  return (
    <Wrapper>
      {
        // theback to top logo Go finish later
        /* <Logo /> */
      }
      <div className={`container`}>
        <div className="title">
          <p className="title1">{state}</p>
          <p className="title2">
            <span className="span">{state1}</span>
          </p>
        </div>

        <div className="description">
          <Typing loop speed={200}>
            <span className="title" style={{ color: "black" }}>
              Fullstack Developer
            </span>
            <Typing.Backspace count={20} />
          </Typing>
          <p>I help Customers beautifully build their Solutions. </p>
        </div>
      </div>
      <MobileUxPic
        src="/static/mobile_ux.svg"
        alt="mobile_ux"
        width="200px"
        zindex={1}
      />
      <div className={` animated shake Technologies`}>
        <Technologies />
      </div>
      <div className="buttons">
        <InterButtonOnHover link="#projects">Portfolio</InterButtonOnHover>
        <InterButtonOnHover link="#contact">Contact me</InterButtonOnHover>
      </div>
      <Art
        src="/static/lol.png"
        alt="art"
        width="500px"
        top="5vw"
        position="absolute"
        right="5vw"
        zindex={1}
      />
      <GroupArt>
        <Art2
          src="/static/Groupe5.png"
          animation={true}
          alt="art"
          width="500px"
          top="5vw"
          position="absolute"
          right="-5vw"
          zindex={0}
        />
      </GroupArt>

      <div className="services" style={{ display: "flex" }}>
        <Services />
      </div>
      <div className="process" style={{ paddingTop: "20px" }}>
        <DevProccess />
      </div>
      <h1>Projects:</h1>
      <div id="projects" style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.length > 0 ? (
          projects.map((el, index) => (
            <div key={index} data-aos="fade-left">
              <CardProject data={el} />
            </div>
          ))
        ) : (
          <>Loading</>
        )}
      </div>
      <div>
        <h1>Articles:</h1>
        <ArticlesGrid data={articles} />
      </div>
      <div id="contact" style={{ overflow: "hidden" }}>
        <ContactSection />
      </div>
      <style jsx>
        {`
          .groupart {
            position: absolute;
            right: -200px;
            top: -102px;
            clip: rect(200px, 5000px, 5000px, 0px);
          }
          .title {
            font-weight: bolder;
            font-size: 40px;
            color: #2a878f;
            display: flex;
            overflow: hidden;
            white-space: nowrap;
          }
          .title1 {
            animation: showup 7s infinite;
          }
          .span {
            margin-left: -355px;
            animation: slidein 7s infinite;
          }
          .title2 {
            width: 0px;
            padding-left: 10px;
            animation: reveal 7s infinite;
          }
          .description {
            font-size: 15px;
            margin-top: -27px;
          }
          .container {
            display: flex;
            flex-direction: column;
          }
          .contact {
            margin-top: 2%;
          }
          .Technologies {
            margin-top: 2%;
          }
          .process {
            margin: 50px;
          }
          @media screen and (max-width: 780px) {
            .process {
              margin: 0px;
            }
          }
          .buttons {
            display: inline-flex;
            flex-wrap: wrap;
            padding-top: 20px;
          }
          @keyframes showup {
            0% {
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes slidein {
            0% {
              margin-left: -800px;
            }
            20% {
              margin-left: -800px;
            }
            35% {
              margin-left: 0px;
            }
            100% {
              margin-left: 0px;
            }
          }

          @keyframes reveal {
            0% {
              opacity: 0;
              width: 0px;
            }
            20% {
              opacity: 1;
              width: 0px;
            }
            30% {
              width: 355px;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              width: 355px;
            }
          }

          @media only screen and (max-width: 767px) {
            .title {
              font-weight: bolder;
              font-size: 30px;
              color: #2a878f;
            }
            .title1 {
              font-size: 27px;
            }
            .title2 {
              font-size: 27px;
            }
            .description {
              width: 300px;
              margin-top: -5%;
              font-size: 15px;
            }
            .Technologies {
              margin-top: 1%;
            }
            .container {
              display: flex;
              flex-direction: column;
              padding-top: 10px;
            }
            .art {
              position: relative;
              right: 0px;
              top: -80px;
              overflow: hidden;
            }
            .groupart {
              display: none;
              overflow: hidden;
            }
          }
        `}
      </style>
    </Wrapper>
  );
};
// export default withApi({ getAllPortfolios })(HomeContainer);
export default HomeContainer;
