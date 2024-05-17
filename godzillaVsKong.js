function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clotherPricePerOne = Number(input[2]);

    let decor = movieBudget * 0.1;
    let priceTotalClothes = actorsCount * clotherPricePerOne;

    if (actorsCount > 150) {
        priceTotalClothes *= 0.9;
    }

    let totalPriceForMovie = decor + priceTotalClothes;

   if (totalPriceForMovie <= movieBudget) {
    let moneyLeft = movieBudget - totalPriceForMovie
      console.log("Action!");
      console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
   } else {
    let neededMoney = totalPriceForMovie - movieBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
   }

}
godzillaVsKong(["9587.88",

"222",

"55.68"]);