// let sana = new Date();
// console.log(sana);
const soat = document.querySelector("#soat");
const minut = document.querySelector("#minut");
const sekond = document.querySelector("#sekond");

function clock() {
  const hozirgiVaqt = new Date();

  const h = hozirgiVaqt.getHours();
  const m = hozirgiVaqt.getMinutes();
  const s = hozirgiVaqt.getSeconds();

  console.log(h, m, s);
  soat.textContent = h < 10 ? "0" + h : h;
  minut.textContent = m < 10 ? "0" + m : m;
  sekond.textContent = s < 10 ? "0" + s : s;
}

clock();

setInterval(() => {
  clock();
}, 1000);

console.log(4 === 5 ? "ha" : "yoq");
