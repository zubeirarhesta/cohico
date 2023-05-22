import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { Fragment, useEffect, useState } from "react";
import AlertComponent from "./alert-component";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const nunito = `'Nunito', sans-serif`;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();
  const [isSpining, setIsSpining] = useState();
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  const inputStyle = {
    font: "inherit",
    padding: "0.25rem",
    borderRadius: "4px",
    width: "100%",
    border: "1px solid gray.400",
    backgroundColor: "gray.50",
    resize: "none",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    margin: "0.5rem 0 0.25rem 0",
  };

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setIsSpining(true);
    setRequestStatus("info");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
      setIsSpining(false);
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
      setIsSpining(false);
    }
  }

  let notification;

  if (requestStatus === "info") {
    notification = {
      status: "info",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <Fragment>
      <Box
        as="section"
        margin={["1rem auto", "2rem auto"]}
        borderRadius="6px"
        backgroundColor="gray.100"
        width="90%"
        maxWidth="50rem"
        padding="1rem"
        boxShadow="0 1px 4px rgba(0, 0, 0, 0.2)"
        fontSize={["1rem", "1.2rem"]}
      >
        <Heading
          fontSize={["2rem", "2.5rem", "3rem"]}
          margin="1rem 0"
          textAlign={["left", "center"]}
          fontFamily={nunito}
        >
          Ask me?
        </Heading>
        <FormControl
          as="form"
          fontFamily={nunito}
          onSubmit={sendMessageHandler}
        >
          <Box display="flex" columnGap="1rem" flexWrap="wrap">
            <Box flex="1" minWidth="10rem">
              <FormLabel htmlFor="email" sx={labelStyle}>
                Your Email
              </FormLabel>
              <Input
                as="input"
                type="email"
                id="email"
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box flex="1" minWidth="10rem">
              <FormLabel htmlFor="name" sx={labelStyle}>
                Your Name
              </FormLabel>
              <Input
                as="input"
                type="text"
                id="name"
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
                sx={inputStyle}
              />
            </Box>
          </Box>
          <Box flex="1" minWidth="10rem">
            <FormLabel htmlFor="message" sx={labelStyle}>
              Your Message
            </FormLabel>
            <Textarea
              id="message"
              rows="5"
              required
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
              sx={inputStyle}
            ></Textarea>
          </Box>
          <Box marginTop="1rem" textAlign="right" onClick={onOpen}>
            <Button as="button" type="submit">
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
      {notification && isVisible ? (
        <AlertComponent
          status={notification.status}
          title={notification.title}
          message={notification.message}
          isSpining={isSpining}
          onClose={onClose}
        />
      ) : null}
    </Fragment>
  );
}
