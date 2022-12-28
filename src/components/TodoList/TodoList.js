import { Container } from '../../components'
import './todolist.css'

export const TodoList = () => {
  return (
    <Container>
      <div className="todolist">
        <h1>TODO LIST</h1>
        <form className="add-form">
          <div className="field">
            <input className="input-todo" placeholder="Task name" />
          </div>
          <button className="submit-btn" type="submit">
            Add
          </button>
        </form>
        <div className="todolist__items">
          <div className="todolist__item">
            <div className="item">Finish an interview</div>
            <button className="action-item">Delete</button>
          </div>
          <div className="todolist__item">
            <div className="item">Finish an interview</div>
            <button className="action-item">Delete</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
