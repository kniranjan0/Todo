import { Box, Button, Flex, Text } from "@chakra-ui/react";

function TodoItem({ title, id, status, handleDelete, handleToggle }) {
  return (
    <Box
      w="90%"
      m="auto"
      style={{
        gap: "2rem",
        justifyContent: "space-between",
        marginBottom: "0.25rem",
      }}
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize="2xl">
            <b>{id}</b>
          </Text>
        </Box>
        <Box>
          <Text fontSize="2xl">
            <b>{title}</b>
          </Text>
        </Box>
        <Box>
          <Button bg="lightblue" onClick={() => handleToggle(id, !status)}>
            {status ? "Done" : "NOT DONE"}
          </Button>
        </Box>
        <Box>
          <Button bg="#F70D1A" onClick={() => handleDelete(id)}>
            DELETE
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default TodoItem;
