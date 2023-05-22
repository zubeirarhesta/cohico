import { Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import style from "./markdown-styles.module.css";
import Image from "next/image";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderer = {
    /* img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    }, */
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <Image
            src={`/images/posts/${post.slug}/${image.properties.src}`}
            alt={image.properties.alt}
            width={600}
            height={300}
            style={{
              marginTop: "2rem",
            }}
          />
        );
      }
      return <Text fontSize={["md", "lg"]}>{paragraph.children}</Text>;
    },

    h1(heading) {
      const { children } = heading;
      return (
        <Heading
          fontSize={["1.3rem", "1.8rem", "2.3rem"]}
          mb={["0.5rem", "1rem"]}
        >
          {children}
        </Heading>
      );
    },

    h2(heading) {
      const { children } = heading;
      return (
        <Heading
          fontSize={["1.2rem", "1.5rem", "2rem"]}
          mb={["0.3rem", "0.5rem"]}
        >
          {children}
        </Heading>
      );
    },

    ul(unorderedList) {
      const { children } = unorderedList;
      return (
        <List fontSize={["1rem", "1rem", "1.2rem"]} fontWeight="bold">
          {children}
        </List>
      );
    },

    code(code) {
      const { children } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language="javascript"
          customStyle={{ fontSize: "1rem" }}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <Box
      minW="22rem"
      mx="0"
      /* bgGradient="linear(to-b, green.200, gray.500)" */
    >
      <Box
        as="article"
        width="95%"
        maxWidth="60rem"
        margin={["4rem auto 1rem", "5rem auto 1rem"]}
        fontSize="1.25rem"
        lineHeight="2rem"
        backgroundColor="rgb(215, 240, 235)"
        borderRadius="6px"
        padding="0"
        overflow="hidden"
        justifySelf="center"
      >
        <PostHeader title={post.title} image={imagePath} />
        <Box padding={["1rem", "2rem"]}>
          <ReactMarkdown
            components={customRenderer}
            className={style.reactMarkDown}
          >
            {post.content}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
}
