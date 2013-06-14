# increment-fire

A simple way of keeping track of asynchronous events.

When you have tried all the promises libraries and found that they all have this "thing", that make it unusable in your case: increment-fire...



### This is a BETA version

As soon as the module has shown it's worth and stability on a live system, it will be marked as version >= 1.0.0.

Until then: Feel free to play around with it, learn from it.

Note: this code has already been running on a node.js 0.6.6 live system for many months.

### To install

	npm install increment-fire


### Simple example
	var IncFire = require('./index');
	var incFire = new IncFire();
	
	incFire.on(2, function() {
	  console.log('incFire has counted to 2');
	});
	
	incFire.on(4, function() {
	  console.log('incFire has counted to 4');
	});
	
	// Run and increment
	for(var i=0 ; i < 10 ; i++) {
	  setTimeout(function() {
	    firstFire.inc(1); // Increment by 1 (which is actually the default)
	    secondFire.inc();
	  }, i*250);
	}

You can see a bit more elaborate example in the example.js file.
