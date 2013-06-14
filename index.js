// The class
function IncrementFire(onlyOnce) {
  // Should a callback be removed, when it has been run once?
  if(onlyOnce == undefined) {
    onlyOnce = true;
  }
  this.onlyOnce = onlyOnce;

  // The central counter variable
  this.counter = 0;

  // The callback container
  this.callbacks = {};
}

// Increment function to call, can take a number if 1 is not wanted as incrementor
IncrementFire.prototype.increment = function(incrementBy) {
  // Check if the incrementBy is set - else set to 1
  if(incrementBy == undefined) {
    incrementBy = 1;
  }

  // Increment....
  this.counter += parseInt(incrementBy);

  // Now check the callbacks
  this.checkCallbacks();
};
IncrementFire.prototype.inc = IncrementFire.prototype.increment;

// Reset the counter - just set the counter to 0
IncrementFire.prototype.reset = function() {
  this.counter = 0;
};

// Set the counter to a specific value
IncrementFire.prototype.set = function(value) {
  // Set the counter, if we were given a number
  if(!isNaN(parseInt(value))) {
    this.counter = parseInt(value);
  }

  // Now check the callbacks
  this.checkCallbacks();
};

// Add a callback and set at which count it should fire
IncrementFire.prototype.on = function(fireNumber, callback) {
  // It is possible to have multiple callbacks per number - here we check if any is set - otherwise initialize the array
  if(this.callbacks[parseInt(fireNumber)] == undefined) this.callbacks[parseInt(fireNumber)] = [];

  // Get the callback index
  var index = this.callbacks[parseInt(fireNumber)].length;

  // Add the callback
  this.callbacks[parseInt(fireNumber)][index] = callback;

  // We want to check the callback now
  this.checkCallbacks();
};

// This is the callback check
IncrementFire.prototype.checkCallbacks = function() {//callbackNumber) {

  // Start by checking if any callbacks is available at this count
  if((this.callbacks[this.counter] != undefined) && (this.callbacks[this.counter].length)) {

    // Run through the callbacks object
    for(i in this.callbacks[this.counter]) {

      // If there is a callback (if undefined, it may have been run and then deleted
      if(this.callbacks[this.counter][i] != undefined) {

        // Check if we only run a callback once
        if(this.onlyOnce == true) {

          // Get out the func, before we remove it from the callbacks object
          var func = this.callbacks[this.counter][i];

          // Delete it form the callback object
          delete this.callbacks[this.counter][i];

          // Call the callback
          func();

        } else { // not onlyOnce...
          // We are not deleting - therefore we run it directly from the object
          this.callbacks[this.counter][i]();
        }
      }
    }
  }
};

// Export the class
module.exports = IncrementFire;
