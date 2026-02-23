import { useState, useEffect } from "react";
import "./App.css";
import { EmptyStateMessage } from "./components/EmptyState";
import { TodoItem } from "./components/TodoList";
import { TodoSubmit } from "./components/TodoForm";
import { FilterTodos } from "./components/FilterBar";

export const App = () => {
  const [todos, setTodo] = useState(() => {
    try {
      let savedTodos = JSON.parse(localStorage.getItem("todos"));
      return savedTodos || [];
    } catch (error) {
      console.log("Caught Error:", error);
      return [];
    }
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let filteredTodos = todos.filter((todo) => {
    if (filter == "all") return todo;
    if (filter == "active") return !todo.isCompleted;
    if (filter == "completed") return todo.isCompleted;
  });

  let addingTodo = (value) => {
    let todoObj = {
      id: crypto.randomUUID(),
      text: value,
      isCompleted: false,
    };
    setTodo([...todos, todoObj]);
  };

  let handleToggle = (id) =>
    setTodo(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  let handleDelete = (id) => setTodo(todos.filter((item) => item.id != id));

  return (
    <>
      <section className="app-container">
        <header>
          <h1>TO-DO App</h1>
        </header>
        <main>
          <TodoSubmit addingTodo={addingTodo} />
          <FilterTodos setFilter={setFilter} />
          <section className="todos-list">
            {todos.length === 0 ? (
              <EmptyStateMessage />
            ) : (
              <TodoItem
                filteredTodos={filteredTodos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            )}
          </section>
        </main>
      </section>
    </>
  );
};
