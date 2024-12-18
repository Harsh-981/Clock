function clock (){
   let now = new Date ();
   let hours = now.getHours().toString().padStart();
    let mt = hours >= 12 ? "pm" : "am";
    hours = hours % 12 ||12
    hours = hours.toString().padStart();
    
   let minutes = now.getMinutes().toString().padStart();
   let seconds = now.getSeconds().toString().padStart();
   let  time = `${hours}:${minutes}:${seconds} ${mt}`
   document.getElementById("clock").textContent = time;
 }
 clock();
 setInterval(clock,1000);
 function date (){
   let date = new Date();
   let day = date.getDate()
   let month = date.getMonth()
   let year = date.getFullYear()
   let dating = `${day},${month},${year}`
   document.getElementById("date").textContent = dating ;
 }
 date();