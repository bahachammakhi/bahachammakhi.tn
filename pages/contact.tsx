import React from "react";
import dynamic from "next/dynamic";
// import ContactForm from "../container/ContactForm/ContactForm";
import Preloader from "../components/ui/Preloader/Preloader";

const ContactForm = dynamic(
  () => import("../container/ContactForm/ContactForm"),
  { ssr: false, loading: () => <Preloader /> }
);
import { NextSeo } from "next-seo";

const ContactConatainer = () => {
  return (
    <>
      <NextSeo
        title="Baha chammakhi-Fullstack JS- Contact"
        description="I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !"
      />
      <div className={"wrapper-contact-page"}>
        <div>
          <img
            className="img1-contact-page"
            alt="contantImage"
            src={"/static/contact.jpg"}
          />
        </div>
        <div>
          <ContactForm />
        </div>
        <style jsx>
          {`
            .wrapper-contact-page {
              display: flex;
              padding: 30px;
            }
            .img1-contact-page {
              width: 800px;
            }
            @media screen and (max-width: 780px) {
              .wrapper-contact-page {
                flex-direction: column-reverse;
                padding: 25px;
              }
              .img1-contact-page {
                width: 400px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};
export default ContactConatainer;
