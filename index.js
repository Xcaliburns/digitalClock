const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let heure = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconde = new Date().getSeconds();
    let ampm = "00";

    /* if (heure > 12) {
         heure = heure - 12;
     }
     if (heure >= 12) {
         ampm = "PM";
     } else {
         ampm = "AM"
     }*/
    //ici je vais utiliser une ternaire pour ma condition
    heure = heure < 10 ? "0" + heure : heure;
    seconde = seconde < 10 ? "0" + seconde : seconde;
    minute = minute < 10 ? "0" + minute : minute;



    hourEl.innerText = heure;
    minuteEl.innerText = minute;
    secondEl.innerText = seconde;
    ampmEl, (innertext = ampm); // la notation est equivalente à celles du dessus

    setTimeout(() => {
        updateClock();
        void updateClock()
    }, 1000);
}

updateClock()