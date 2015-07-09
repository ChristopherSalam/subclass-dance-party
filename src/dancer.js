
// Class constructor
var makeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top,left);
  // console.log(this.$node.toggle);
}

// pseudoclassical boilerplate
makeDancer.prototype = Object.create(makeDancer.prototype);
makeDancer.prototype.constructor = makeDancer;

// class methods
makeDancer.prototype.step = function(){
  //debugger;
  // the basic dancer doesn'do anything interesting at all on each step,
  // it just schedules the next step
  //console.log("makeDancer")
  // console.log("I'M HERE");
  // console.log(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


