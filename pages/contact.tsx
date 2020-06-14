import React from "react";
import ContactForm from "../container/ContactForm/ContactForm";
import contactImg from "../static/contact.jpg";
import Layout from "../components/layout/PortfolioLayout/Layout";
const ContactConatainer = () => {
  return (
    <Layout>
      <div className={"wrapper-contact-page"}>
        <div>
          <img className="img1-contact-page" src={contactImg} />
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
    </Layout>
  );
};
export default ContactConatainer;
