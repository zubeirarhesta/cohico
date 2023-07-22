import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  const rubik = `'Rubik', sans-serif`;
  const nunito = `'Nunito', sans-serif`;
  return (
    <Flex
      as="section"
      textAlign={["left", "center"]}
      bgImage="url('/images/site/silhouette.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p="2rem"
      direction={["column", "row", "row"]}
      minW="22rem"
      minH={["70vh", "85vh", "100vh"]} // addition
      justify="center" // addition
      align="center" //addition
    >
      <Box
        w={["180px", "230px", "300px"]}
        h={["180px", "230px", "300px"]}
        boxShadow="2xl"
        borderStartRadius={["none", "10px", "10px"]}
        borderTopRightRadius={["10px", "none", "none"]}
        borderTopLeftRadius="10px"
        overflow="hidden"
        backgroundColor="grey.700"
        marginRight="0"
        mt="2rem"
      >
        <Image
          src="/images/site/arhesta.jpeg"
          alt="zubeir muhammad arhetsa"
          width={1000}
          height={1000}
          /* unoptimized={true} */
          style={{
            objectFit: "cover",
            objectPosition: "top",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      <Box
        mt={["0", "2rem", "2rem"]}
        p={["0.3rem", "0.5rem"]}
        w={["xs", "sm", "lg"]}
        borderEndRadius={["none", "10px", "10px"]}
        borderBottomEndRadius="10px"
        borderBottomStartRadius={["10px", "none", "none"]}
        minH={["120px", "230px", "300px"]}
        maxW={["180px", "80%", "80%"]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign={["center", "start", "start"]}
        bg="blackAlpha.700"
      >
        <Text
          fontFamily={rubik}
          as="p"
          fontSize={["0.8rem", "1.25rem", "1.5rem"]}
          color="whiteAlpha.700"
          w={["100%", "90%"]}
          max-width="40rem"
          margin="auto"
          fontWeight="medium"
        >
          Hi, my name is
        </Text>
        <Heading
          fontFamily={nunito}
          as="h1"
          color="white"
          fontSize={["1.2rem", "1.7rem", "2.2rem"]}
          margin="auto"
          w={["100%", "90%"]}
        >
          zubeir muhammad arhesta.
        </Heading>
        <Text
          fontFamily={rubik}
          as="p"
          fontSize={["0.8rem", "1.25rem", "1.5rem"]}
          color="whiteAlpha.700"
          w={["100%", "90%"]}
          max-width="40rem"
          margin="auto"
          fontWeight="medium"
        >
          {/* <Highlight
            query="code"
            styles={{
              fontFamily: "monospace",
              color: "black",
              px: "2",
              py: "1",
              rounded: "md",
              bg: "whiteAlpha.700",
              fontWeight: "bold",
              marginRight: "2px",
            }}
          > */}
          I am a Software Engineer!
          {/* </Highlight> */}
        </Text>
        {/* <Text
          fontFamily={nunito}
          mt={["7px", "10px"]}
          fontWeight="bold"
          fontSize={["0.8rem", "1.1rem", "1.2rem"]}
          color="white"
        >
          developed by zubeir arhesta
        </Text> */}
      </Box>
    </Flex>
  );
}
