import React from "react";
import { Text } from "@chakra-ui/react";

import PageContainer from "./PageContainer";

function Compare() {
  return <PageContainer page="Compare" pageContent={<CompareContent />} />;
}

function CompareContent() {
  return <Text>we comparing out here</Text>;
}

export default Compare;
