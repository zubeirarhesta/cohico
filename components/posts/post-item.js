import {
  Box,
  Card,
  CardBody,
  Heading,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function PostItem(props) {
  const nunito = `'Nunito', sans-serif`;
  const animate = "all 0.2s ease-in-out";
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <ListItem>
      <Link href={linkPath}>
        <Card
          maxW="sm"
          size={["sm", "md"]}
          borderRadius="10px"
          overflow="hidden"
          transition={animate}
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          <CardBody p="0">
            <Box width="100%" max-height="20rem">
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Stack p="1rem" textAlign={["left", "center"]}>
              <Heading
                fontSize={["1.3rem", "1.5rem"]}
                m={["0.2rem 0", "0.5rem 0"]}
                fontFamily={nunito}
              >
                {title}
              </Heading>
              <Text fontFamily={nunito} fontStyle="italic" color="gray.300">
                {formattedDate}
              </Text>
              <Text fontFamily={nunito} lineHeight="1.5rem">
                {excerpt}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </ListItem>
  );
}
