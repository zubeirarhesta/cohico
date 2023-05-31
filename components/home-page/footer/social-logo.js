import { Image, Link, Text } from "@chakra-ui/react";

export default function SocialLogo(props) {
  return (
    <Link
      href={props.to}
      color="#a5a5a5"
      transition="color 0.3s linear"
      justifySelf="start"
      marginLeft="20px"
      cursor="pointer"
      textDecoration="none"
      fontSize="2rem"
      display="flex"
      alignItems="center"
      marginBottom="16px"
      _hover={{
        color: "#fff",
        transition: "0.3s ease-out",
      }}
    >
      <Text padding="0" marginRight="7px" fontWeight="bold">
        zmarhesta
      </Text>
      {/* <Image
        src="/images/cloud.png"
        alt="cloud icon"
        boxSize={["25px", "27px", "30px"]}
        objectFit="cover"
      /> */}
    </Link>
  );
}
