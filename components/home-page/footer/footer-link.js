import { Link } from "@chakra-ui/react";

export default function FooterLink(props) {
  return (
    <Link
      href={props.to}
      color="#a5a5a5"
      textDecoration="none"
      marginBottom="0.5rem"
      fontSize={["sm", "md"]}
      fontWeight="bold"
      _hover={{
        color: "#fff",
        transition: "0.3s ease-out",
      }}
    >
      {props.content}
    </Link>
  );
}
