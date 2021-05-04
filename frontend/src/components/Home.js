import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  VStack,
  HStack,
  Heading,
  Text,
  Center,
  OrderedList,
  ListItem,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import MenuBar from "./MenuBar";
import HomeBG from "./assets/home-background.svg";
import HomeBGTablet from "./assets/home-background-tablet.svg";

const loremThree =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam cras lacus nullam amet. Egestas varius accumsan sit nulla turpis turpis sem elit.";

function Home() {
  const [isTablet] = useMediaQuery("(max-width: 1200px");
  
  return (
    <>
      <VStack w="100vw" h="auto">
        <Center w="100%" maxW="1440px">
          {isTablet ? (
            <Image
              src={HomeBGTablet}
              position="absolute"
              top="-200px"
              fit="none"
              zIndex="-3"
            />
          ) : (
            <Image
              src={HomeBG}
              position="absolute"
              top="-300px"
              fit="none"
              zIndex="-2"
            />
          )}

          <MenuBar />
          {isTablet ? (
            <Center pt="130px" pb="200px" maxW="1200px">
              <HomeContentTablet />
            </Center>
          ) : (
            <Center pt="130px" pb="200px" maxW="1440px">
              <HomeContentFull />
            </Center>
          )}
        </Center>
      </VStack>

      {/* I commented below test code to work on layout - Connor */}
      {/* <h1>
        Oski's gaming activity on 2021-04-20:
        {Utils.getActivityTotal(activeUser, "gaming", "2021-04-20")}
      </h1> */}
    </>
  );
}

