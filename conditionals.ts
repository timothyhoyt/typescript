const actualRetailPrice : number = 333;

const contestantNumber1Guess:number=111;
const contestantNumber2Guess:number=222;
const contestantNumber3Guess:number=333;
const contestantNumber4Guess:number=444;

if(contestantNumber1Guess>actualRetailPrice){
    console.log("Contestant Number 1 is OVER! Sorry, you lose.")
}else if(contestantNumber1Guess<actualRetailPrice){
    console.log("Contestant number 1 is under")
}else(console.log("Contestant Number 1 got a PERFECT MATCH! You win an extra $100."))

if(contestantNumber2Guess>actualRetailPrice){
    console.log("Contestant Number 2 is OVER! Sorry, you lose.")
}else if(contestantNumber2Guess<actualRetailPrice){
    console.log("Contestant number 2 is under")
}else(console.log("Contestant Number 2 got a PERFECT MATCH! You win an extra $100."))

if(contestantNumber3Guess>actualRetailPrice){
   console.log("Contestant Number 3 is OVER! Sorry, you lose.")
}else if(contestantNumber3Guess<actualRetailPrice){
    console.log("Contestant number 3 is under")
}else(console.log("Contestant Number 3 got a PERFECT MATCH! You win an extra $100."))

if(contestantNumber4Guess>actualRetailPrice){
    console.log("Contestant Number 4 is OVER! Sorry, you lose.")
}else if(contestantNumber4Guess<actualRetailPrice){
    console.log("Contestant number 4 is under")
}else(console.log("Contestant Number 4 got a PERFECT MATCH! You win an extra $100."))
