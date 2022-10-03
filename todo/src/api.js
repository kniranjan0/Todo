// export function postTodo() {
//   return axios.post();
// }

import axios from "axios";

export function getTodes() {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks");
}

export function deleteTodo({ id }) {
  console.log(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`);
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "DELETE"
  });
}

export function addTodo({ title, status }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/`,
    method: "POST",
    data: {
      title,
      status
    }
  });
}

export function toggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
}
