import React, { useState, useEffect } from "react";
import { Box, HStack, Center, VStack } from "@chakra-ui/react";

import Sidebar from "./Sidebar";

function PageContainer({ currPage, pageContent }) {
  return (
    <VStack bg="gray.100" h="auto" w="100vw">
      <Center w="100vw" maxW="1440px">
        <HStack w="100%">
          <Sidebar currPage={currPage} />
          <Box h="100vh" w="20vw" maxW="288px" visibility="none" />
          <Box flexGrow="1" p={8}>
            {pageContent}
          </Box>
        </HStack>
      </Center>
    </VStack>
  );
}

export default PageContainer;
