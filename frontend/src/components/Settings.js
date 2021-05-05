import React, { useState } from "react";
import {
  HStack,
  Box,
  Heading,
  Text,
  VStack,
  StackDivider,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  IconButton,
} from "@chakra-ui/react";

import PageContainer from "./PageContainer";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

/*
    --- TODO: Get rid of minH... might mess up for small screens ---
*/

function Settings() {
  return (
    <>
      <PageContainer currPage="Settings" pageContent={<SettingsContent />} />
    </>
  );
}

function SettingsContent() {
  return (
    <>
      <VStack alignItems="flex-start" spacing={8}>
        <Heading fontWeight="light" size="xl">
          Settings
        </Heading>
        <Box bg="white" py={4} px={8} w="100%">
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Security</Tab>
              <Tab>Privacy</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ProfileTab />
              </TabPanel>
              <TabPanel>
                <SecurityTab />
              </TabPanel>
              <TabPanel>
                <PrivacyTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </>
  );
}

var settingsData = {
  profile: {
    name: "",
    dob: "",
    occupation: "",
  },
  security: {
    email: "",
    username: "",
    password: "",
  },
  privacy: {},
};

function ProfileTab() {
  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <SettingsItem title="Name" defaultVal="Connor Harrington" />
        <SettingsItem title="Date of Birth" defaultVal="Nov. 3, 1999" />
        <SettingsItem title="Occupation" defaultVal="N.E.E.T." />
      </VStack>
    </>
  );
}

function SecurityTab() {
  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <SettingsItem title="Email" defaultVal="csharrington@berkeley.edu" />
        <SettingsItem title="Username" defaultVal="i_need_sleep_03" />
        <SettingsItem title="Password" defaultVal="password123" />
      </VStack>
    </>
  );
}

function PrivacyTab() {
  return (
    <>
      <VStack divider={<StackDivider borderColor="gray.200" />}></VStack>
    </>
  );
}

function SettingsItem({ title, defaultVal }) {
  const [currVal, setCurrVal] = useState(defaultVal);

  if (title === "Password") {
    return <PasswordSettingItem defaultVal={defaultVal} />;
  }

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} width="100%">
        <GridItem colSpan={1}>
          <Text fontWeight="semibold">{title}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>{currVal}</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text align="right">Edit</Text>
        </GridItem>
      </Grid>
    </>
  );
}

function PasswordSettingItem({ defaultVal }) {
  const [currVal, setCurrVal] = useState(defaultVal);
  const [passShown, setPassShown] = useState(false);

  const togglePassShown = () => {
    let newState = !passShown;
    setPassShown(newState);
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} width="100%">
        <GridItem colSpan={1}>
          <Text fontWeight="semibold">Password</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack w="100%" h="100%">
            {passShown ? (
              <IconButton
                aria-label="Hide password"
                icon={<Icon as={AiFillEye} />}
                onClick={togglePassShown}
                size="xs"
                variant="ghost"
              />
            ) : (
              <IconButton
                aria-label="Show password"
                icon={<Icon as={AiFillEyeInvisible} />}
                onClick={togglePassShown}
                size="xs"
                variant="ghost"
              />
            )}
            <Text>{passShown ? currVal : "**********"}</Text>
          </HStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Text align="right">Edit</Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default Settings;
