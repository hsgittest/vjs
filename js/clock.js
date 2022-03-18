const clock = document.querySelector("#clock");

function handleClock() {
  const dt = new Date();
  const y = dt.getFullYear().toString();
  const m = dt.getMonth().toString().padStart(2, "0");
  const d = dt.getDate().toString().padStart(2, "0");
  const h = dt.getHours().toString().padStart(2, "0");
  const mm = dt.getMinutes().toString().padStart(2, "0");
  const s = dt.getSeconds().toString().padStart(2, "0");
  //console.log(dt);
  clock.innerText = `${y}년 ${m}월 ${d}일 ${h}:${mm}:${s}`;
}
handleClock();
setInterval(handleClock, 1000);
