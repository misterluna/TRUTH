import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import TimeField from "react-simple-timefield";

/*
  --- Store a list of activities, shown as options
  --- TODO: Currently to a default, do we want backend here??
*/
const defaultActivityList = [
  "Sleep",
  "Nature",
  "Study",
  "Socialize",
  "Eat",
  "Exercise",
];
let activityList = defaultActivityList;

/*
    --- TODO: Implement handleSubmit, a function called when the form is submitted
*/
function handleSubmit() {}

function AddActivity() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="blue"
        backgroundColor="blue.900"
        size="lg"
        borderRadius="100"
        onClick={onOpen}
      >
        + Add Activity
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay>
          <ModalContent p={4}>
            <ModalHeader fontWeight="light">Add New Activity</ModalHeader>
            <ActivityForm closeModal={onClose} />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}

function ActivityForm({ closeModal }) {
  const [activity, setActivity] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [memo, setMemo] = useState("");

  function handleSubmit() {
    /*
      --- Connect to backend, send in object
    */
  }

  function canSubmit() {
    return activity && timeFrom && timeTo && memo;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack>
          <HStack>
            {/* --- Activity Selector --- */}
            <Select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Select Activity"
            >
              {activityList.map((item) => {
                let value = item.replace(/ /g, "_");
                return <option value={value}>{item}</option>;
              })}
            </Select>

            {/* --- Time Selector: From --- */}
            <HStack>
              <Text>From</Text>
              <TimeField
                value={timeFrom}
                onChange={(e) => setTimeFrom(e.target.value)}
                input={<Input textAlign="center" />}
              />

              {/* --- Time Selector: To --- */}

              <Text>To</Text>
              <TimeField
                value={timeTo}
                onChange={(e) => setTimeTo(e.target.value)}
                input={<Input textAlign="center" />}
              />
            </HStack>
          </HStack>

          {/* --- Memo Input --- */}
          <Textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Memo"
            resize="none"
            h="10em"
            maxLength={300}
          ></Textarea>
          <HStack w="100%" spacing={4} justifyContent="flex-end">
            <Button size="sm" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              type="submit"
              isDisabled={!canSubmit()}
            >
              Done
            </Button>
          </HStack>
        </VStack>
      </form>
    </>
  );
}

export default AddActivity;
