import { useEffect, useState } from 'react'
import { getTodoList } from '../api'

//  custom hooks for get task list
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
