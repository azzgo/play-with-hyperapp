import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import { h, app, Router } from 'hyperapp'

import { App } from './App'

app({
  state: {
    todos: [],
  },
  view: {
    "/": (state, actions) => (
      <div>
        <App todos={state.todos} actions={actions}></App>
        <footer class="info">
          <p>Double-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">Azzgo</a></p>
          <p>Base On Tech <a href="https://github.com/hyperapp/hyperapp">HyperApp</a></p>
        </footer>
      </div>
    ),
    "/:filterType": (state, actions) => (
      <div>
        <App todos={state.todos} filterType={state.router.params.filterType} actions={actions}></App>
        <footer class="info">
          <p>Double-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">Azzgo</a></p>
          <p>Base On Tech <a href="https://github.com/hyperapp/hyperapp">HyperApp</a></p>
        </footer>
      </div>
    ),
  },
  events: {
  },
  actions: {
    addTodo: (state, actions, value) => {
      return {
        todos: state.todos.concat([{
          value,
          completed: false,
        }])
      };
    },
    delTodo: (state, actions, key) => {
      return {
        todos: state.todos.filter((todo, index) => index !== key)
      };
    },
    toggleTodo: (state, action, key) => {
      return {
        todos: state.todos.map((todo, index) => {
          if (key === index) {
            return {
              value: todo.value,
              completed: !todo.completed,
            }
          }
        })
      };
    }
  },
  plugins: [Router],
  root: document.body
})
