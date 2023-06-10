import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const animate = "all 0.3s ease-in-out";
const nunito = `'Nunito', sans-serif`;
const Links = ["Posts", "Ask Me", "Games"];

function NavLink({ children }) {
  const link = children.includes("Ask")
    ? "/contact"
    : `/${children.toLowerCase()}`;
  return (
    <Box
      ml={["2px", "5px"]}
      p={["2", "4"]}
      fontFamily={nunito}
      fontWeight="bold"
      fontSize={["lg"]}
      color="whiteAlpha.600"
      transition={animate}
      _hover={{
        color: "whiteAlpha.800",
      }}
      _active={{
        color: "white",
      }}
    >
      <Link href={link}>{children}</Link>
    </Box>
  );
}

export default function MainNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      position="fixed"
      maxH="80px"
      minW="22rem"
      width="100%"
      px="0.5rem"
      py="0.5rem"
      top={0}
      align="center"
      bg="blackAlpha.900"
      backdropFilter="saturate(180%) blur(5px)"
      zIndex="1"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        ml={["5px", "10px"]}
      >
        <Heading
          fontSize={["1.3rem", "1.5rem", "1.8rem"]}
          fontFamily={nunito}
          color="whiteAlpha.600"
          transition={animate}
          _hover={{
            color: "white",
          }}
        >
          <Link href="/">zmarhesta</Link>
        </Heading>
      </Box>

      <Spacer />
      <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
      <Menu closeOnBlur={false}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          size="sm"
          p="0"
          mr="0.3rem"
          icon={
            isOpen ? (
              <CloseIcon
                color="white"
                mb="2px"
                ml="2px"
                _hover={{
                  color: "blackAlpha.800",
                }}
              />
            ) : (
              <HamburgerIcon mb="2px" ml="2px" />
            )
          }
          variant="ghost"
          color="whiteAlpha.800"
          transition={animate}
          _hover={{
            color: "blackAlpha.800",
            bg: "white",
          }}
          _active={{
            border: "3px solid white",
          }}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <MenuList
          display={{ md: "none" }}
          width="99vw"
          minW="22rem"
          mr="2px"
          mt={["-1px", "0", "0"]}
          py="0"
          border="none"
          borderTopRadius="none"
          borderBottomRadius={["10px", "none", "none"]}
          bg="blackAlpha.900"
          zIndex="1"
        >
          {Links.map((link) => (
            <MenuItem
              key={link}
              py="0.5rem"
              color="whiteAlpha.800"
              bg="transparent"
              fontFamily={nunito}
              fontWeight="bold"
              transition={animate}
              _hover={{
                color: "black",
                bg: "whiteAlpha.900",
              }}
              onClick={isOpen ? onClose : onOpen}
            >
              <Link
                href={
                  link.includes("Ask") ? "/contact" : `/${link.toLowerCase()}`
                }
              >
                {link}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}

/* <Flex
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
          <Link href="/">zmarhesta</Link>
        </Heading>
      </Box>

      <Spacer />
      <Box
        p={["2", "4"]}
        fontFamily={nunito}
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
        ml={["2px", "5px"]}
        p={["2", "4"]}
        fontFamily={nunito}
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
      <Box
        ml={["2px", "5px"]}
        p={["2", "4"]}
        fontFamily={nunito}
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
        <Link href="/login">login</Link>
      </Box>
    </Flex> */
