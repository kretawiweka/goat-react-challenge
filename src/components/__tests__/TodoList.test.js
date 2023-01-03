import { render } from '@testing-library/react'
import { TodoListItem } from '../TodoList'

const tasks = [
  {
    id: 1,
    title: 'Finish an interview',
  },
  {
    id: 2,
    title: 'Study React',
  },
  {
    id: 3,
    title: 'Submit a test result',
  },
]

describe('TodoListItem component ', () => {
  it('TodoListItem must have correct number of task items', async () => {
    const { getAllByTestId } = render(
      <TodoListItem data={tasks} loading={false} handleSubmit={() => {}} />,
    )
    const items = getAllByTestId('todo-list-item')
    expect(items).toHaveLength(3)
  })
  it('TodoListItem must loading when loading props is true', async () => {
    const { getByTestId } = render(
      <TodoListItem data={tasks} loading={true} handleSubmit={() => {}} />,
    )
    const items = getByTestId('loading-task').textContent
    expect(items).toEqual('Loading ...')
  })
})
