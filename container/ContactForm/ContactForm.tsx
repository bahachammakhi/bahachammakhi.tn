import { Input, Button, notification } from "antd";
import React, { useEffect } from "react";
import ButtonMine from "../../components/ui/Button/Button";
// import form from "./../hoc/form";
// import withApis from "../hoc/withApi";
// import { CreateNewContact } from "./../requests/requests";
import axios, { AxiosResponse } from "axios";
const { TextArea } = Input;

const ContactForm = ({
  values,
  handleChange,
  CreateNewContact,
  clearValues,
}: any) => {
  // console.log(CreateNewContact);
  const handleClick = () => {
    if (
      values.email !== "" &&
      values.fullname !== "" &&
      values.message !== ""
    ) {
      // CreateNewContact.call(values);
      clearValues();
    } else {
      notification.error({
        message: "Validation",
        description: `Inputs are required !  `,
      });
    }
  };
  // useEffect(
  //   () => {
  //     if (CreateNewContact.data.status === "success") {
  //       let name = "";

  //       if (
  //         CreateNewContact &&
  //         CreateNewContact.data &&
  //         CreateNewContact.contact &&
  //         CreateNewContact.contact.fullname
  //       ) {
  //         name = CreateNewContact.data.contact.fullname;
  //       }
  //       notification.success({
  //         message: `Message sended successfully on ${CreateNewContact.data.time} !`,
  //         description: `Thanks ${name} for your message I will contact you sooner i read it`,
  //       });
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [CreateNewContact.data.status === "success"]
  // );
  return (
    <div>
      <div className="input-contact-form ">
        <Input
          onChange={handleChange}
          name="fullname"
          placeholder="Full name"
          allowClear={true}
          // value={values.fullname}
        />
      </div>
      <div className="input-contact-form ">
        <Input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          allowClear={true}
          // value={values.email}
        />
      </div>
      <div>
        <TextArea
          onChange={handleChange}
          name="message"
          placeholder="Your message"
          rows={4}
          // value={values.message}
        />
      </div>
      {/* <div
        onClick={() => {
          handleClick();
        }}
        className="button-contact-form"
      > */}
      <ButtonMine
        content="Send"
        width="120px"
        height="50px"
        path={"baha"}
        executed={true}
      />
      {/* </div> */}
      <style jsx>
        {`
          .input-contact-form {
            margin-bottom: 7%;
            width: 450px;
          }
          .button-contact-form {
            margin-top: 10%;
            margin-left: 35%;
          }
          @media screen and (max-width: 780px) {
            .input-contact-form {
              margin-bottom: 7%;
              width: 300px;
            }
            .button-contact-form {
              margin-top: 10%;
              margin-left: 35%;
            }
          }
        `}
      </style>
    </div>
  );
};

// export default withApis({ CreateNewContact })(
//   form(ContactForm, { initialValues: { email: "", name: "", message: "" } })
// );
export default ContactForm;
