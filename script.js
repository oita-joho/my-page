document.getElementById("year").textContent = new Date().getFullYear();

const addBtn = document.getElementById("addNewsBtn");
const list = document.getElementById("newsList");

function ymd(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

addBtn?.addEventListener("click", () => {
  const text = prompt("お知らせの内容を入力してください");
  if (!text) return;

  const li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = `
    <span class="date">${ymd()}</span>
    <span class="dot"></span>
    <span class="text"></span>
  `;

  li.querySelector(".text").textContent = text;
  list.prepend(li);
});
