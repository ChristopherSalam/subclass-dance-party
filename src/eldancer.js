
// constructor
var ElDancer = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  //this.setPosition(top,left);
  this.$node = $('<img src="img/cat.png" height="160px" width="120px" class="eldancer">');
  this.step();
};

// pseudoclassical boilerplate
ElDancer.prototype = Object.create(Dancer.prototype);
ElDancer.prototype.constructor = ElDancer;

// class methods
ElDancer.prototype.step = function(){
  console.log(this);
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};