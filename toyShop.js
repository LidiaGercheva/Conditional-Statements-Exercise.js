function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = puzzlesCount * 2.6;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.1;
    let minionsPrice = minionsCount * 8.2;
    let truckPrice = trucksCount * 2;

    let totalPriceToys = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + truckPrice;


    let totalToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
     if (totalToysCount >= 50) {
       totalPriceToys *= 0.75;
     }

     let totalMoney = totalPriceToys *= 0.9

     if (totalMoney >= tripPrice) {
       let moneyLeft = totalMoney - tripPrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
     } else {
       let moneyNeeded = tripPrice - totalMoney;
      console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
     }
}
toyShop(["320", "8", "2", "5", "5", "1"]);