import React from "react";
import { Link as ReachLink } from "@reach/router";
import { HStack, Button, Image, Link } from "@chakra-ui/react";

import LargeLogo from "./assets/logo-full-large.svg";

function MenuBar() {
  return (
    <HStack
      w="100vw"
      px={8}
      py={4}
      justifyContent="space-between"
      position="fixed"
      left="0"
      top="0"
    >
      <Image src={LargeLogo} />
      <HStack spacing={12}>
        <Link fontSize="xl" fontWeight="light" as={ReachLink} to="/">
          Home
        </Link>
        <Link fontSize="xl" fontWeight="light" as={ReachLink} to="/about">
          About
        </Link>
        <Link as={ReachLink} to="/dashboard">
          <Button
            colorScheme="blue"
            bg="blue.900"
            size="md"
            px={8}
            fontSize="lg"
            fontWeight="light"
          >
            Login
          </Button>
        </Link>
      </HStack>
    </HStack>
  );
}

export default MenuBar;
