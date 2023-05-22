import { List } from "@chakra-ui/react";
import PostItem from "./post-item";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <List
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
      gap={["1rem", "1.5rem"]}
      m="0"
      p="0"
      align="center"
      justifyItems="center"
    >
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </List>
  );
}
