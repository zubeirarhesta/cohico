import { IconButton, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function StackIcon(props) {
  const hasFab = props.icon.prefix === "fab";

  return (
    <Link href={`${props.to}`}>
      <IconButton
        p="0"
        m="0"
        height={["50px", "60px"]}
        width={["50px", "60px"]}
        fontSize={["2rem"]}
        variant="unstyled"
        color={props.color}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
        }}
        icon={
          hasFab ? (
            <FontAwesomeIcon icon={props.icon} />
          ) : (
            <Image
              src={props.icon}
              alt="lili"
              width={37}
              height={37}
              style={{}}
            />
          )
        }
      />
    </Link>
  );
}
