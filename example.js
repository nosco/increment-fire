var IncFire = require('./index');

// Only arguments sets whether event should be executed only once or every the counter hits the correct value
var firstFire = new IncFire(false);

firstFire.on(2, function() {
  console.log('firstFire has counted to 2');
});

firstFire.on(4, function() {
  console.log('firstFire has counted to 4');
});


var secondFire = new IncFire();

secondFire.on(2, function() {
  console.log('secondFire has counted to 2');
});

secondFire.on(4, function() {
  console.log('secondFire has counted to 4');
});

// Run and increment
for(var i=0 ; i < 10 ; i++) {
  setTimeout(function() {
    firstFire.inc(1); // Increment by 1 (which is actually the default)
    secondFire.inc();
  }, i*250);
}

// Then run and increment again
for(var i=0 ; i < 10 ; i++) {
  setTimeout(function() {
    if(firstFire.counter == 10) {
      firstFire.reset();
      secondFire.reset();
    }
    firstFire.inc();
    secondFire.inc();
  }, 2500+(i*250));
}
