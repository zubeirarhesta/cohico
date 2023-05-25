import { Flex, Heading } from "@chakra-ui/react";

export default function DummyPage({ children }) {
  const nunito = `'Nunito', sans-serif`;
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      height={["125vh", "100vh", "100vh"]}
      bgGradient="linear(to-l, green.300, blue.500)"
      minW="22rem"
    >
      <Heading
        /* bgClip="text" */
        fontSize={["2xl", "3xl", "6xl"]}
        fontWeight="extrabold"
        color="white"
        fontFamily={nunito}
      >
        {children}
      </Heading>
    </Flex>
  );
}
