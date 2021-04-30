import React from "react";
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
} from "@chakra-ui/react";

/* Component Imports */
import AddActivity from "./AddActivity";

/* SVG Imports */
import LargeLogo from "./assets/logo-full-large.svg";
import ProfileImg from "./assets/profile-img.svg";
import IconPlaceholder from "./assets/icon-placeholder.svg";
import BlueLine from "./assets/sidebar-blue-line.svg";

function Sidebar({}) {
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
            destination=""
            lineOn={true}
          />
          <SidebarLink
            text="Goals"
            iconSrc="IconPlaceholder"
            destination=""
            lineOn={false}
          />
          <SidebarLink
            text="Compare"
            iconSrc="IconPlaceholder"
            destination=""
            lineOn={false}
          />
          <SidebarLink
            text="Settings"
            iconSrc="IconPlaceholder"
            destination=""
            lineOn={false}
          />
        </VStack>
      </GridItem>
      <GridItem rowSpan={1} p={2}>
        <HStack>
          <Image src={IconPlaceholder} />
          <Text>Logout</Text>
        </HStack>
      </GridItem>
    </Grid>
  );
}

/*
  --- TODO: Implement links and destination field ---
*/
function SidebarLink({ text, iconSrc, destination, lineOn }) {
  return (
    <HStack w="100%">
      <Image src={IconPlaceholder} />
      <Text flexGrow="1">{text}</Text>
      {lineOn ? <Image src={iconSrc} /> : <></>}
    </HStack>
  );
}

export default Sidebar;
