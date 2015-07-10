
// constructor
var BlinkyDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<img src="img/cat.png" height="110px" width="70px" class="dancer">');
  this.setPosition(top,left);
  this.step();
};

// pseudoclassical boilerplate
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// class methods
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
BlinkyDancer.prototype.setPosition =  function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);
};



