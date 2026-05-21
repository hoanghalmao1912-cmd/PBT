// DOM Elements
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const filters = document.getElementById("filters");
const clearCompletedBtn = document.getElementById("clearCompleted");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Utilities
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
};

// Render
const render = () => {
  todoList.textContent = ""; // Clear list

  let filteredTodos = todos;
  if (currentFilter === "active")
    filteredTodos = todos.filter((t) => !t.completed);
  if (currentFilter === "completed")
    filteredTodos = todos.filter((t) => t.completed);

  filteredTodos.forEach((todo) => {
    // Tạo element bằng createElement
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add("completed");

    const spanText = document.createElement("span");
    spanText.className = "text";
    spanText.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "×";

    li.appendChild(spanText);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });

  // Update đếm số lượng
  const activeCount = todos.filter((t) => !t.completed).length;
  todoCount.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
};

// Add Todo
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    todos.push({ id: Date.now(), text, completed: false });
    todoInput.value = "";
    saveTodos();
  }
});

// Event Delegation cho TodoList (Toggle, Delete, Edit)
todoList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  // Xóa Todo
  if (e.target.classList.contains("delete-btn")) {
    todos = todos.filter((t) => t.id !== id);
    saveTodos();
  }

  // Toggle Completed
  if (e.target.classList.contains("text")) {
    const todo = todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    saveTodos();
  }
});

// Edit Todo (Double Click)
todoList.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("text")) {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);
    const todo = todos.find((t) => t.id === id);

    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = todo.text;

    li.textContent = ""; // Xóa nội dung li để chèn input
    li.appendChild(input);
    input.focus();

    const saveEdit = () => {
      const newText = input.value.trim();
      if (newText) {
        todo.text = newText;
      } else {
        todos = todos.filter((t) => t.id !== id); // Nếu rỗng thì xóa luôn
      }
      saveTodos();
    };

    input.addEventListener("blur", saveEdit);
    input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        input.blur();
      } else if (ev.key === "Escape") {
        render(); // Hủy edit
      }
    });
  }
});

// Event Delegation cho Filters
filters.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.filter;
    render();
  }
});

// Clear Completed
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
});

// Init
render();
