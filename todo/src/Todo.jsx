import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { deleteTodo, getTodes, toggleTodoStatus, addTodo } from "./api";
import TodoItem from "./TodoItem";

function Todo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleGetTodes();
  }, []);
  function handleGetTodes() {
    setLoading(true);
    setError(false);
    getTodes()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }
  function handleDelete(id) {
    // console.log("id: +++++ " + id)
    setLoading(true);
    deleteTodo({ id: id })
      .then(() => {
        handleGetTodes();
      })
      .catch((reason) => {
        console.log("fail to delete due to " + reason);
      });
  }

  function handleAdd(title) {
    setLoading(true);
    addTodo({
      title,
      status: false
    }).then(() => handleGetTodes());
  }

  function handleToggle(id, newStatus) {
    setLoading(true);
    toggleTodoStatus({ id, newStatus }).then(() => handleGetTodes());
  }
  return (
    <>
      {loading && <Box w="5rem" m="auto" pb="2rem"><Image src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" /></Box>}
      {error && <div>...error</div>}
      <AddTodo handleAdd={handleAdd} handleToggle={handleToggle} />
      <Box>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          >
            {item.title}
          </TodoItem>
        ))}
      </Box>
    </>
  );
}

export default Todo;
