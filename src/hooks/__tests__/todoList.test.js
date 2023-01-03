import { renderHook } from '@testing-library/react-hooks'
import { useGetTodoList } from '../todoList'

describe('hooks useGetTodoList', () => {
  it('returns todo list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetTodoList())
    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()
    expect(Object.entries(result.current).length).toBe(3)
    expect(result.current.loading).toBe(false)
  })
})
