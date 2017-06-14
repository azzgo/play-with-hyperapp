import { h } from 'hyperapp'


export const TodoItem = ({completed = false, value, actions}) => {
  return (
    <li className={completed ? 'completed': null}>
      <div class="view">
        <input class="toggle" type="checkbox" checked={completed} onchange={() => actions.toggle()}/>
        <label>{value}</label>
        <button class="destroy" onclick={() => actions.del()}></button>
      </div>
    </li>
  )
}