import {
  Divider,
  Flex,
  Heading,
  Highlight,
  Text,
  useToast,
} from "@chakra-ui/react";
import FooterLinksContainer from "./footer-links-container";
import FooterLinkItems from "./footer-link-items";
import FooterLink from "./footer-link";
import FooterLinksWrapper from "./footer-links-wrapper";
import SocialMediaContainer from "./social-media-container";
import SocialMediaWrapper from "./social-media-wrapper";
import SocialLogo from "./social-logo";
import SocialIcons from "./social-icons";
import SocialIcon from "./social-icon";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import mongoIcon from "../../../public/mongodb.ico";
import nextIcon from "../../../public/next-js.svg";
import chakraIcon from "../../../public/chakraui-custom.svg";
import { useState } from "react";
import StackIcon from "./stack-icon";
import StackIcons from "./stack-icons";

export default function Footer() {
  /* const toast = useToast();
  const [enteredEmail, setEnteredEmail] = useState(""); */
  const nunito = `'Nunito', sans-serif`;
  const icons = [
    {
      name: faFacebook,
      link: "facebook",
      detail: "zmarhesta",
      color: "#4267B2",
    },
    {
      name: faInstagram,
      link: "instagram",
      detail: "zmarhesta?igshid=MzNlNGNkZWQ4Mg==",
      color: "white",
    },
    {
      name: faYoutube,
      link: "youtube",
      detail: "channel/UCGOW4u2-TAfe95pWUGDnb7A",
      color: "#FF0000",
    },
    {
      name: faLinkedin,
      link: "linkedin",
      detail: "in/zubeir-muhammad-arhesta-41b5b210b/",
      color: "#0072b1",
    },
  ];

  const stackIcons = [
    /* {
      name: faHtml5,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color: "#e34f26",
    },
    {
      name: faCss3,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      color: "#1680C0",
    }, */
    {
      name: faJs,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      color: /* "#FFD600" */ "#ddb800",
    },
    {
      name: faReact,
      link: "https://react.dev",
      color: "#61dbfb",
    },
    {
      name: chakraIcon,
      link: "https://chakra-ui.com",
      color: "#61dbfb",
    },
    {
      name: nextIcon,
      link: "https://nextjs.org",
      color: "#61dbfb",
    },
    {
      name: mongoIcon,
      link: "https://www.mongodb.com",
      color: "#61dbfb",
    },
  ];

  return (
    <Flex
      backgroundColor="#242424"
      padding="4rem 0 0 0"
      direction="column"
      justify="center"
      align="center"
      minW="22rem"
      fontFamily={nunito}
    >
      <Flex
        as="section"
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        /* marginBottom="15px" */
        padding={["20px", "24px"]}
        color="#fff"
        maxW={["90%", "90%", "70%"]}
      >
        <Heading
          marginBottom={["20px", "24px"]}
          fontSize={["22px", "30px", "40px"]}
          fontFamily={["inherit"]}
          textAlign={["left", "left", "center"]}
        >
          A Brief Introduction
        </Heading>
        <Text
          /* marginBottom={["18px", "24px"]} */
          textAlign={["left", "left", "center"]}
          fontSize={["18px", "20px"]}
          color="whiteAlpha.700"
        >
          <Highlight
            query={["rayes", "coding", "hiking", "cooking"]}
            styles={{
              color: "white",
              fontWeight: "extrabold",
            }}
          >
            Hi, you can call me rayes, that&apos;s what people usually call me.
            I love (or love watching) all about coding, hiking, and cooking. So
            in this simple blog I made, I would like to share my stories about
            it.
          </Highlight>
        </Text>
      </Flex>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems title="About">
            <FooterLink to="/motivation" content="Motivation" />
            <FooterLink to="/what-is-next" content="What's next?" />
          </FooterLinkItems>
          <FooterLinkItems title="Contact">
            <FooterLink to="/contact" content="Contact us" />
            <FooterLink to="/feedback" content="Feedback" />
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <Flex
        as="section"
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        padding={["20px", "24px"]}
        color="#242424"
        py={["0.5rem", "2rem"]}
        /* maxW={["90%", "90%", "70%"]} */
        w="100%"
        bg="gray.100"
      >
        <Heading
          marginBottom={["15px", "20px", "24px"]}
          fontSize={["22px", "30px", "40px"]}
          fontFamily={["inherit"]}
          textAlign={["left", "left", "center"]}
        >
          Stacks Used
        </Heading>
        <StackIcons>
          {stackIcons.map((icon) => (
            <StackIcon
              key={icon.link}
              to={icon.link}
              icon={icon.name}
              color={icon.color}
            />
          ))}
        </StackIcons>
      </Flex>
      <SocialMediaContainer>
        <SocialMediaWrapper>
          <SocialLogo to="#" />

          <SocialIcons>
            {icons.map((icon) => (
              <SocialIcon
                key={icon.link}
                to={icon.link}
                icon={icon.name}
                detail={icon.detail}
                color={icon.color}
              />
            ))}
          </SocialIcons>
        </SocialMediaWrapper>
        <Divider />
        <Text fontSize="lg" color="#fff" marginY="16px">
          © 2023 zubeir arhesta
        </Text>
      </SocialMediaContainer>
    </Flex>
  );
}

/* <FormControl
          as="form"
          onSubmit={(event) => {
            event.preventDefault();
            setEnteredEmail("");
          }}
        >
          <Input
            as="input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
            outline="none"
            border="none"
            fontSize={["16px", "18px"]}
            marginBottom="16px"
            colorScheme="white"
            focusBorderColor="#b1b1b1"
            _placeholder={{
              color: "#b1b1b1",
              textAlign: "center",
            }}
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "whiteAlpha.500",
              border: "2px solid white",
            }}
            _focus={{
              bg: "whiteAlpha.300",
              border: "1px solid white",
            }}
          />
          <Button
            as="button"
            colorScheme="whiteAlpha"
            type="submit"
            onClick={() => {
              !enteredEmail
                ? null
                : toast({
                    title: "Subscribed!",
                    description:
                      "This is dummy input tho, your email is not sent!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
            }}
          >
            Subscribe
          </Button>
        </FormControl> */
