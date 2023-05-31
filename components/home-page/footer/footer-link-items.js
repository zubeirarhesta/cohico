import { Flex, Heading } from "@chakra-ui/react";

export default function FooterLinkItems(props) {
  return (
    <Flex
      direction="column"
      align={["center"]}
      margin={["8px", "16px"]}
      textAlign="left"
      width={["120px", "160px"]}
      boxSizing="border-box"
    >
      <Heading
        marginBottom={["12px", "16px"]}
        color="#fff"
        size={["md", "lg"]}
        fontFamily="inherit"
      >
        {props.title}
      </Heading>
      {props.children}
    </Flex>
  );
}
