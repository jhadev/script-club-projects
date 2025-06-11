// the 2 methods we use for timed events are setInterval and setTimeout

/*

setTimeout is used to performed an action after a specified amount of time has passed

It has a sibling method called clearTimeout which can cancel an event before the setTimeout executes.

*/

// define a global variable to store our timeout.
var timer;

// We are going to use setTimeout and jQuery to print text to the page after 5 seconds.

// Let's start with a jQuery click function

// the syntax is like this

// we have a button with a class of setTimeout in the HTML

$('.setTimeout').on('click', function(event) {
  /* 
    .setTimeout is the button element we are targeting
   .on is the method we are using to fire the event
   'click' is the type of event being fired

   now we define an action to perform once the button is clicked in our callback function
   it takes an argument called event lets log it.
 */

  console.log(event);

  // we get alot of useful stuff in this event object. we will go over some of them later.

  // back to setTimeout, so now we can have this button click and set a timer that will write to the page after 5 seconds

  // In order to clear both an interval and a timeout we have to store them in variables. This is only necessary to clear them. It depends on your use cases, but it isn't always necessary to clear a timeout, but you should always have a way to clear an interval.

  timer = setTimeout(function() {
    // setTimeout is a method that takes 2 arguments. The callback function and the time in ms.
    // here our callback function just prints some text to an id named timeout we made in the html.
    $('#timeout').text('THIS PRINTED AFTER 5 SECONDS');
  }, 5000);
});

// now lets make a click event to clear the timeout

$('.clearTimeout').on('click', function(event) {
  // clearTimeout is a method that takes one argument, which is the variable of the timeout that needs to be cleared
  clearTimeout(timer);
  // now we display on the page that we cleared the timer
  $('#timeout').text('TIMER CLEARED');
});

// next we are going to use an interval to create a coutdown

// we have to buttons in the html to attach our click events to, 1 button to start and 1 button to stop

// first we create a variable to store our countdown
// set it to 10 because we are going to countdown 10 seconds
var countdown = 10;
// declare a variable for our interval function. we will reassign this variable inside our click event
var interval;
// set a flag to determine if the interval is running. This will make it so we can't create new intervals on every click
var intervalRunning = false;

$('.startCountdown').on('click', function(event) {
  // when this button is clicked we want to start out interval and it is going to run every seconds
  // if intervalRunning is false
  if (!intervalRunning) {
    console.log('WORKED');
    // set intervalRunning to true
    intervalRunning = true;
    interval = setInterval(function() {
      // in the callback function we are going to do a few things. first we decrement countdown variable
      countdown -= 1;
      console.log(countdown);
      // we print the countdown variable to the page now. remember this will happen every second. because we set it to happen every 1000ms below.
      $('.countdown').text(countdown);

      // if we don't set an exit condition this interval will run forever.
      // this is one way to stop it
      if (countdown === 0) {
        clearInterval(interval);
        // when countdown is 0 set intervalRunning back to false and countdown back to 10
        intervalRunning = false;
        countdown = 10;
      }
    }, 1000);
  }
});

// we can also stop it with another event

$('.stopCountdown').on('click', function(event) {
  intervalRunning = false;
  clearInterval(interval);
});
