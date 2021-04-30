import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

/*
    --- TODO: Implement handleAdd, a function called when the form is submitted
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

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalContent>
          <ModalHeader fontWeight="light">Add New Activity</ModalHeader>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddActivity;
