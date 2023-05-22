import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
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
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Footer() {
  const toast = useToast();
  const [enteredEmail, setEnteredEmail] = useState("");
  const nunito = `'Nunito', sans-serif`;
  const icons = [
    { name: faTwitter, link: "twitter" },
    { name: faFacebook, link: "facebook" },
    { name: faInstagram, link: "instagram" },
    { name: faYoutube, link: "youtube" },
    { name: faLinkedin, link: "linkedin" },
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
        marginBottom="15px"
        padding={["20px", "24px"]}
        color="#fff"
      >
        <Heading
          marginBottom={["20px", "24px"]}
          fontSize={["22px", "24px"]}
          fontFamily={["inherit"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <Text marginBottom={["18px", "24px"]} fontSize={["18px", "20px"]}>
          You can unsubscribe at anytime.
        </Text>
        <FormControl
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
        </FormControl>
      </Flex>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems title="About">
            <FooterLink to="#" content="Motivation" />
            <FooterLink to="#" content="What's next?" />
          </FooterLinkItems>
          <FooterLinkItems title="Contact">
            <FooterLink to="/contact" content="Contact us" />
            <FooterLink to="#" content="Feedback" />
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems title="Service">
            <FooterLink to="#" content="Mountain Travel" />
            <FooterLink to="#" content="Daput Abaty" />
          </FooterLinkItems>
          <FooterLinkItems title="Donation">
            <FooterLink to="#" content="Yayasan Anti Tar" />
            <FooterLink to="#" content="Bless Ma" />
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMediaContainer>
        <SocialMediaWrapper>
          <SocialLogo to="#" />
          <Text as="small" color="#fff" marginBottom="16px">
            cohico © 2023
          </Text>
          <SocialIcons>
            {icons.map((icon) => (
              <SocialIcon key={icon.link} to={icon.link} icon={icon.name} />
            ))}
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMediaContainer>
    </Flex>
  );
}
