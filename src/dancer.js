
// Class constructor
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  // this.step();
  // this.setPosition(top,left);
  // console.log(this.$node.toggle);
}

// pseudoclassical boilerplate
Dancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = Dancer;

// class methods
Dancer.prototype.step = function(){
  //debugger;
  // the basic dancer doesn'do anything interesting at all on each step,
  // it just schedules the next step
  //console.log("Dancer")
  // console.log("I'M HERE");
  // console.log(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


