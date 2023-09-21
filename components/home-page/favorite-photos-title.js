import { Flex, Heading } from "@chakra-ui/react";
import { Fragment } from "react";

export default function FavoritePhotosTitle() {
  return (
    <Fragment>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="10px 20px"
        margin={["10px auto 0px", "10px auto 0px", "10px auto 40px"]}
      >
        <Heading size={["lg", "xl", "2xl"]}>my featured shots</Heading>
      </Flex>
    </Fragment>
  );
}
