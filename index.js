// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunction)
var data= JSON.parse(localStorage.getItem("schedule")) || [];
   function myfunction(){
     event.preventDefault()  
     var obj={
          matchN : masaiForm.matchNum.value,
          tA : masaiForm.teamA.value,
          tB : masaiForm.teamB.value,
          dat : masaiForm.date.value,
          ven : masaiForm.venue.value,
          
        }
        data.push(obj);
        localStorage.setItem("schedule",JSON.stringify(data));
   }