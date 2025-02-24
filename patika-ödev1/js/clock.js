function getName() {
  let name = prompt("Adını gir :");
  let myName = document.getElementById("myName");
  myName.innerHTML = name;
}

getName();
function showTime() {
  const myClock = document.getElementById("myClock");

  let date = new Date();

  let sn = date.getSeconds().toString().padStart(2, "0");
  let dk = date.getMinutes().toString().padStart(2, "0");
  let saat = date.getHours().toString().padStart(2, "0");

  let gun = date.getDay();

  const gunler = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  myClock.innerHTML = `${saat}.${dk}.${sn}  ${gunler[gun]}  `;
}

setInterval(showTime, 1000);
showTime();
