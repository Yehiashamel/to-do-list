const input = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if (input.value === ''){
    alert('you must');
    
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    const span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span);
  }
  input.Value = "";
  saveData();
}
listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
  
}, false)
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask();