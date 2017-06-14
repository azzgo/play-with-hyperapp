import { h } from 'hyperapp'

import { TodoItem } from './TodoItem'
import { Footer } from './Footer'


export const App = (props, children) => {
  const { todos, filterType, actions } = props;
  let onChange = (event) => {
    actions.addTodo(event.target.value);
  }

  return (
    <div
      class="todoapp"
    >
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onchange={(event) => onChange(event)}
          autoFocus
        />
      </header>
      {
        todos.length > 0 ? (
          <section class="main">
            <input class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
              {
                todos.filter(todo => {
                  switch (filterType) {
                    case 'active':
                      return !todo.completed;
                    case 'completed':
                      return todo.completed;
                    default:
                      return true;
                  }
                }).map((todo, key) => (
                  <TodoItem actions={{ toggle: () => actions.toggleTodo(key), del: () => actions.delTodo(key) }} key={key} value={todo.value} completed={todo.completed} />
                ))
              }
            </ul>
            <Footer action={(url) => actions.router.go(url)} filterType={filterType} />
          </section>
        ) : ""
      }
    </div>
  )
}
