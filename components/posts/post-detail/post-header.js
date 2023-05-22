import { Box, Heading } from "@chakra-ui/react";

export default function PostHeader(props) {
  const { title, image } = props;
  const nunito = `'Nunito', sans-serif`;
  const outerBoxStyles = {
    width: "100%",
    padding: "0",
    background: `url(${image}) center/cover no-repeat`,
    minHeight: "10rem",
    height: "15rem",
  };

  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
    fontWeight: "bold",
    fontSize: "20px",
    minHeight: "10rem",
    backdropBrightness: "30%",
    transition: "all 0.3s ease-in-out",
    bgGradient: "linear(to-b, rgba(0,0,0,0),  rgba(215, 240, 235, 1))",
  };

  return (
    <Box sx={outerBoxStyles}>
      <Box
        sx={innerBoxStyles}
        backdropFilter="auto"
        backdropBlur="1px"
        color="blackAlpha.700"
        _hover={{
          backdropBrightness: "60%",
          color: "black",
        }}
      >
        <Heading
          as="h1"
          fontSize={["1.5rem", "2rem", "4rem"]}
          margin="1rem"
          lineHeight="initial"
          textAlign={["center"]}
          fontFamily={nunito}
        >
          {title}
        </Heading>
      </Box>
    </Box>
  );
}
