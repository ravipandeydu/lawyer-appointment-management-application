import {
  Box,
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

const AppointmentHistory = ({ lawyer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen} fontSize={"20px"}>
        Check Appointment History
      </Button>

      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{lawyer.name} Complete History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr bg={"teal"}>
                    <Th color="white">Date</Th>
                    <Th color="white">Slots</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.keys(lawyer.appointments).map((appointment) => (
                    <Tr m={2}>
                      <Td>{appointment}</Td>
                      <Td>
                        <Wrap>
                          {lawyer.appointments[appointment].map((slot) => (
                            <Button m={2}>{slot}</Button>
                          ))}
                        </Wrap>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentHistory;
