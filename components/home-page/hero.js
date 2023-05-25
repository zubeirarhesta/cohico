import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";

export default function Hero() {
  const rubik = `'Rubik', sans-serif`;
  const nunito = `'Nunito', sans-serif`;
  return (
    <Flex
      as="section"
      textAlign={["left", "center"]}
      bgImage="url('/images/site/gunung.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      pt="2rem"
      direction="column"
      minW="22rem"
      minH={["70vh", "85vh", "100vh"]} // addition
      justify="center" // addition
      align="center" //addition
    >
      {/* <Box
        w={["180px", "230px", "300px"]}
        h={["180px", "230px", "300px"]}
        boxShadow="2xl"
        borderRadius="50%"
        overflow="hidden"
        backgroundColor="grey.700"
        margin="auto"
        mt="70px"
      >
        <Image
          src="/images/site/arhesta.JPG"
          alt="zubeir muhammad arhetsa"
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            width: "100%",
            height: "100%",
          }}
        />
      </Box> */}

      <Box
        /* bgColor="blackAlpha.500" */ // addition
        mt="2rem"
        p={["0.5rem", "1rem"]}
        w={["2xs", "sm", "md"]}
        border="3px solid white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          fontFamily={nunito}
          as="h1"
          color="white"
          fontSize={["1.5rem", "2rem", "2.5rem"]}
          mb={["0rem", "0.5rem"]}
        >
          cohico
        </Heading>
        <Text
          fontFamily={rubik}
          as="p"
          fontSize={["1rem", "1.25rem", "1.5rem"]}
          color="black"
          w={["100%", "80%"]}
          max-width="40rem"
          margin="auto"
          fontWeight="medium"
        >
          <Highlight
            query="code"
            styles={{
              fontFamily: "monospace",
              color: "black",
              px: "2",
              py: "1",
              rounded: "md",
              bg: "whiteAlpha.700",
              fontWeight: "bold",
            }}
          >
            code, hike, cook with me
          </Highlight>
        </Text>
        <Text
          fontFamily={nunito}
          mt={["7px", "10px"]}
          fontWeight="bold"
          fontSize={["0.8rem", "1.1rem", "1.2rem"]}
          color="white"
        >
          developed by zubeir arhesta
        </Text>
      </Box>
    </Flex>
  );
}
