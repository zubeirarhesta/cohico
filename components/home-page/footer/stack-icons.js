import { Flex } from "@chakra-ui/react";

export default function StackIcons(props) {
  return (
    <Flex justify="space-evenly" align="center" width={["95%", "50%", "50%"]}>
      {props.children}
    </Flex>
  );
}
