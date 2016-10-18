var domID = document.getElementById("dom");

domID.setAttribute("class", "btn btn-success");

console.log(domID);


var p = document.querySelectorAll("p.teste");

p.forEach(function (html, index) {
  html.innerHTML = "NOVO HTML";
});
