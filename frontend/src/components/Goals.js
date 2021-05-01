import React from "react";
import {
  Wrap,
  WrapItem,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import Sidebar from "./Sidebar";

/*
    --- goals: a list of objects containing goal data 
    ---     Each will become a GoalCard render
    ---     Still need to decide data format and how to get it 
*/
const loremTwo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisl dictumst tristique blandit ultricies dolor.";

const goals = [
  {
    title: "Goal 1",
    goal: 1,
    graphData: "",
    memo: loremTwo,
  },
  {
    title: "Goal 2",
    goal: 2,
    graphData: "",
    memo: loremTwo,
  },
  {
    title: "Goal 3",
    goal: 3,
    graphData: "",
    memo: loremTwo,
  },
];

function Goals() {
  return (
    <>
      <HStack>
        <Sidebar currPage="Goals" />
        <Box bg="white" w="20vw"></Box>
        <Box bg="gray.100" flexGrow="1" px={16} py={12} minH="100vh">
          <GoalsContent goals={goals} />
        </Box>
      </HStack>
    </>
  );
}

function GoalsContent({ goals }) {
  return (
    <>
      <VStack alignItems="flex-start" spacing={4}>
        <Heading fontWeight="light" size="xl">
          Goals
        </Heading>
        <Text px={4} fontSize="lg" fontWeight="light">
          Data tells the truth, so use it to keep yourself accountable.{<br />}
          Keep in mind that everyone is different – be realistic and stay
          patient!
        </Text>
        <Wrap py={8} px={2} spacing={8}>
          {goals.map((data) => {
            return (
              <WrapItem>
                <GoalCard data={data} />
              </WrapItem>
            );
          })}
        </Wrap>
      </VStack>
    </>
  );
}

function GoalCard({ data }) {
  return (
    <VStack
      bg="white"
      borderRadius="5"
      shadow="base"
      p={4}
      alignItems="flex-start"
    >
      <Heading fontSize="2xl" fontWeight="light">
        {data.title}
      </Heading>
      <Text fontWeight="light" px={2}>
        Current goal:{"  " + data.goal.toString() + "  "}hr
        {data.goal > 1 ? "s" : ""}
      </Text>
      <Box bg="gray.100" w="280px" h="180px"></Box>
      <Text fontWeight="light" px={2} maxW="280px">
        {data.memo}
      </Text>
    </VStack>
  );
}

export default Goals;
