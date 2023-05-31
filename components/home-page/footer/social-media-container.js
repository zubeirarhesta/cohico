import { Box } from "@chakra-ui/react";

export default function SocialMediaContainer(props) {
  return (
    <Box
      as="section"
      width="100%"
      bg="gray.800"
      display="flex"
      alignItems="center"
      flexDirection="column"
      paddingX={["1rem", "2rem"]}
    >
      {props.children}
    </Box>
  );
}
