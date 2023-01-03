import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { TodoListItem, TodoList } from '../TodoList'

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
  it('must have correct number of task items', () => {
    const { getAllByTestId } = render(
      <TodoListItem data={tasks} loading={false} handleSubmit={() => {}} />,
    )
    const items = getAllByTestId('todo-list-item')
    expect(items).toHaveLength(3)
  })
  it('must loading when loading props is true', () => {
    const { getByTestId } = render(
      <TodoListItem data={tasks} loading={true} handleSubmit={() => {}} />,
    )
    const items = getByTestId('loading-task').textContent
    expect(items).toEqual('Loading ...')
  })
})

describe('TodoList component', () => {
  it('add task in todo list', async () => {
    render(<TodoList />)

    const input = screen.getByLabelText('add-task-input')
    await waitFor(() =>
      expect(
        screen.getByTestId('todo-list-item-container'),
      ).toBeInTheDocument(),
    )
    const items = screen.getAllByTestId('todo-list-item')
    const initItemsLength = items.length
    const task = 'Test add task from component'

    // fill "add task" input
    fireEvent.change(input, { target: { value: task } })
    expect(input.value).toBe(task)

    // click button submit "Add"
    fireEvent.click(
      screen.getByRole('button', {
        name: /Add/i,
      }),
    )

    await waitFor(() =>
      //  make sure item task length is increases
      expect(screen.getAllByTestId('todo-list-item')).toHaveLength(
        initItemsLength + 1,
      ),
    )
  })
})
