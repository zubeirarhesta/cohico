import { Flex, Heading, Text } from "@chakra-ui/react";

export default function DummyPage({ children }) {
  const nunito = `'Nunito', sans-serif`;
  const title = children.toUpperCase();
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      height={["125vh", "100vh", "100vh"]}
      bgGradient="linear(to-l, #30D5C8,  pink.500)"
      minW="22rem"
    >
      <Heading
        /* bgClip="text" */
        fontSize={["2xl", "3xl", "6xl"]}
        fontWeight="extrabold"
        color="white"
        fontFamily={nunito}
      >
        {title}
      </Heading>
      <Text
        fontSize={["1.5xl", "2xl", "4xl"]}
        fontWeight="extrabold"
        fontStyle="italic"
        color="white"
        fontFamily={nunito}
      >
        Under Development
      </Text>
    </Flex>
  );
}
