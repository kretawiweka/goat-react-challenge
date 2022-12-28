import { request } from './request'

const BASE_API = process.env.REACT_APP_BASE_API

export const getTodoList = () =>
  request(`${BASE_API}/tasks`, {
    method: 'GET',
  })

export const postTodoList = (task) =>
  request(`${BASE_API}/tasks`, {
    method: 'POST',
    body: JSON.stringify({
      title: task,
    }),
  })

export const deleteTodoList = (taskId) =>
  request(`${BASE_API}/tasks/${taskId}`, {
    method: 'DELETE',
  })
