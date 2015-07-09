
// Class constructor
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
   this.$node = $('<img src="img/Sittingmouse.jpg" height="80px" width="60px" class="dancer ">');
  this.setPosition(top,left);
  //this.step();
};

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


