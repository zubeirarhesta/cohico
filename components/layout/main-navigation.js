import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function MainNavigation() {
  const animate = "all 0.3s ease-in-out";
  const nunito = `'Nunito', sans-serif`;

  return (
    <Flex
      as="header"
      bg="blackAlpha.700"
      position="fixed"
      maxH="80px"
      minW="22rem"
      width="100%"
      align="center"
      px="1rem"
      backdropFilter="saturate(180%) blur(5px)"
      zIndex="1"
      top={0}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        /* transition={animate}
        _hover={{
          transform: [
            "translateY(-0.2rem) translateX(0.2rem)",
            "translateY(-0.4rem) translateX(0.4rem)",]
            
        }} */
      >
        <Heading
          ml={["5px", "10px"]}
          fontSize={["1.5rem", "1.7rem", "2rem"]}
          fontFamily={nunito}
          color="whiteAlpha.600"
          transition={animate}
          _hover={{
            color: "white",
          }}
        >
          <Link href="/" /* style={{ color: "white" }} */>zmarhesta</Link>
        </Heading>
        {/* <Image
          ml={["5px", "7px"]}
          src="/images/cloud.png"
          alt="cloud icon"
          boxSize={["25px", "27px", "30px"]}
          objectFit="cover"
        /> */}
      </Box>

      <Spacer />
      <Box
        fontFamily={nunito}
        p={["2", "4"]}
        fontWeight="bold"
        fontSize={["lg", "xl"]}
        color="whiteAlpha.600"
        transition={animate}
        _hover={{
          color: "whiteAlpha.800",
        }}
        _active={{
          color: "white",
        }}
      >
        <Link href="/posts">posts</Link>
      </Box>
      <Box
        fontFamily={nunito}
        ml={["2px", "5px"]}
        p={["2", "4"]}
        fontWeight="bold"
        fontSize={["lg", "xl"]}
        color="whiteAlpha.600"
        transition={animate}
        _hover={{
          color: "whiteAlpha.800",
        }}
        _active={{
          color: "white",
        }}
      >
        <Link href="/contact">contact</Link>
      </Box>
    </Flex>
  );
}
