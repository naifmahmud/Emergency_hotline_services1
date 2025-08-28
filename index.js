// dhore nia asar function

function getElement(id)
{
    const element= document.getElementById(id);
    return element;
}


const heartBtn= document.getElementsByClassName("heart-btn");
// console.log(heartBtn);
for(let heartBottons of heartBtn)
{
    heartBottons.addEventListener("click",function(){

        const heartCounter= getElement("heart counter").innerText;
        let currentHeartNumber= Number(heartCounter)+1;
        getElement("heart counter").innerText=currentHeartNumber;
    })
}







































// document.getElementById("call-btn-1").addEventListener("click",function(){
    
//     console.log("Heart button clicked");
    
// })