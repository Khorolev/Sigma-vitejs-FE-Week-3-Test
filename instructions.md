### Todo List with Context 📝

#### Task:

Write a React application that manages a todo list using Context. Users should be able to add todo items.

#### Instructions:

1. **Create a Context:**

   - Define a Context with an initial state containing an array of `todos` and function `setTodos`.
   - **Files to Create:** `TodoContext.js`

2. **TodoList Component:**

   - Create a `TodoList` component that displays the list of todos from the context.
   - Add an input field and a button to add new todos.
   - Create a function that handles the add action and updates the `todos` array in the state.
   - When users add a todo, it updates the Context.
   - **File to Create:** `TodoList.jsx`

3. **App Component:**
   - Wrap the `App` component with the `Context`.
   - Render the `TodoList` component within the `App` component.
   - **File to Update:** `App.jsx`

#### Expected Interactions:

1. **Todo List Management:**
   - **Add Todo:** Users can type a todo in the input field and click "Add" to add it to the list.
