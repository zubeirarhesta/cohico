import { Flex } from "@chakra-ui/react";

export default function StackIcons(props) {
  return (
    <Flex justify="space-evenly" align="center" width={["70%", "40%", "30%"]}>
      {props.children}
    </Flex>
  );
}
