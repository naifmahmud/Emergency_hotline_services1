// dhore nia asar function

function getElement(id)
{
    const element= document.getElementById(id);
    return element;
}

// Heart number Counting here
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

// call button functionalities
const callBtn= document.getElementsByClassName("call-btn");

for(let callButtons of callBtn)
{
    callButtons.addEventListener("click",function(){
        const serviceName = callButtons.parentNode.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber= callButtons.parentNode.parentNode.parentNode.children[1].children[2].innerText;
        const callImage= callButtons.parentNode.childNodes[1].childNodes[0].src;
   
        const callTime= new Date().toLocaleTimeString();
        console.log(callTime);
        
        
        
        // alert(callImage+' '+"Calling "+serviceName+" "+ serviceNumber);

        const coinCounter= getElement("coin-counter").innerText;
        let currentCoinNumber= Number(coinCounter)-20;
        if(currentCoinNumber<20 && currentCoinNumber<0){
            alert("Your coin is less than 20");
            return;
        }
        else{
          alert('📞'+' '+"Calling "+serviceName+" "+ serviceNumber);
        }
        getElement("coin-counter").innerText= currentCoinNumber;
        
       const historyContainer= getElement("history-container");
       
       const newDiv = document.createElement("div");
       newDiv.innerHTML= `
       <div class="bg-[#FAFAFA] rounded-[8px] flex justify-between items-center space-y-2 gap-3 p-4">
                  <div class="">
                     <h2 class="font-bold">${serviceName}</h2>
                      <h2 class="">${serviceNumber}</h2>
                  </div>
                  <p> ${callTime} </p>
             </div>
       `;

       historyContainer.append(newDiv);
    })
}

// Copy Button Functionality
const copyBtn =document.getElementsByClassName("copy-btn");
for(let copyButtons of copyBtn)
{
    copyButtons.addEventListener("click",function(){
        const hotlineNumbers= copyButtons.parentNode.parentNode.parentNode.children[1].children[2].innerText;
        console.log(hotlineNumbers);

        const copyCounter= getElement("copy-counter").innerText;
        let currentCopyNumber= Number(copyCounter)+1;
        getElement("copy-counter").innerText= currentCopyNumber;
        
        // clipboard portion
        navigator.clipboard.writeText(hotlineNumbers)
        .then(() =>{
            alert(hotlineNumbers+" coppied succesfully")
        })



    })
}

const clearButton= getElement("clear-btn");
clearButton.addEventListener("click",function(){
    getElement("history-container").innerHTML="";

})







































// document.getElementById("call-btn-1").addEventListener("click",function(){
    
//     console.log("Heart button clicked");
    
// })