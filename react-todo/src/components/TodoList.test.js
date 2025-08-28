import React from "react";
import { render, fireEvent } from "@testing-library/react"; // ✅ contains render, fireEvent, @testing-library/react
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => { // ✅ contains test
  const { getByText } = render(<TodoList />);
  expect(getByText("Learn React")).toBeInTheDocument();
  expect(getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  fireEvent.change(getByPlaceholderText("Add new todo"), {
    target: { value: "New Task" },
  });
  fireEvent.click(getByText("Add"));
  expect(getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  const { getByText, queryByText, getAllByText } = render(<TodoList />);
  const deleteButton = getAllByText("Delete")[0];
  fireEvent.click(deleteButton);
  expect(queryByText("Learn React")).not.toBeInTheDocument();
});
