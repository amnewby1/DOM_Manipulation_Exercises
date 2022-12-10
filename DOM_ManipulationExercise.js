//#1
document.getElementsById("container");

//#2
document.querySelector("#container");

//#3
document.querySelectorAll(".second");

//#4
const ol = document.querySelector("ol");
ol.lastElementChild;

//#5
const section = document.querySelector("#container");
section.innerText = "Hello!";

//#6 & #7
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
footerDiv.classList.remove("main");

//#8, #9, and #10
const newLi = document.createElement("li");
newLi.textContent = "four";
const ul = document.querySelector("ul");
ul.append(newLi);

//#11
const liWithinOl = document.querySelectorAll("ol li");
for (let i = 0; i < liWithinOl.length; i++) {
  liWithinOl[i].style.backgroundColor = "green";
}

//#12
const removeDiv = document.querySelector(".footer");
removeDiv.remove;
