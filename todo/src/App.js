import "./styles.css";
import Todo from "./Todo";
import { Box, Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <Box className="App">
      <Heading as="h2" size="xl" pt="1rem" pb="2rem">
        Todo
      </Heading>
      <Todo />
    </Box>
  );
}
