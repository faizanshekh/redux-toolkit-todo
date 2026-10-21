# Redux Toolkit Todo

A compact task-list app built with React and Redux Toolkit. Add tasks, remove them, and see the current task count in a responsive dark UI.

## Features

- Add a task using the form; blank or whitespace-only entries are ignored.
- Remove a task from the list.
- Redux Toolkit slice and store manage the task state.
- Empty state and task-count display.
- Tailwind CSS styling with responsive layout.

The app starts with a sample `Hello World` task. Tasks are held in Redux state only, so they reset when the page is refreshed.

## Tech stack

- React 19
- Redux Toolkit and React Redux
- Vite
- Tailwind CSS

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
git clone https://github.com/faizanshekh/redux-toolkit-todo.git
cd redux-toolkit-todo
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Limitations

- Task data is not saved to local storage or a backend, so refreshing the page resets the list.
- Tasks can be added and removed; editing, completion status, filters, and persistence are not implemented.
- No automated tests are currently configured.
