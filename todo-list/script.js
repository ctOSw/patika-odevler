// Local storage'dan görevleri yükle
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const tasks = document.querySelector(".tasks");
  savedTasks.forEach(({ text, completed }) => {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `
        <div class="line ${completed ? "active" : ""}"></div>
        <span class="taskText">${text}</span>
        <span class="removeBtn">
          <i class="fa-solid fa-xmark"></i>
        </span>
      `;

    // Tıklama olayları
    const taskText = task.querySelector(".taskText");
    taskText.addEventListener("click", () => {
      const line = task.querySelector(".line");
      line.classList.toggle("active");
      saveTasks(); // Durumu localStorage'a kaydet
    });

    const remove = task.querySelector(".removeBtn");
    remove.addEventListener("click", () => {
      task.remove();
      saveTasks(); // Local storage'ı güncelle
    });

    tasks.append(task);
  });
}

// Görevleri local storage'a kaydet
function saveTasks() {
  const tasks = document.querySelectorAll(".task");
  const taskValues = Array.from(tasks).map((task) => {
    return {
      text: task.querySelector(".taskText").textContent,
      completed: task.querySelector(".line").classList.contains("active"),
    };
  });
  localStorage.setItem("tasks", JSON.stringify(taskValues));
}

function addTask() {
  const searchTask = document.getElementById("searchTask");

  if (searchTask.value === "") {
    alert("Görev gir");
  } else {
    const tasks = document.querySelector(".tasks");
    const task = document.createElement("li");

    task.classList.add("task");
    task.innerHTML = `
       <div class="line"></div>
        <span class ="taskText">${searchTask.value}</span>
        <span class="removeBtn">
          <i class="fa-solid fa-xmark"></i>
        </span>
     `;

    const taskText = task.querySelector(".taskText");

    taskText.addEventListener("click", () => {
      const line = task.querySelector(".line");
      line.classList.toggle("active");
      saveTasks();
    });

    const remove = task.querySelector(".removeBtn");
    remove.addEventListener("click", () => {
      task.remove();
      saveTasks();
    });

    tasks.append(task);
    saveTasks();
  }
  searchTask.value = "";
}

document.addEventListener("DOMContentLoaded", loadTasks);
