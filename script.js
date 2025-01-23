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

            
            <button class="delete-btn" onclick="removeTask()"> Delete </button>
            </div>

            </div>
        `
    }
    taskList.innerHTML = html;
}