function HomeContentFull() {
  return (
    <VStack w="70vw" spacing={36}>
      {/* --- Motto / Graphic --- */}
      <HStack w="100%" justifyContent="space-between">
        <Heading align="center" fontSize="5xl" fontWeight="light">
          Give us your time,{<br />}see your truth
        </Heading>
        <Box bg="gray.300" w="500px" h="400px"></Box>
      </HStack>

      <VStack spacing={24} w="80%" maxW="1152px">
        {/* --- Header / Text / Img --- */}
        <HStack w="100%" justifyContent="space-between">
          <Box h="70%" w="35%">
            <Heading fontWeight="light">Header</Heading>
            <Text mt="0.5em">{loremThree}</Text>
          </Box>
          <Box bg="gray.300" w="450px" h="280px"></Box>
        </HStack>

        {/* --- Img / Header / Text --- */}
        <HStack w="100%" justifyContent="space-between">
          <Box bg="gray.300" w="450px" h="280px"></Box>
          <Box h="70%" w="35%">
            <Heading fontWeight="light">Header</Heading>
            <Text mt="0.5em">{loremThree}</Text>
          </Box>
        </HStack>
      </VStack>

      {/* --- Select from list thing --- */}
      <FeatureSelector />
    </VStack>
  );
}
function FeatureSelector() {
  const features = [
    { id: 0, text: "Feature 1", imgSrc: "" },
    { id: 1, text: "Feature 2", imgSrc: "" },
    { id: 2, text: "Feature 3", imgSrc: "" },
    { id: 3, text: "Feature 4", imgSrc: "" },
    { id: 4, text: "Feature 5", imgSrc: "" },
  ];
  const [currFeat, setCurrFeat] = useState(features[0]);

  function FeatureImg({ text, imgSrc }) {
    return (
      <Box position="relative">
        <Box
          bg="gray.300"
          w="550px"
          h="400px"
          position="relative"
          top="0"
          right="0"
        >
          {/* --- INSERT IMAGE --- */}
        </Box>
        <Center
          bg="gray.100"
          borderRadius="20"
          py={4}
          px={8}
          position="absolute"
          bottom="0"
          left="0"
          zIndex="1"
          transform="translate(-30%, 30%)"
        >
          <Text fontWeight="light" fontSize="lg">
            {text}
          </Text>
        </Center>
      </Box>
    );
  }

  function FeatureListItem({ feature }) {
    let color;
    let hover;
    if (currFeat.id === feature.id) {
      color = "black";
      hover = {};
    } else {
      color = "gray.500";
      hover = { color: "black" };
    }
    return (
      <ListItem>
        <HStack pr="5em">
          <Text
            onClick={() => setCurrFeat(features[feature.id])}
            flexGrow="1"
            color={color}
            cursor="pointer"
            _hover={hover}
          >
            {feature.text}
          </Text>
          {currFeat.id === feature.id ? (
            <Box h="2px" w="40%" bg="blue.200" />
          ) : (
            <></>
          )}
        </HStack>
      </ListItem>
    );
  }

  return (
    <HStack w="100%" maxW="1100px" px={8} justifyContent="space-between">
      <Box flexGrow="1">
        <Heading fontWeight="light">Header</Heading>
        <OrderedList
          mt="0.5em"
          pl={4}
          fontSize="xl"
          fontWeight="light"
          lineHeight="180%"
        >
          {features.map((feature) => (
            <FeatureListItem feature={feature} />
          ))}
        </OrderedList>
      </Box>
      <FeatureImg text={currFeat.text} imgSrc={currFeat.imgSrc} />
    </HStack>
  );
}
function HomeContentTablet() {
  return (
    <VStack w="70vw" spacing={36}>
      {/* --- Motto  --- */}
      <Heading align="center" fontSize="4xl" fontWeight="light">
        Give us your time,{<br />}see your truth
      </Heading>

      <VStack spacing={24} w="80%" maxW="1152px">
        {/* --- Header / Img / Text --- */}
        <VStack spacing={4}>
          <Heading fontWeight="light" fontSize="3xl">
            Header
          </Heading>
          <Box bg="gray.300" w="450px" h="280px"></Box>
          <Text mt="0.5em" maxW="400px">
            {loremThree}
          </Text>
        </VStack>

        {/* --- Header / Img / Text --- */}
        <VStack spacing={4}>
          <Heading fontWeight="light" fontSize="3xl">
            Header
          </Heading>
          <Box bg="gray.300" w="450px" h="280px"></Box>
          <Text mt="0.5em" maxW="400px">
            {loremThree}
          </Text>
        </VStack>
      </VStack>

      {/* --- Select from list thing --- */}
      <FeatureSelectorTablet />
    </VStack>
  );
}
function FeatureSelectorTablet() {
  const features = [
    { id: 0, text: "Feature 1", imgSrc: "" },
    { id: 1, text: "Feature 2", imgSrc: "" },
    { id: 2, text: "Feature 3", imgSrc: "" },
    { id: 3, text: "Feature 4", imgSrc: "" },
    { id: 4, text: "Feature 5", imgSrc: "" },
  ];
  const [currFeat, setCurrFeat] = useState(features[0]);

  function FeatureImg({ text, imgSrc }) {
    return (
      <Box position="relative">
        <Box
          bg="gray.300"
          w="400px"
          h="350px"
          position="relative"
          top="0"
          right="0"
        >
          {/* --- INSERT IMAGE --- */}
        </Box>
        <Center
          bg="gray.100"
          borderRadius="20"
          py={4}
          px={8}
          position="absolute"
          bottom="0"
          left="0"
          zIndex="1"
          transform="translate(-30%, 30%)"
        >
          <Text fontWeight="light" fontSize="lg">
            {text}
          </Text>
        </Center>
      </Box>
    );
  }

  function FeatureListItem({ feature }) {
    let color;
    let hover;
    if (currFeat.id === feature.id) {
      color = "black";
      hover = {};
    } else {
      color = "gray.500";
      hover = { color: "black" };
    }
    return (
      <ListItem>
        <HStack pr="5em">
          <Text
            onClick={() => setCurrFeat(features[feature.id])}
            flexGrow="1"
            color={color}
            cursor="pointer"
            _hover={hover}
          >
            {feature.text}
          </Text>
        </HStack>
      </ListItem>
    );
  }

  return (
    <HStack w="90%" maxW="1100px" px={8} justifyContent="space-between">
      <Box flexGrow="1">
        <Heading fontWeight="light" fontSize="3xl">
          Header
        </Heading>
        <OrderedList
          mt="0.5em"
          pl={4}
          fontSize="md"
          fontWeight="light"
          lineHeight="180%"
        >
          {features.map((feature) => (
            <FeatureListItem feature={feature} />
          ))}
        </OrderedList>
      </Box>
      <FeatureImg text={currFeat.text} imgSrc={currFeat.imgSrc} />
    </HStack>
  );
}

export default Home;
