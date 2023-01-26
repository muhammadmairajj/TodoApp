import React, { useState } from "react";
import {
  Input,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  HStack,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  // const [isOpen,setIsOpen] = useState(false);

  function onClose() {
    // setIsOpen(false);
    setIsEditMode(false);
  }

  // add Todo:
  const addTodo = () => {
    // console.log("text -->", text);
    // 1) for changing reference
    const tempList = [...todoList];
    // 2) push value in array
    tempList.push(text);
    setTodoList(tempList);
    setText("");
  };

  // Delete Todo:
  const deleteTodo = (index) => {
    // 1) for changing reference
    const tempList = [...todoList];
    // 2) for delete value we used splice() method which take two parameters one is index
    // second is how many delete item from array.
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  // Edit Todo:
  const editTodo = (index) => {
    // 1) value place in input text box.
    setText(todoList[index]);
    // 2) add button change in update button.
    setIsEditMode(true);
    // 3) we need index for update value.
    setEditIndex(index);
  };

  // Update Todo:
  const updateTodo = () => {
    // 1) updated input value replace from index means replace hojhe us ka index per
    const tempList = [...todoList]; // for changing reference
    tempList[editIndex] = text; // Here, update input value replace from index
    setTodoList(tempList);
    // 2) Now, update button change in add button.
    setIsEditMode(false);
    // 3) clear input text box value
    setText("");
    // 4) Change edit Index to null/undefined
    setEditIndex();
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={3}>
        <Box textAlign="center">
          <Heading>Add Todo</Heading>
        </Box>
        <Box my={6} textAlign="left">
          <FormControl>
            <FormLabel>Todo:</FormLabel>
            <Input
              type="text"
              placeholder="Type any task here!"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
          {isEditMode === true ? (
            <Modal isOpen={setIsEditMode} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Your Todo</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={updateTodo}>
                  <ModalBody>
                    <Input
                      value={text}
                      variant="outline"
                      type="text"
                      placeholder="Update your todo..."
                      onChange={(e) => setText(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button type="submit" colorScheme="green" mr={3}>
                      Update
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
          ) : (
            <Button width="full" colorScheme="blue" mt={4} onClick={addTodo}>
              Add
            </Button>
          )}
        </Box>

        <VStack>
          {todoList.map((todo, index) => (
            <HStack spacing="24px" w="320px">
              <Flex p={6} w="300px" h="50px" justifyContent="space-between">
                <Text>{todo}</Text>

                <Flex w="10px">
                  <DeleteIcon
                    color="red.500"
                    mr="2"
                    onClick={() => deleteTodo(index)}
                  />
                  <EditIcon onClick={() => editTodo(index)} />
                </Flex>
              </Flex>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default AddTodo;
