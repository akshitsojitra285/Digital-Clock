setInterval(showtime,1000);

function showtime(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let am_pm = "AM";

    let date = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let day = d.getDay();

    if (hour>12) {
        am_pm = "PM";
        hour -= 12;
    }
    if(hour==12){
        am_pm="PM";
    }
    if(hour==0){
        hour=12;
        am_pm="AM";
    }
    hour = hour<10? "0"+hour : hour;
    min = min<10? "0"+min : min;
    sec = sec<10? "0"+sec : sec;
    switch (day) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    
        default:
            break;
    }

    document.getElementById("time").innerHTML = hour+":"+min+":"+sec+":"+am_pm;
    document.getElementById("date").innerHTML = date+"/"+month+"/"+year+"/"+day;
}
showtime();