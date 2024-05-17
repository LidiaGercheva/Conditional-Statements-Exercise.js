function timePlus15Min(input) {
   let hour = Number(input[0]);
   let mins = Number(input[1]);

   let totalMinutes = (hour * 60) + mins + 15;

   let newHours = Math.floor(totalMinutes / 60);
   let newMinutes = totalMinutes % 60;

   if (newHours === 24) {
    newHours = 0;
   }

   if (newMinutes < 10) {
    console.log(`${newHours}:0${newMinutes}`);
   } else {
    console.log(`${newHours}:${newMinutes}`);
   }
}
timePlus15Min(["0" , "01"]);