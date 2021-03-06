import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Utils from "../Utils";
import PageContainer from "./PageContainer";

function Compare() {
  const USER_ID = Utils.login();
  let update = 0;
  // Create the activeUser state hook for calling Utils.get methods.
  // Only use activeUser for get methods. When calling a set method in Utils,
  // use the userId only and increment update after. This is to prevent infinite loops.
  const [activeUser, setActiveUser] = useState([]);
  useEffect(() => {
    const getAsyncInfo = async () => {
      Utils.getUser(USER_ID).then((res) => {
        setActiveUser(res);
      });
    };
    getAsyncInfo();
  }, [USER_ID, update]);

  Utils.addEvent(
    "609050bcb7999a1ced1210f9",
    "name",
    "start",
    "end",
    "description"
  );
  // Add an event then increment update to trigger React to fetch data again.
  Utils.addEvent(
    USER_ID,
    "class",
    "2021-05-04T14:15:00 +07:00",
    "2021-05-04T15:15:00 +07:00",
    "description"
  );
  update++;

  // Get all events
  let events = Utils.getAllEvents(
    activeUser,
    Utils.formatDate(2021, 5, 3, 0, 0)
  );
  // Process events when activeUser promise has resolved
  if (events !== undefined && events.length > 0) {
    for (let i = 0; i < events.length; i++) {
      const e = events[i];
      console.log("On " + e.start + ", Oski started " + e.name);
    }
  }

  return <PageContainer page="Compare" pageContent={<CompareContent />} />;
}

function CompareContent() {
  return <Text>we comparing out here</Text>;
}

export default Compare;
