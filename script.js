// Global Variable and will create an empty array with name tsks

let tasks=[];

// AddTask function
function addTask(){
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    console.log(task)
    if(task !== '')
    {
        tasks.push(task);
        console.log(tasks)
        input.value ='';
        displayTasks();
    }
}

// Edit Task - Edit Button
function editTask(index){
    const newTask = prompt('Edit Task', tasks[index]);
    console.log(newTask);
    tasks[index] = newTask.trim();
    displayTasks();
}

// Remove Task -- delete button
function removeTask(index){
    tasks.splice(index, 1);
    displayTasks();
}

// Display Task
function displayTasks(){
    const taskList = document.getElementById('taskList');
    let html = '';
    for(let i = 0; i < tasks.length; i++){
        html += `
            <div class="task-item">
            <span class="task-text"> ${i+1}. ${tasks[i]}</span>

            <div class="button-group">

            
            <button class="edit-btn" onclick="editTask(${i})"> Edit </button>
            <button class="delete-btn" onclick="removeTask(${i})"> Delete </button>
            </div>

            </div>
        `;
    }
    taskList.innerHTML = html;
}
