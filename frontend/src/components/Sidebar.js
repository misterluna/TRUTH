import React from "react";
import { Link as ReachLink } from "@reach/router";
import {
  Grid,
  GridItem,
  Center,
  VStack,
  HStack,
  StackDivider,
  Box,
  Image,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

/* Component Imports */
import AddActivity from "./AddActivity";

/* SVG Imports */
import LargeLogo from "./assets/logo-full-large.svg";
import ProfileImg from "./assets/profile-img.svg";
import IconPlaceholder from "./assets/icon-placeholder.svg";
import BlueLine from "./assets/sidebar-blue-line.svg";

function Sidebar({ currPage }) {
  return (
    <Grid
      h="100vh"
      w="20vw"
      templateRows="repeat(8, 1fr)"
      templaceColumns="repeat(1, 1fr)"
      gap={4}
      p={4}
      position="fixed"
      top="0"
      left="0"
    >
      <GridItem rowSpan={1} p={2}>
        <Center>
          <Image src={LargeLogo} />
        </Center>
      </GridItem>
      <GridItem rowSpan={1} p={2}>
        <VStack alignItems="flex-start">
          <Image src={ProfileImg} />
          <Text>Welcome back.</Text>
        </VStack>
      </GridItem>
      <GridItem rowSpan={1}>
        <Center>
          <AddActivity />
        </Center>
      </GridItem>
      <GridItem rowSpan={1}></GridItem>
      <GridItem rowSpan={3} p={2}>
        <VStack
          spacing={4}
          divider={<StackDivider borderColor="gray.200" />}
          alignItems="flex-start"
        >
          {/* --- SIDEBAR LINKS LIST --- */}
          <SidebarLink
            text="Dashboard"
            iconSrc="IconPlaceholder"
            destination="/dashboard"
            lineOn={currPage === "Dashboard"}
          />
          <SidebarLink
            text="Goals"
            iconSrc="IconPlaceholder"
            destination="/goals"
            lineOn={currPage === "Goals"}
          />
          <SidebarLink
            text="Compare"
            iconSrc="IconPlaceholder"
            destination="/compare"
            lineOn={currPage === "Compare"}
          />
          <SidebarLink
            text="Settings"
            iconSrc="IconPlaceholder"
            destination="/settings"
            lineOn={currPage === "Settings"}
          />
        </VStack>
      </GridItem>
      <GridItem rowSpan={1} p={2}>
        <SidebarLink
          text="Logout"
          iconSrc="IconPlaceholder"
          destination="/"
          lineOn={false}
        />
      </GridItem>
    </Grid>
  );
}

/*
  --- TODO: Implement links, destination field, and icons ---
*/
function SidebarLink({ text, iconSrc, destination, lineOn }) {
  let hover = lineOn ? {} : { textColor: "blue.300" };
  return (
    <HStack w="100%">
      <Image src={IconPlaceholder} />
      <Link flexGrow="1" _hover={hover} as={ReachLink} to={destination}>
        {text}
      </Link>
      {lineOn ? <Image src={BlueLine} /> : <></>}
    </HStack>
  );
}

export default Sidebar;
