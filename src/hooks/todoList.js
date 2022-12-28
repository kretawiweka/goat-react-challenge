import { useEffect, useState } from 'react'
import { getTodoList, postTodoList } from '../api'

export const useGetTodoList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchTodoList = async () => {
    setLoading(true)
    try {
      const res = await getTodoList()
      setData(res)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodoList()
  }, [])

  return {
    fetchTodoList,
    loading,
    data,
  }
}

export const usePostTodoList = (task) => {
  const [error, setError] = useState('')
  console.log('use task', task)

  const postTodoListItem = async () => {
    try {
      const res = await postTodoList(task)
      return res
    } catch (err) {
      console.error(err)
      setError(err)
    }
  }

  return {
    postTodoListItem,
    error,
  }
}
