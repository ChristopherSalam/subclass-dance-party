

// constructor
var BlinkyDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.step();
};

// pseudoclassical boilerplate
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// class methods
BlinkyDancer.prototype.step = function(){
  console.log(this);
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


