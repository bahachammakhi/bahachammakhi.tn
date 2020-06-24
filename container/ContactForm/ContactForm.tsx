import { Input, Button, notification } from "antd";
import React, { useEffect, useContext } from "react";
import ButtonMine from "../../components/ui/Button/Button";
// import form from "./../hoc/form";
// import withApis from "../hoc/withApi";
// import { CreateNewContact } from "./../requests/requests";
import useForm from "../../hooks/useForm";
import axios, { AxiosResponse } from "axios";
import { Redux } from "../../pages/_app";
const { TextArea } = Input;

const ContactForm = () => {
  const state = useContext(Redux);
  const { postContact } = state.calls;
  const initialValues = {
    email: "",
    fullname: "",
    message: "",
  };
  const handleClick = () => {
    if (form.email !== "" && form.fullname !== "" && form.message !== "") {
      postContact.call(form);
      // clearValues();
    } else {
      notification.error({
        message: "Validation",
        description: `Inputs are required !  `,
      });
    }
  };
  const { handleChange, handleReset, form } = useForm<typeof initialValues>({
    initialValues,
  });

  useEffect(
    () => {
      if (postContact?.success) {
        notification.success({
          message: `Message sended successfully on ${postContact?.data?.createdAt} !`,
          description: `Thanks ${postContact?.data?.fullname} for your message I will contact you sooner i read it`,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [postContact?.success]
  );
  return (
    <div>
      <div className="input-contact-form ">
        <Input
          onChange={handleChange}
          name="fullname"
          placeholder="Full name"
          allowClear={true}
          value={form.fullname}
        />
      </div>
      <div className="input-contact-form ">
        <Input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          allowClear={true}
          value={form.email}
        />
      </div>
      <div>
        <TextArea
          onChange={handleChange}
          name="message"
          placeholder="Your message"
          rows={4}
          value={form.message}
        />
      </div>
      <div
        onClick={() => {
          handleClick();
        }}
        className="button-contact-form"
      >
        <ButtonMine
          content="Send"
          width="120px"
          height="50px"
          path={"baha"}
          executed={true}
        />
      </div>
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
export default ContactForm;
