import { Box, Heading } from "@chakra-ui/react";
import PostsGrid from "./posts-grid";

export default function AllPosts(props) {
  const rubik = `'Rubik', sans-serif`;
  return (
    <Box
      as="section"
      width="90%"
      maxWidth="60rem"
      minW="22rem"
      margin={["4rem auto 2rem", "5rem auto 2rem"]}
      px={["1rem", "0rem"]}
    >
      <Heading
        as="h1"
        fontFamily={rubik}
        fontSize={["2.5rem", "3rem", "4rem"]}
        color="gray.800"
        textAlign={["left", "center"]}
        mb={["1rem", "1.5rem"]}
      >
        all posts
      </Heading>
      <PostsGrid posts={props.posts} />
    </Box>
  );
}
