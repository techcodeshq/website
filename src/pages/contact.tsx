import { ContactView } from "@views";
import React from "react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet title="Contact us" />

      <ContactView />
    </>
  );
};

export default ContactPage;
