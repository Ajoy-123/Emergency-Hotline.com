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
        const now = new Date()
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const amPm = now.getHours() >= 12 ? "PM" : "AM";
        const time = `${hours}:${minutes} ${amPm}`


        const callHistoryContainer = getId("call-history-container");
        

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="bg-[#dcdcdc] p-3 rounded-xl flex justify-between items-center m-3 mb-2">
                        <div class="flex flex-col">
                            <p class="font-bold text-sm">${serviceName}</p> 
                            <p text-gray-300>${serviceNumber}</p>
                        </div>
                        <div>
                        <p>${time}</p>
                        </div>
                    </div>
        `
        callHistoryContainer.appendChild(div);

    })
}

getId("clear-btn").addEventListener("click", function(){
    getId("call-history-container").innerText = "";
})



const copyBtns = document.querySelectorAll(".copy-btn")

for(const copyBtn of copyBtns){
    copyBtn.addEventListener("click", function(){
        const card = copyBtn.closest(".card");
        const serviceNum = card.querySelector(".service-number").innerText;
        navigator.clipboard.writeText(serviceNum).then(() => {
        alert(`Copied: ${serviceNum}`);
        })
        let count = Number(getId("copy-count").innerText);
        count++;
        getId("copy-count").innerText = count;
        
    });
}








