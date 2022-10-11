// // initialize the count as 0
// //listen for clicks on the increment button.
// //increment the count when it's clicked.
// //Change #count-am in the html to reflect the new count.

// //for increment

let saveEl = document.getElementById("save-el")
let countAm = document.getElementById("count-am")


let count = 0

function increment(){
  count += 1
  countAm.innerText = count
  console.log(`count is :${count}`)
  
}



 

function save(){

let visuals = count+" - "

saveEl.textContent += visuals
count-=  count
countAm.innerText = count
};

let change = document.getElementById("increment-btn")
let display = "Count"

change.innerText = display