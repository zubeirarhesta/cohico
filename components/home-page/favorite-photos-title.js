import { Flex, Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export default function FavoritePhotosTitle() {
  return (
    <Fragment>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding={["10px 20px 5px", "10px 20px", "10px 20px"]}
        margin={["10px auto 0px", "10px auto 0px", "10px auto 40px"]}
        flexDirection="column"
      >
        <Heading size={["lg", "xl", "2xl"]}>my featured shots</Heading>
        <Text size={["md", "lg", "xl"]} color="blackAlpha.600">
          the followings are my own featured shots
        </Text>
      </Flex>
    </Fragment>
  );
}
