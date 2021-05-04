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
  Link,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";

/* Component Imports */
import AddActivity from "./AddActivity";

/* SVG and Icon Imports */
import { AiFillHome, AiFillCompass, AiFillSetting } from "react-icons/ai";
import { FiLogOut, FiBarChart } from "react-icons/fi";
import LargeLogo from "./assets/logo-full-large.svg";
import IconLogo from "./assets/logo-icon-only.svg";
import ProfileImg from "./assets/profile-img.svg";

function Sidebar({ currPage }) {
  const [isTablet] = useMediaQuery("(max-width: 1200px");

  if (isTablet) {
    return <SidebarTablet currPage={currPage} />;
  }
  return <SidebarFull currPage={currPage} />;
}

function SidebarFull({ currPage }) {
  return (
    <Center bg="white" h="100vh" w="20vw" maxW="288px" position="fixed" top="0">
      <Grid
        templateRows="repeat(8, 1fr)"
        templaceColumns="repeat(1, 1fr)"
        gap={4}
        p={4}
        maxH="900px"
        h="100%"
        w="100%"
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
            <AddActivity screenSize="full" />
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
              iconSrc={AiFillHome}
              destination="/dashboard"
              lineOn={currPage === "Dashboard"}
            />
            <SidebarLink
              text="Goals"
              iconSrc={AiFillCompass}
              destination="/goals"
              lineOn={currPage === "Goals"}
            />
            <SidebarLink
              text="Compare"
              iconSrc={FiBarChart}
              destination="/compare"
              lineOn={currPage === "Compare"}
            />
            <SidebarLink
              text="Settings"
              iconSrc={AiFillSetting}
              destination="/settings"
              lineOn={currPage === "Settings"}
            />
          </VStack>
        </GridItem>
        <GridItem rowSpan={1} p={2}>
          <SidebarLink
            text="Logout"
            iconSrc={FiLogOut}
            destination="/"
            lineOn={false}
          />
        </GridItem>
      </Grid>
    </Center>
  );
}

function SidebarTablet({ currPage }) {
  return (
    <Center bg="white" h="100vh" w="10vw" minW="90px" position="fixed" top="0">
      <Grid
        templateRows="repeat(7, 1fr)"
        templaceColumns="repeat(1, 1fr)"
        gap={4}
        py={4}
        h="100%"
        w="100%"
      >
        <GridItem rowSpan={1} p={2}>
          <Center>
            <Image src={IconLogo} />
          </Center>
        </GridItem>
        <GridItem rowSpan={1}>
          <Center>
            <AddActivity screenSize="tablet" />
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
              iconSrc={AiFillHome}
              destination="/dashboard"
              lineOn={currPage === "Dashboard"}
              iconOnly={true}
            />
            <SidebarLink
              text="Goals"
              iconSrc={AiFillCompass}
              destination="/goals"
              lineOn={currPage === "Goals"}
              iconOnly={true}
            />
            <SidebarLink
              text="Compare"
              iconSrc={FiBarChart}
              destination="/compare"
              lineOn={currPage === "Compare"}
              iconOnly={true}
            />
            <SidebarLink
              text="Settings"
              iconSrc={AiFillSetting}
              destination="/settings"
              lineOn={currPage === "Settings"}
              iconOnly={true}
            />
          </VStack>
        </GridItem>
        <GridItem rowSpan={1} p={2}>
          <SidebarLink
            text="Logout"
            iconSrc={FiLogOut}
            destination="/"
            lineOn={false}
            iconOnly={true}
          />
        </GridItem>
      </Grid>
    </Center>
  );
}

function SidebarLink({ text, iconSrc, destination, lineOn, iconOnly }) {
  let textHover;
  let iconHover;

  if (!lineOn) {
    iconHover = { color: "blue.300" };
    textHover = { textColor: "blue.300" };
  } else {
    iconHover = {};
    textHover = {};
  }

  function iconOnlyHandler() {
    if (iconOnly) {
      return (
        <VStack width="100%">
          <Icon as={iconSrc} color="blue.900" _groupHover={iconHover} />
          <Text fontSize="xs" _groupHover={textHover}>
            {text}
          </Text>
        </VStack>
      );
    }

    return (
      <HStack w="100%">
        <Icon as={iconSrc} color="blue.900" _groupHover={iconHover} />
        <Text flexGrow="1" _groupHover={textHover}>
          {text}
        </Text>
        {lineOn ? (
          <Box bg="blue.300" borderRadius="20" h="2px" w="6vw" maxW="100px" />
        ) : (
          <></>
        )}
      </HStack>
    );
  }

  return (
    <Link
      as={ReachLink}
      to={destination}
      w="100%"
      _hover={{ textDecor: "none" }}
      role="group"
    >
      {iconOnlyHandler()}
    </Link>
  );
}

export default Sidebar;
