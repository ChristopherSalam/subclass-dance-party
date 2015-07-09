

// constructor
var BlinkyDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.step();
  // this.$node = $('<span class="dancer"></span>');
};


// pseudoclassical boilerplate
BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


// class methods
BlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();

};


