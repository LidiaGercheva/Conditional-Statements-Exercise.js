function shopping(input) {
   let petarsBudget = Number(input[0]);
   let videocardsCount = Number(input[1]);
   let procesorsCount = Number(input[2]);
   let rammemoryCount = Number(input[3]);

   let totalSum = 0;

   let videocardsPrice = videocardsCount * 250;
   let procesorsPrice = (videocardsPrice * 0.35) * procesorsCount;
   let rammemoryPrice = (videocardsPrice * 0.1) * rammemoryCount;

   totalSum = videocardsPrice + procesorsPrice + rammemoryPrice;

   if (videocardsCount > procesorsCount) {
    totalSum *= 0.85;
   }

   if (petarsBudget >= totalSum) {
    let moneyLeft = petarsBudget - totalSum;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
   } else {
    let neededMoney = totalSum - petarsBudget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
   }


}
shopping(["920.45",

"3",

"1",

"1"]);