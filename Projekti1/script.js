document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Estää lomakkeen oletustoiminnan (esim. sivun uudelleenlatauksen).
    addTask();
  });
  
  function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
  
    
    if (taskText === '') {
      displayError('Kenttä on tyhjä');
      taskInput.style.border = '2px solid red'; 
      return;
    }
  
   
    clearError();
    taskInput.style.border = '';
  
    var listItem = document.createElement('li');
    
   
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
      listItem.classList.toggle('completed');
    };
    listItem.appendChild(checkbox);
  
 
    var taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    listItem.appendChild(taskSpan);
  
  
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = function() {
      this.parentElement.remove(); 
    };
    listItem.appendChild(deleteButton);
  
    
    var taskList = document.getElementById('task-list');
    taskList.appendChild(listItem);
  
   
    taskInput.value = '';
  }
  

  function displayError(message) {
    var errorElement = document.getElementById('error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = 'error-message';
      errorElement.style.color = 'red';
      errorElement.style.marginTop = '10px';
      document.querySelector('.stats-container').appendChild(errorElement);
    }
    errorElement.innerText = message;
  }
  

  function clearError() {
    var errorElement = document.getElementById('error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  