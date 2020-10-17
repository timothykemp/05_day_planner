$(document).ready(function () {

  var todayDayName = moment().format('dddd');
  var todayMonthName = moment().format('MMMM');
  var todayDayNum = moment().format('Do');
  var todayText = todayDayName + ', ' + todayMonthName + ' ' + todayDayNum;

  $('#currentDay').text(todayText)

  var hoursPerDay = 9;
  var time12 = [];
  var time24 = [];
  var currentHour = moment().format('H');

  function timeEl() {
    var formatTime12;
    var formatTime24;

    for (i = 9; i < hoursPerDay + 9; i++) {

      formatTime12 = (moment()
        .startOf("day")
        .add(i, "hours"))
        .format("h A");

      formatTime24 = (moment()
        .startOf("day")
        .add(i, "hours"))
        .format("H");

      time12.push(formatTime12);
      time24.push(formatTime24);
    }
  }

  timeEl();


  for (var i = 0; i < time12.length; i++) {

    var timeBlock = $("<div>");
    var hour = $("<div>");
    var textArea = $("<textarea>");
    var saveButton = $("<button>");
    var icon = $("<li>");
    var timeDiff = currentHour - time24[i]

    console.log('currentHour :>> ', currentHour);
    console.log('time24[i] :>> ', time24[i]);
    console.log('timeDiff :>> ', timeDiff);

    if (timeDiff === 0) {
      textArea.addClass("present");
    }

    if (timeDiff > 0) {
      textArea.addClass("past");
    }

    if (timeDiff < 0) {
      textArea.addClass("future");
    }

    timeBlock
      .addClass("row time-block")
      .attr("time-block", time12[i]);
    hour
      .addClass("col-2 hour")
      .attr("style", "padding-top: 2rem")
      .text(time12[i]);
    textArea
      .addClass("col-8");
    saveButton
      .addClass("col-2 saveBtn")
      .attr("id", "save-" + parseInt(time12[i]));
    icon
      .html('<i class="far fa-save fa-lg"></i>')
      .attr("style", "list-style-type:none");

    $(timeBlock).append(hour);
    $(timeBlock).append(textArea);
    $(timeBlock).append(saveButton);
    $(saveButton).append(icon);
    $(".container").append(timeBlock);

  }

  /*
  var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
// Clear todoList element and update todoCountSpan
todoList.innerHTML = "";
todoCountSpan.textContent = todos.length;

// Render a new li for each todo
for (var i = 0; i < todos.length; i++) {
  var todo = todos[i];

  var li = document.createElement("li");
  li.textContent = todo;
  li.setAttribute("data-index", i);

  var button = document.createElement("button");
  button.textContent = "Complete";

  li.appendChild(button);
  todoList.appendChild(li);
}
}

function init() {
// Get stored todos from localStorage
// Parsing the JSON string to an object
var storedTodos = JSON.parse(localStorage.getItem("todos"));

// If todos were retrieved from localStorage, update the todos array to it
if (storedTodos !== null) {
  todos = storedTodos;
}

// Render todos to the DOM
renderTodos();
}

function storeTodos() {
// Stringify and set "todos" key in localStorage to todos array
localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
event.preventDefault();

var todoText = todoInput.value.trim();

// Return from function early if submitted todoText is blank
if (todoText === "") {
  return;
}

// Add new todoText to todos array, clear the input
todos.push(todoText);
todoInput.value = "";

// Store updated todos in localStorage, re-render the list
storeTodos();
renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
var element = event.target;

// If that element is a button...
if (element.matches("button") === true) {
  // Get its data-index value and remove the todo element from the list
  var index = element.parentElement.getAttribute("data-index");
  todos.splice(index, 1);

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
}
});

*/


})