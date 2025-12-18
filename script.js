document.addEventListener("DOMContentLoaded", () => {

    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        listItem.addEventListener("click", () => {
            listItem.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            listItem.remove();
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

});
