//Begin with the document ready function
$(document).ready(function() {


  $('body').css('background-color', 'red');
  //this is not changing the background color GRRRRRRR

//Checking account deposit function
//On click of the depositChecking button
//Get value from the amountChecking input field
// Take that value and add it to the existing value in the checkingBalance div


  $('#depositChecking').on('click', function() {
    var amountChecking = parseInt($('#amountChecking').val());
    var checkingBalance = parseInt($('#checkingBalance').text().replace('$', ''));
    var currentBalance = amountChecking + checkingBalance;
    $('#checkingBalance').text('$'+ currentBalance);
  });


  //Checking account withdrawl funtion
  //On click of the withdrawChecking button
  //Get value from the amountChecking input field
  // If that value is greater than the value in the account ignore that action
  // In other words if this would put the account into a negative balance do not allow it
  //Else subtract that value from the current amount in the checking account

  $('#withdrawChecking').on('click', function() {
    var checkingBalance = parseInt($('#checkingBalance').text().replace('$', ''));
    var amountChecking =      parseInt($('#amountChecking').val());
    var currentBalance = checkingBalance - amountChecking;
    $('#checkingBalance').text('$'+ currentBalance);
  });

  //Savings account deposit function
  //On click of the depositSavings button
  //Get value from the amountSavings input field
  //Take that value and add it to the existing value in the savingsBalance div


  $('#depositSavings').on('click', function() {
    var savingsBalance = parseInt($('#savingsBalance').text().replace('$', ''));
    var amountSavings =      parseInt($('#amountSavings').val());
    var totalSavings = savingsBalance + amountSavings;
    $('#savingsBalance').text('$'+ totalSavings);
  });

  //Savings account withdraw funtion

  //On click of the withdrawl button

  //Get value from the amountSavings input field

  //If that value is greater than the value in the account ignore that action
  //In other words if this would put the account into a negative balance do not allow it

  //Else subtract that value from the current amount in the savings account


  $('#withdrawlSaving').on('click', function() {
    var savingsBalance = parseInt($('#savingsBalance').text().replace('$', ''));
    var amountSavings =      parseInt($('#amountSavings').val());
    var totalSavings = savingsBalance - amountSavings;
    $('#savingsBalance').text('$'+ totalSavings);
  });

});

// console.log(currentBalance);
// console.log('currentBalance');
// var x = $(amountChecking);
// var y = $(depositChecking);
// var checkingBalance = x+y;

// var newBalance = parseInt($('#checkingBalance').val(''));
//   console.log();
//   $('#amountChecking').val('');
//   alert('hello!');


// var x = $(amountChecking);
// var y = $(depositChecking);
// var checkingBalance = x+y;

// function replace(string) {
//   newString = parseInt(string, replace )
// }

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
