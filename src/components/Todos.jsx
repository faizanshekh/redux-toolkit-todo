import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  if (todos.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-white/10 bg-white/5 px-6 py-10 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-300">No tasks yet</p>
        <p className="text-xs text-slate-500">Add your first task above to get started.</p>
      </div>
    )
  }

  return (
    <>
      <ul className="mt-6 list-none space-y-3">
        {todos.map((todo) => (
          <li
            className="animate-todo-in group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition duration-200 hover:border-white/10 hover:bg-white/10"
            key={todo.id}
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shadow-sm shadow-indigo-500/50"
            />
            <span className="flex-1 break-words text-sm text-slate-100">{todo.text}</span>
            <button
              aria-label={`Delete task: ${todo.text}`}
              onClick={() => dispatch(removeTodo(todo.id))}
              className="shrink-0 rounded-xl p-2 text-slate-500 transition duration-200 hover:bg-red-500/10 hover:text-red-400 focus:outline-none focus:ring-4 focus:ring-red-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500">
        <span>
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          Redux Toolkit
        </span>
      </div>
    </>
  )
}

export default Todos
