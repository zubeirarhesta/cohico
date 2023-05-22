import ContactForm from "@/components/contact/contact-form";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me!</title>
        <meta name="description" content="send me your messsage" />
      </Head>
      <Flex
        margin={["4rem auto 2rem", "5rem auto 2rem"]}
        minW="22rem"
        direction="column"
        align="center"
      >
        <ContactForm />
      </Flex>
    </Fragment>
  );
}
