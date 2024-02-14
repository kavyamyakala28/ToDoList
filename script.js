function addTask(){
   let taskInput = document.querySelector("#task-list");
   let taskText = taskInput.value.trim();
   
   if(taskText !== ""){
      var listItems = document.querySelector("#task-List");
      let li = document.createElement("li");
      let input = document.createElement("input");
      input.type = "text";
      input.value = taskText;
      input.disabled = true;

      let updateButton = document.createElement("button");
      updateButton.innerHTML = "edit";
      updateButton.id = "updateButton";
      updateButton.addEventListener('click', function() {
        input.disabled = false;
        updateButton.innerHTML = "save";
        updateButton.onclick = () => input.disabled = true;
      });

      let deleteButton = document.createElement("button");
      deleteButton.id = "deleteButton";
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener('click', () => deleteTask(li));

      li.appendChild(input);
      li.appendChild(updateButton);
      li.appendChild(deleteButton);
      listItems.append(li);

      function deleteTask(e){
        listItems = document.querySelector("#task-List");
        listItems.removeChild(e);

      }
      taskInput.value = "";
   }
}