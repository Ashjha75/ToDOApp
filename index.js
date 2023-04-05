const input = document.getElementById("add");
const list = document.getElementById("list");
const icon = document.getElementById("Moon");
const imgcon = document.getElementById("imgcon");
const filtr = document.getElementById("filtr");
const totalDos = document.getElementById("totalDOs");
const CtotalDos = document.getElementById("CtotalDOs");

let totalDO = 0;

function AddTask() {
  if (input.value.length < 1) {
    alert("Please Write Some Task ");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  input.value = "";
}
function RemoveChecked() {
  adds();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      if ((e.target.classList.contains = "checked")) {
      }
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "ToDoAssets/sun.png";
  } else {
    icon.src = "ToDoAssets/moon.png";
  }
};

// function saveData() {
//   localStorage.setItem("data", list.innerHTML);
//   var len = document.getElementById("list").getElementsByTagName("li").length;
//   var Clen = document.querySelectorAll(".checked").length;
//   localStorage.setItem("len", len);
//   localStorage.setItem("Clen", Clen);
// }

// function ShowData() {
//   list.innerHTML = localStorage.getItem("data");
//   totalDos.innerHTML = localStorage.getItem("len");
//   CtotalDos.innerHTML = localStorage.getItem("Clen");
// }
// ShowData();

function saveData2(e) {
  localStorage.setItem("data", e.target.innerHTML);
}
// function adds(e) {
//   document..classList;
// }
