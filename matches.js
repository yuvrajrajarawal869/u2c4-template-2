// write js code here corresponding to matches.html
var machdata = JSON.parse(localStorage.getItem("schedule")) || [];
   
function findVenu(){
   var sortbyvenu = document.querySelector("#filterVenue").value;
}
printData(machdata)
function  printData(machdata){
 machdata.forEach( function (elem) {
   var tr = document.createElement("tr")
   var td1 = document.createElement("td")
   td1.innerText= elem.matchN;
   var td2 = document.createElement("td")
   td2.innerHTML=elem.tA;  
   var td3 = document.createElement("td")
     td3.innerText=elem.tB;
   var td4 = document.createElement("td")
      td4.innerText=elem.dat;
   var td5 = document.createElement("td")
      td5.innerText=elem.ven;
   var td6 = document.createElement("td")
      td6.innerText="Favourite";
      td6.style.color="blue";
      td6.style.cursor="pointer";
      td6.addEventListener("click", myfunction)
        var data= JSON.parse(localStorage.getItem("Favourite")) || [];
     function myfunction(){
         var obj ={
           dat : td1.innerText,
           matchN : td2.innerText,
           tB : td3.innerText,
           tA : td4.innerText,
           ven : td5.innerText,
         }
         data.push(obj);
         localStorage.setItem("Favourite",JSON.stringify(data));
     }
      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
 });
}