import React from "react";
import { Box, VStack, HStack, StackDivider, Text } from "@chakra-ui/react";

import ActivityColors from "./assets/ActivityColors.js";

const defaultData = [
  {
    name: "Sleep",
    start: 6,
    end: 7,
    memo: "",
  },
  {
    name: "Outdoors",
    start: 7,
    end: 8,
    memo: "",
  },
  {
    name: "Study",
    start: 8,
    end: 10,
    memo: "",
  },
  {
    name: "Socialize",
    start: 10,
    end: 12,
    memo: "",
  },
  {
    name: "Eat",
    start: 12,
    end: 13,
    memo: "",
  },
  {
    name: "Exercise",
    start: 13,
    end: 16,
    memo: "",
  },
];

const dateText = "5/4";

function makeActivityList(data) {
  let activityList = [];
  let count = 0;

  data.forEach((item) => {
    if (!activityList.includes(item.name)) {
      activityList.push({ name: item.name, index: count });
      count++;
    }
  });

  return activityList;
}

function getEarliestHour(data) {
  let startHourOnly = data.map((item) => item.start);
  return Math.min(...startHourOnly);
}

function getColor(activityName) {
  console.log(
    "Name: " + activityName + " Color: " + ActivityColors[activityName]
  );
  return ActivityColors[activityName];
}

function Timeline({ data }) {
  /* --- Layout Setup --- */
  const totalH = "330px";
  const topMinH = "30px";
  const topH = "40px";
  const botH = "222px";

  /* --- Data + Variables Setup --- */
  if (!data) data = defaultData;
  const nameIndexList = makeActivityList(data);
  const firstHour = getEarliestHour(data);

  function TimeLabel({ text }) {
    return (
      <VStack w="80px" transform="translateY(10px)">
        <Text fontSize="sm">{text}</Text>
        <Box w="4px" h="5px" bg="gray.100" transform="translateY(2px)" />
      </VStack>
    );
  }

  function generateTimeLabels(min, max) {
    let timeLabels = [];
    for (let i = min; i < max + 1; i++) {
      const label = (i < 10 ? "0" : "") + i.toString() + ":00";
      timeLabels.push(label);
    }
    return timeLabels;
  }

  function Right() {
    const timeLabels = generateTimeLabels(6, 24);
    return (
      <VStack
        alignItems="flex-start"
        h="100%"
        divider={<StackDivider borderColor="gray.100" />}
      >
        <HStack spacing={8} h={topH} px={4}>
          {timeLabels.map((item) => (
            <TimeLabel text={item} />
          ))}
        </HStack>
        <Box flexGrow="1" h={botH} w="1370px" bg="white">
          {/* Insert lines here... oof */}
          <TimelineChart
            data={data}
            chartStart={firstHour}
            nameIndexList={nameIndexList}
          />
        </Box>
      </VStack>
    );
  }

  function Left() {
    return (
      <VStack h="100%" divider={<StackDivider borderColor="gray.100" />}>
        {/* --- LEFT TOP --- */}
        <Text
          fontSize="md"
          h={topH}
          minH={topMinH}
          transform="translateY(10px)"
        >
          {dateText}
        </Text>

        {/* --- LEFT BOTTOM --- */}
        <VStack
          w="100%"
          h={botH}
          alignItems="flex-start"
          spacing={4}
          px={2}
          pb={4}
          pt={2}
        >
          {nameIndexList.map((item) => (
            <Text fontSize="sm" h="30px" w="">
              {item.name}
            </Text>
          ))}
        </VStack>
      </VStack>
    );
  }

  return (
    <Box bg="white" p={4} w="100%" h={totalH}>
      <HStack
        justifyContent="flex-start"
        alignItems="flex-start"
        border="2px"
        borderColor="gray.100"
        divider={<StackDivider borderColor="gray.100" m={0} />}
      >
        <Box>
          <Left />
        </Box>
        <Box flexGrow="1" overflowY="scroll">
          <Right />
        </Box>
      </HStack>
    </Box>
  );
}

function TimelineChart({ data, nameIndexList, chartStart }) {
  const xPixelOffset = 112; // start * xPixelOffset
  const yPixelOffset = 37; // activityIndex * yPixelOffset

  const getIndex = (activityName) => {
    let result = nameIndexList.filter((obj) => {
      return obj.name === activityName;
    });
    return result[0].index;
  };

  return (
    <Box position="relative">
      {data.map((obj) => {
        const index = getIndex(obj.name);
        const xOffset = xPixelOffset * (obj.start - chartStart) + 56;
        const yOffset = yPixelOffset * index + 14;
        return (
          <EventLine
            start={obj.start}
            end={obj.end}
            color={getColor(obj.name)}
            left={xOffset.toString() + "px"}
            top={yOffset.toString() + "px"}
          />
        );
      })}
    </Box>
  );
}

function EventLine({ start, end, color, top, left }) {
  const lenRatio = 112;
  const timeLen = end - start;
  const lineH = "8px";
  const lineW = (timeLen * lenRatio).toString() + "px";

  return (
    <Box
      h={lineH}
      w={lineW}
      bg={color}
      position="absolute"
      top={top}
      left={left}
    />
  );
}

export default Timeline;
