// write js code here corresponding to matches.html
var machdata = JSON.parse(localStorage.getItem("Favourite")) || [];
   
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
      td6.innerText="delet";
      td6.style.color="blue";
      td6.style.cursor="pointer";
      td6.addEventListener("click",delet)
      function delet(){
            tr.remove();
      }
      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
 });
}