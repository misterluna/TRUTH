import React, { useState, useEffect } from "react";
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
import Utils from "../Utils";

let someDay = new Date();
someDay.setDate(someDay.getDate() - 3);

function generatePageDate(offSet) {
  let today = new Date();
  today.setDate(today.getDate() + offSet);
  return today;
}

function Dashboard() {
  /* --- Frontend Hooks --- */
  const [pageDate, setPageDate] = useState(someDay);
  /* --- Accessing Backend --- */
  // Create the activeUser state hook for calling Utils.get methods.
  // Only use activeUser for get methods. When calling a set method in Utils,
  // use the userId only and increment update after. This is to prevent infinite loops.
  const USER_ID = Utils.login();
  let update = 0;

  const [activeUser, setActiveUser] = useState([]);
  useEffect(() => {
    const getAsyncInfo = async () => {
      Utils.getUser(USER_ID).then((res) => {
        setActiveUser(res);
      });
    };
    getAsyncInfo();
  }, [USER_ID, update]);

  /* --- Gets events for the page's current date --- */
  function getEvents() {
    console.log(
      "--- FORMATTED: " +
        Utils.formatDate(
          pageDate.getFullYear(),
          pageDate.getMonth() + 1,
          pageDate.getDate(),
          0,
          0
        )
    );
    let events = Utils.getAllEvents(
      activeUser,
      Utils.formatDate(
        pageDate.getFullYear(),
        pageDate.getMonth() + 1,
        pageDate.getDate(),
        0,
        0
      )
    );
    console.log("--- EVENTS: " + events);
    if (events !== undefined && events.length > 0) {
      console.log("--- Array not empty: " + events);
      return events;
    }
    if (events === undefined || events.length <= 0) {
      console.log("--- Array empty ---");
      return [];
    }
  }

  /* --- Sets current page date in relative days...
     ---   So "-1" would get the day before, 
     ---     2 would give two days later
  */
  function setDateRelative(relativeDays) {
    let newDate = new Date(pageDate);
    newDate.setDate(newDate.getDate() + relativeDays);
    setPageDate(newDate);
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

          <Timeline
            data={getEvents()}
            pageDate={pageDate}
            setDateRelative={setDateRelative}
          />
        </VStack>
      </>
    );
  }

  return (
    <>
      <PageContainer currPage="Dashboard" pageContent={<DashContent />} />
    </>
  );
}

export default Dashboard;
