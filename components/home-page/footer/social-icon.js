import { IconButton, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon(props) {
  return (
    <Link
      href={`https://www.${props.to}.com/${props.detail}`}
      transition="all 0.3s ease-in-out"
      fontSize="24px"
    >
      <IconButton
        p="0"
        m="0"
        fontSize="1.5rem"
        variant="unstyled"
        color="#a5a5a5"
        transition="all 0.3s ease-in-out"
        _hover={{
          color: `${props.color}`,
          transform: "scale(1.1)",
        }}
        icon={<FontAwesomeIcon icon={props.icon} />}
      />
    </Link>
  );
}
