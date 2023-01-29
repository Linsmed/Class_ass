//create an empty array that will hold the todo items
let todoList = [];
// This function will create a new todo object based on the
// text that was entered in the text input, and push it into
// the `todoItems` array
function addTodo(text) {
  const todo = {
    text,
    isComplete: false,
    id: Math.floor(Math.random() * 15),
  };

  todoList.push(todo);
  console.log(todoList);
}

// Select the form element
const form = document.querySelector(".js-form");
// Add a submit event listener
form.addEventListener("submit", (event) => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector(".js-todo-input");

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});
function renderTodo(todo) {
  // Select the first element with a class of `js-todo-list`
  const list = document.querySelector(".js-todo-list");

  // Use the ternary operator to check if `todo.checked` is true
  // if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
  const isComplete = todo.complete ? "done" : "";
  // Create an `li` element and assign it to `node`
  const node = document.createElement("li");
  // Set the class attribute
  node.setAttribute("class", `todo-item ${isComplete}`);
  // Set the data-key attribute to the id of the todo
  node.setAttribute("data-key", todo.id);
  // Set the contents of the `li` element created above
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  // Append the element to the DOM as the last child of
  // the element referenced by the `list` variable
  list.append(node);
}

function addTodo(text) {
  const todo = {
    text,
    isComplete: false,
    id: Math.floor(Math.random() * 15),
  };

  todoList.push(todo);
  renderTodo(todo);
}

// Select the entire list
const list = document.querySelector(".js-todo-list");
// Add a click event listener to the list and its children
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});
function toggleDone(key) {
  // findIndex is an array method that returns the position of an element
  // in the array.
  const index = todoList.findIndex((item) => item.id === Number(key));
  // Locate the todo item in the todoItems array and set its checked
  // property to the opposite. That means, `true` will become `false` and vice
  // versa.
  todoList[index].complete = !todoList[index].complete;
  renderTodo(todoList[index]);
}
function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");
  // select the current todo item in the DOM
  const item = document.querySelector(`[data-key='${todo.id}']`);

  const isComplete = todo.complete ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isComplete}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  // If the item already exists in the DOM
  if (item) {
    // replace it
    list.replaceChild(node, item);
  } else {
    // otherwise append it to the end of the list
    list.append(node);
  }
}
list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  // add this `if` block
  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

function deleteTodo(key) {
  // find the corresponding todo object in the todoItems array
  const index = todoList.findIndex((item) => item.id === Number(key));
  // Create a new object with properties of the current todo item
  // and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todoList[index],
  };
  // remove the todo item from the array by filtering it out
  todoList = todoList.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}

function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);

  // add this if block
  if (todo.deleted) {
    // remove the item from the DOM
    item.remove();
    return;
  }

  const isComplete = todo.complete ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isComplete}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}
