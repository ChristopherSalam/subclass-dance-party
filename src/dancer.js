
// Class constructor
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top,left);
}

// pseudoclassical boilerplate
Dancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = Dancer;

// class methods
Dancer.prototype.step = function(){
  console.log(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


