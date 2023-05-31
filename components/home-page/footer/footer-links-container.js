import { Flex } from "@chakra-ui/react";

export default function FooterLinksContainer({ children }) {
  return (
    <Flex
      width="100%"
      maxWidth="1000px"
      justify={["center"]}
      py={["1.5rem", "auto"]}
    >
      {children}
    </Flex>
  );
}
