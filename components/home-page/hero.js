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
        w={["xs", "sm", "2xl"]}
        /* border="3px solid white" */
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        bg="blackAlpha.300"
      >
        <Text
          fontFamily={rubik}
          as="p"
          fontSize={["1rem", "1.25rem", "1.5rem"]}
          color="whiteAlpha.700"
          w={["100%", "80%"]}
          max-width="40rem"
          margin="auto"
          fontWeight="medium"
        >
          Hi, my name is
        </Text>
        <Heading
          fontFamily={nunito}
          as="h1"
          color="whiteAlpha.700"
          fontSize={["1.5rem", "2rem", "3rem"]}
          mb={["0rem", "0.5rem"]}
        >
          <Highlight
            query="muhammad"
            styles={{
              color: "white",
            }}
          >
            zubeir muhammad arhesta.
          </Highlight>
        </Heading>
        <Text
          fontFamily={rubik}
          as="p"
          fontSize={["1rem", "1.25rem", "1.5rem"]}
          color="whiteAlpha.700"
          w={["100%", "80%"]}
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
          I love to code, hike, and cook.
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
