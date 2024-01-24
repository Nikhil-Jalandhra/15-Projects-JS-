let day = document.getElementById("Days");
let hour = document.getElementById("Hours");
let minute = document.getElementById("Minutes");
let second = document.getElementById("Seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let time = new Date();
    let din = time.getDate();
    let ghante = time.getHours();
    let mint = time.getMinutes();
    let secind = time.getSeconds();

    ghante = ghante == 0 ? ghante = 12 : ghante
    
    if (ghante >= 12) {
        ghante = ghante -12
    }
    
    day.innerHTML = din;
    hour.innerHTML = ghante;
    minute.innerHTML = mint ;
    second.innerHTML = secind;
    
    setInterval(function(){
        
        let time = new Date();
        let din = time.getDate();
        let ghante = time.getHours();
        let mint = time.getMinutes();
        let secind = time.getSeconds();
        let month = time.getMonth()
        let year = time.getFullYear()

        ghante = ghante == 0 ? ghante = 12 : ghante
        
    if (ghante >= 12) {
        ghante = ghante -12
    }

    day.innerHTML = din;
    hour.innerHTML = ghante;
    minute.innerHTML = mint ;
    second.innerHTML = secind;

    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    
    let daysInTargetMonth = getDaysInMonth(month, year);

    dd.style.strokeDashoffset = 440 - (440 * din) /daysInTargetMonth
    hh.style.strokeDashoffset = 440 - (440 * ghante) /12
    mm.style.strokeDashoffset = 440 - (440 * mint) /60
    ss.style.strokeDashoffset = 440 - (440 * secind) /60

},1000)



