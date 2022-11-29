 var inputs =document.querySelectorAll(".input");
 var displayInput =document.querySelector(".display")
 var aqualInput =document.querySelector("#aqual")
 var clearInput =document.getElementById("clear");
 var operation =document.querySelectorAll("#operaion");
 

 for (let i =0 ;i<inputs.length ;i++){
    inputs[i].addEventListener("click" ,function(){
     let  item1=inputs[i].value;
        displayInput.removeAttribute("disabled")
        displayInput.value+=item1;
  
        
    })
 };
 aqualInput.addEventListener("click" ,function(){
     if(displayInput.value==""){
        displayInput.value="";
     }
     else{
         let answer=eval(displayInput.value);
         displayInput.value=answer;
       
     }
 })
clearInput.addEventListener("click",function(){
    clearItem()
})
function clearItem(){
    displayInput.value="";
    arrayItem1=[];
}
