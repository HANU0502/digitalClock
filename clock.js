function clock(){
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if(h>12){
        h=h-12 ;
        am = "PM"
    }

    h = ( h< 10) ? "0" + h : h;
    m = ( m< 10) ? "0" + m : m;
    s = ( s< 10) ? "0" + s : s;

    hr.innerHTML = h ;
    min.innerHTML = m ;
    sec.innerHTML = s;
    ampm.innerHTML = am;
}

let interval = setInterval(clock,1000);