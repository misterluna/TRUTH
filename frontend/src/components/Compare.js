import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Utils from "../Utils";
import PageContainer from "./PageContainer";

function Compare() {
  // Create the activeUser state hook for calling Utils.get methods.
  // Only use activeUser for get methods. When calling a set method in Utils,
  // use the userId only and increment update after. This is to prevent infinite loops.
  const USER_ID = Utils.login();
  let update = 0;

  const [activeUser, setActiveUser] = useState([]);
  useEffect(() => {
    const getAsyncInfo = async () => {
      const res = await Utils.getUser(USER_ID);
      setActiveUser(res);
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

  // GET ALL EVENTS

  let events = Utils.getAllEvents(
    activeUser,
    Utils.formatDate(2021, 5, 3, 0, 0)
  );
  console.log("List of Events: ", events);
  if (events !== undefined && events.length > 0) {
    for (const e in events){
      const category = e.category;
      const start = e.start;
      const end = e.end;
      const duration = e.duration;
      const description  = e.description;
  
      console.log("On " + start + ", Oski started " + category);
    }
  }
  
  return <PageContainer page="Compare" pageContent={<CompareContent />} />;
}

function CompareContent() {
  return <Text>we comparing out here</Text>;
}

export default Compare;
