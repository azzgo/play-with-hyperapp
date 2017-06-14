import { h } from 'hyperapp'

export const Footer = (props) => {
  const filterType = props ? props.filterType: null;
  const go = props.action;
  return (
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> item left</span>
      <ul class="filters">
        <li>
          <a className={!filterType ? 'selected': null} href="#" onclick={() => go('/')}>All</a>
        </li>
        <li>
          <a className={filterType ===  'active' ? 'selected': null} href="#" onclick={() => go('/active')}>Active</a>
        </li>
        <li>
          <a className={filterType ===  'active' ? 'completed': null} href="#" onclick={() => go('/completed')}>Completed</a>
        </li>
      </ul>
      {/*<button class="clear-completed">Clear completed</button>*/}
    </footer>
  )
}

