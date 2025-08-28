// function:: get Id
function getId(id){
    return document.getElementById(id);
}

// heart count
const heartIcons = document.querySelectorAll(".heart-icon");
for(const heartIcon of heartIcons){
    heartIcon.addEventListener("click", function(){
    let heartCount = Number(getId("heart-count").innerText);
    heartCount++;
    getId("heart-count").innerText = heartCount;
    console.log(heartCount);
})
}

let coins = 100;
const callButtons = document.querySelectorAll(".call-btn");
const callHistoryContainer = getId("call-history-container")
const copyCount = getId("copy-count").innerText

function updateCoins(){
    getId("coin-balance").innerText = coins;
}
  
    for(const button of callButtons){
      button.addEventListener("click", function(e){
        // e.preventDefault();
        
        const card = button.closest(".card");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        if(coins < 20){
            alert("Not enough coins! You want at least 20 coins to make a call");
            return
        }

        coins -= 20;
        updateCoins();

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // get current Time

        const callHistoryContainer = getId("call-history-container");
        getId("call-history-container").innerText = "";

        const div = document.createElement("div");
        div.innerHTML = `

        `

    })
} 






