import React from "react";
import {
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Box,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";

import PageContainer from "./PageContainer";
import Timeline from "./Timeline";

function Dashboard() {
  return (
    <>
      <PageContainer currPage="Dashboard" pageContent={<DashContent />} />
      {/* <HStack>
        <Sidebar currPage="Dashboard" />
        <Box bg="white" w="20vw"></Box>
        <Box bg="gray.100" flexGrow="1" px={16} py={12}>
          <DashContent />
        </Box>
      </HStack> */}
    </>
  );
}

function DashContent() {
  return (
    <>
      <VStack alignItems="flex-start" spacing={8}>
        <Heading fontWeight="light" size="xl">
          Dashboard
        </Heading>
        <Flex px={12} w="100%" justifyContent="space-between">
          <Box>
            <Text fontSize="lg">Goals</Text>
            <UnorderedList pl={8} fontSize="md">
              <ListItem>Sleep more</ListItem>
              <ListItem>Spend more time with friends</ListItem>
            </UnorderedList>
            <Text fontSize="lg">Stats</Text>
            <UnorderedList pl={8} fontSize="md">
              <ListItem>
                Good job on sleeping 1 more hour on average than last week
              </ListItem>
              <ListItem>You haven’t been studying as much fool</ListItem>
            </UnorderedList>
          </Box>
          <Box bg="gray.300" w={52} h={52}></Box>
        </Flex>

        <Timeline />
      </VStack>
    </>
  );
}

export default Dashboard;
