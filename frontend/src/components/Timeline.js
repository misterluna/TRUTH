import React from "react";
import {
  Box,
  VStack,
  HStack,
  StackDivider,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import ActivityColors from "./assets/ActivityColors.js";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

function dateStringToObj(s) {
  // 2021-04-29T12:15:00 +07:00
  let newDate = new Date();

  newDate.setFullYear(s.substring(0, 4));
  newDate.setMonth(parseInt(s.substring(5, 7)) - 1);
  newDate.setDate(s.substring(8, 10));
  newDate.setHours(
    s.substring(11, 13),
    s.substring(14, 16),
    s.substring(17, 19)
  );

  return newDate;
}

function getEarliestHour(data) {
  // let startHourOnly = data.map((item) => {
  //   console.log(item.start);
  //   dateStringToObj(item.start);
  // });
  // console.log(startHourOnly);
  // let minObj = Math.min(...startHourOnly);
  // console.log("---- MIN OBJ: " + minObj);
  return 7;
}

function getLatestHour(data) {
  // let endHourOnly = data.map((item) => dateStringToObj(item.end));
  // return Math.max(...endHourOnly).getHours();
  return 23;
}

function getColor(activityName) {
  console.log(
    "Name: " + activityName + " Color: " + ActivityColors[activityName]
  );
  return ActivityColors[activityName];
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function makeDateText(pageDate) {
  return (
    (pageDate.getMonth() + 1).toString() + "/" + pageDate.getDate().toString()
  );
}

function Timeline({ data, pageDate, setDateRelative }) {
  /* --- Layout Setup --- */
  const totalH = "auto";
  const topMinH = "30px";
  const topH = "40px";
  const botH = "auto";

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

  function getChartRange(data) {
    let earliest = getEarliestHour(data);
    let latest = getLatestHour(data);

    if (earliest > 0) earliest--;
    if (latest < 24) latest++;

    return [earliest, latest];
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
    const [chartStart, chartEnd] = getChartRange(data);
    const timeLabels = generateTimeLabels(chartStart, chartEnd);
    console.log(nameIndexList);
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
        <HStack h={topH} minH={topMinH}>
          {/* <IconButton icon={<Icon as={AiOutlineLeft} />} /> */}
          <Text
            fontSize="md"
            h={topH}
            minH={topMinH}
            transform="translateY(10px)"
          >
            {makeDateText(pageDate)}
          </Text>
        </HStack>

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
              {capitalize(item.name)}
            </Text>
          ))}
        </VStack>
      </VStack>
    );
  }

  let masterH = "550px";

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
        <Box flexGrow="1" overflowY="scroll" h={masterH}>
          <Right />
        </Box>
      </HStack>
    </Box>
  );
}

function TimelineChart({ data, nameIndexList, chartStart, chartEnd }) {
  const xPixelOffset = 112; // start * xPixelOffset
  const yPixelOffset = 37; // activityIndex * yPixelOffset

  function getIndex(activityName) {
    let result = nameIndexList.filter((obj) => {
      return obj.name === activityName;
    });
    return result[0].index;
  }

  function timeStrToDecimal(s) {
    console.log(s);
    let hr = parseInt(s.substring(11, 13));
    let min = parseInt(s.substring(14, 16)) / 60;
    console.log(hr + min);
    return hr + min;
  }

  return (
    <Box position="relative">
      {data.map((obj) => {
        const index = getIndex(obj.name);

        let xOffset =
          xPixelOffset * (timeStrToDecimal(obj.start) - chartStart) + 56;
        if (chartStart !== 0) xOffset += xPixelOffset;

        const yOffset = yPixelOffset * index + 14;
        return (
          <EventLine
            start={timeStrToDecimal(obj.start)}
            end={timeStrToDecimal(obj.end)}
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
