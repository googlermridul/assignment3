// https://github.com/googlermridul/assignment3

// ----------------------------------------
// kilometerToMeter
// ----------------------------------------
function kilometerToMeter(meter) {
   var kilometer = meter*1000;

   if (meter >= 0) {
      return kilometer;
   } else {
      return "please input the valid number";
   }
}

console.log(kilometerToMeter(10987));



// ----------------------------------------
// budgetCalculator
// ----------------------------------------
function budgetCalculator(watch, phone, laptop) {
   var totalPrice = watch*50 + phone*100 + laptop*500;

   if (watch >= 0 && phone >= 0 && laptop >= 0) {
      return totalPrice;
   } else {
      return "please input the valid number";
   }
}

console.log(budgetCalculator(0, 4, 2));



// ----------------------------------------
// hotelCost
// ----------------------------------------
function hotelCost(day) {
   let money = 0;

   if (day < 0) {
      return 'enter a valid date';
   }
   else if (day <= 10) {
      money = day * 100;
   }
   else if (day <= 20) {
      var firstDay = 10 * 100;
      var remainingDay = day - 10;
      var secondDay = remainingDay * 80;
      money = firstDay + secondDay;
   }
   else {
      var firstDay = 10 * 100;
      var secondDay = 10 * 80;
      var remainingDay = day - 20;
      var thirdDay = remainingDay * 50;
      money = firstDay + secondDay + thirdDay;
   }

   return money;
 }

 console.log(hotelCost(54));



// ----------------------------------------
// megaFriend
// ----------------------------------------
function megaFriend(name) {
   var largeName = "";

   for (var i = 0; i < name.length; i++) {
      if (name[i].length > largeName.length) {
         largeName = name[i];
      }
      else if (name[i].length <= 0) {
         return "enter a valid name";
      }
   }
   return largeName;
}

console.log(megaFriend(["antor", "mynuddin", "mridul", "mahmudul", "arraffat"]));
