let counter = document.getElementById("counterElement");

function incrementButton(){
    let counterValue = counter.textContent;
    let updatedCounterValue = parseInt(counterValue) + 1;
    if (updatedCounterValue > 0){
        counter.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
    counter.textContent = updatedCounterValue;
}

function decrementButton(){
    let counterValue = counter.textContent;
    let updatedCounterValue = parseInt(counterValue) - 1;
    if (updatedCounterValue > 0){
        counter.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
    counter.textContent = updatedCounterValue;
}

function resetButton(){
    let counterValue = 0;
    counter.textContent = counterValue;
    counter.style.color ="black";
}