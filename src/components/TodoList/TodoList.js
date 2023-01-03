import { useState } from 'react'
import PropTypes from 'prop-types'
import { useGetTodoList } from '../../hooks'
import { postTodoList, deleteTodoList } from '../../api'
import { Container } from '../../components'
import './todolist.css'

export const TodoListItem = ({ loading, data, handleDelete }) => {
  if (loading) {
    return <h3 data-testid="loading-task">Loading ...</h3>
  }

  if (data?.length === 0) {
    return <h3>Empty</h3>
  }

  return (
    <div className="todolist__items" data-testid="todo-list-item-container">
      {data?.map((item, index) => (
        <div
          className="todolist__item"
          key={index}
          data-testid="todo-list-item"
        >
          <div className="item">{item.title}</div>
          <button
            className="action-item"
            onClick={() => {
              handleDelete(item.id)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

TodoListItem.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  handleDelete: PropTypes.func,
}

export const TodoList = () => {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')
  const { fetchTodoList, loading, data } = useGetTodoList()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await postTodoList(task)
      if (res) {
        fetchTodoList()
        setTask('')
      }
    } catch (err) {
      console.error(err)
      setError(err)
    }
  }

  const handleDelete = async (taskId) => {
    try {
      const res = await deleteTodoList(taskId)
      if (res) {
        fetchTodoList()
      }
    } catch (err) {
      console.error(err)
      setError(err)
    }
  }

  return (
    <Container data-testid="todo-list">
      <div className="todolist">
        <h1>TODO LIST</h1>
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              value={task}
              className="input-todo"
              placeholder="Task name"
              aria-label="add-task-input"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
        {error && <h4>Error</h4>}
        <TodoListItem
          loading={loading}
          data={data}
          handleDelete={handleDelete}
        />
      </div>
    </Container>
  )
}
