// kilometerToMeter ==============================
function kilometerToMeter(kilo) {
   if (kilo < 0) {
      return "enter the valid kilometer";
   }
   return kilo * 1000;
}


// budgetCalculator ==============================
function budgetCalculator(watch=0, phone=0, laptop=0) {
   if (watch < 0 || phone < 0 || laptop < 0) {
      return "enter the valid number";
   }
   let watchPrice = watch * 50;
   let phonePrice = phone * 100;
   let laptopPrice = laptop * 500;
   
   let totalPrice = watchPrice + phonePrice + laptopPrice;
   return totalPrice;
}


// hotelCost ==============================
function hotelCost(day) {
   let rent = 0;

   if (day < 0) {
      return "enter the valid day";
   }
   else if (day <= 10) {
      rent = day * 100;
   }
   else if (day <= 20) {
      let first10 = 10 * 100;
      let remaining = day - 10;
      let sec10 = remaining * 80;
      rent = first10 + sec10;
   }
   else {
      let first10 = 10 * 100;
      let sec10 = 10 * 80;
      let remaining = day - 20;
      let third10 = remaining * 50;
      rent = first10 + sec10 + third10;
   }
   return rent;
}


// megaFriend ==============================
let friends = ["ovi", "rayhan", "abdur", "jeon", "pushpi", "mridu"];

function megaFriend(name) {
   let largeName = "";
   for (let i = 0; i < name.length; i++) {
      const element = name[i].trim();
      if (element.length > largeName.length) {
         largeName = element;
      }
   }
   return largeName;
}
