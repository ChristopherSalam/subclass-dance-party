// constructor
var ElDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<img src="img/fish.gif" height="160px" width="120px" class="dancer">');
  console.log(top,left)
  this.setPosition(top,left);
  this.step();
};

// pseudoclassical boilerplate
ElDancer.prototype = Object.create(Dancer.prototype);
ElDancer.prototype.constructor = ElDancer;

// class methods
ElDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
//this.$node.toggle();
};

ElDancer.prototype.setPosition = function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);
}