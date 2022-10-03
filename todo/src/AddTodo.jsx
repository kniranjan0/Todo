import { Box, Input,Button,Flex } from "@chakra-ui/react";
import { useState } from "react";
// import TodoItem from "./TodoItem"

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <Box w="50%" m="auto" pb="2rem">
      <Flex justifyContent="space-between">
      <Input pl="1rem" variant='flushed' value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add SomeThing"   />
      <Button bg="#25cf60" ml="1.5rem" p="1rem 4rem 1rem 4rem" onClick={() => handleAdd(text)}>Add</Button>
      </Flex>
    </Box>
  );
}

export default AddTodo;
