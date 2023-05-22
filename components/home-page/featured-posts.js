import { Box, Heading } from "@chakra-ui/react";
import PostsGrid from "../posts/posts-grid";

export default function FeaturedPosts(props) {
  const rubik = `'Rubik', sans-serif`;
  return (
    <Box as="section" w="90%" maxW="80rem" margin={["1rem auto", "2rem auto"]}>
      <Heading
        fontFamily={rubik}
        as="h2"
        fontSize={["2rem", "2.4rem", "2.8rem"]}
        color="gray.800"
        mb={["10px", "20px", "30px"]}
        textAlign={["left", "center"]}
      >
        featured posts
      </Heading>
      <PostsGrid posts={props.items} />
    </Box>
  );
}
