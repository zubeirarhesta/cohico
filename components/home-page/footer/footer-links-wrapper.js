import { Flex } from "@chakra-ui/react";

export default function FooterLinksWrapper(props) {
  return (
    <Flex direction={[/* "column", "column",  */ "row"]}>{props.children}</Flex>
  );
}
