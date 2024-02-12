function addTask() {
    let inputTask = document.getElementById("task").value.trim();

    if (inputTask !== "") {
        let li = document.createElement("li");
        li.textContent = inputTask;

        let check = document.createElement("input");
        check.type = 'checkbox';
        li.appendChild(check);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteBtn);

        let createdList = document.getElementById("taskList");
        createdList.appendChild(li);

        // Clear the input field after adding a task
        document.getElementById("task").value = "";
    }
    else{
        alert("Please enter the task");
    }
}