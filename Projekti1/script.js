document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
  });
  
  function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value;
    if (taskText === '') return;
  
    var listItem = document.createElement('li');
    var taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    listItem.appendChild(taskSpan);
  
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = function() {
      this.parentElement.remove();
    };
    listItem.appendChild(deleteButton);
  
    listItem.onclick = function() {
      this.classList.toggle('completed');
    };
  
    var taskList = document.getElementById('task-list');
    taskList.appendChild(listItem);
  
    taskInput.value = '';
  }
  