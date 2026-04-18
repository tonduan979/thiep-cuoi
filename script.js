const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const date = document.getElementById("date");

function update() {
  document.getElementById("names").innerText =
    name1.value + " ❤️ " + name2.value;

  document.getElementById("dateText").innerText =
    "Ngày: " + date.value;
}

name1.oninput = update;
name2.oninput = update;
date.oninput = update;
