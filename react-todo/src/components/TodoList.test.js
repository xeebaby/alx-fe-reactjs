import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test("can add a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add todo/i), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Build a Todo App/i);
  fireEvent.click(screen.getAllByText(/Delete/i)[0]); // delete first delete button
  expect(todo).not.toBeInTheDocument();
});