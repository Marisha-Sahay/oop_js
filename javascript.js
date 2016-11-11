var clickBoxOne = (function() {
  var colors = ["red", "black", "green"];
    var i = 0;
    return function() {
      if(i === 3) {
      i = 0;
      }
    box1.style.background = colors[i];
    i ++;        
    }
})();

var clickBoxTwo = (function() {
  var colors = ["red", "black", "green"];
    var i = 0;
    return function() {
    box2.style.background = colors[i%3];
    i ++;        
    }
})();


// function createAccount() {
//   var firstName = document.getElementById('firstName');
//   var lastName = document.getElementById('lastName');
//   var openingBalance = document.getElementById('openingBalance');
//   var account = new Account(firstName.value, lastName.value, openingBalance.value); // need to create constructor
//   accounts.push(account);
//   firstName.value = "";
//   lastName.value = "";
//   openingBalance.value = "";
// }

// window.accounts = accounts;

