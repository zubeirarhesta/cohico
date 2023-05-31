import { Flex } from "@chakra-ui/react";

export default function SocialMediaWrapper(props) {
  return (
    <Flex
      justify="space-around"
      align="center"
      width="90%"
      maxWidth="1000px"
      margin={["20px auto 15px auto", "40px auto 20px auto"]}
      direction={["column", "column", "row"]}
    >
      {props.children}
    </Flex>
  );
}
