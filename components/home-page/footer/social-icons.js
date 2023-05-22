import { Flex } from "@chakra-ui/react";

export default function SocialIcons(props) {
  return (
    <Flex justify="space-between" align="center" width="240px">
      {props.children}
    </Flex>
  );
}
