import React, { useState } from "react";
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
} from "@chakra-ui/react";

import MenuBar from "./MenuBar";

import HomeBG from "./assets/home-background.svg";
import BlueLine from "./assets/sidebar-blue-line.svg";

const loremThree =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam cras lacus nullam amet. Egestas varius accumsan sit nulla turpis turpis sem elit.";

function Home() {
  return (
    <>
      <MenuBar />
      <Image src={HomeBG} position="absolute" zIndex="-2" />
      <Center pt="130px" pb="200px">
        <HomeContent />
      </Center>
    </>
  );
}

function HomeContent() {
  return (
    <VStack w="70vw" spacing={36}>
      {/* --- Motto / Graphic --- */}
      <HStack w="100%" justifyContent="space-between">
        <Heading align="center" fontSize="5xl" fontWeight="light">
          Give us your time,{<br />}see your truth
        </Heading>
        <Box bg="gray.300" w="500px" h="400px"></Box>
      </HStack>

      <VStack spacing={24}>
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
        {/* REPLACE WITH IMG */}
        <Box
          bg="gray.300"
          w="550px"
          h="400px"
          position="relative"
          top="0"
          right="0"
          zIndex="-1"
        ></Box>
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
          {currFeat.id === feature.id ? <Image src={BlueLine} /> : <></>}
        </HStack>
      </ListItem>
    );
  }

  return (
    <HStack w="100%" px={8} justifyContent="space-between">
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

export default Home;
