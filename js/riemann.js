"use strict";

/**
 * func must be a function that takes just one parameter, a number
 */
function RiemannGenerator(func, numRectangles) {
  if (!(this instanceof RiemannGenerator)) // if user forgot "new" operator
    return new RiemannGenerator(func, numRectangles);
  
  this._func = func;
  this._numRectangles = numRectangles;
} // RiemannGenerator()

RiemannGenerator.prototype = {
  constructor : RiemannGenerator,
  
  setFunc : function(func) {
    this._func = func;
  },
  
  setNumRectangles : function(numRectangles) {
    if (numRectangles > 0)
      this._numRectangles = numRectangles;
    else
      alertAndThrowException("numRectangles was negative");
  },
  
  getLeftRiemannSum : function(lowerBound, upperBound) {
    var range = upperBound - lowerBound;
    var step = range / this._numRectangles;
    var answer = 0;
    
    // Execute the summation
    for (var x = lowerBound, i = 0; i < this._numRectangles;
      x += step, ++i)
      answer += this._func(x) * step;
      
    return answer;
  },
  
  getRightRiemannSum : function(lowerBound, upperBound) {
    var range = upperBound - lowerBound;
    var step = range / this._numRectangles;
    var answer = 0;
    
    // Execute the summation
    for (var x = lowerBound + step, i = 0; i < this._numRectangles;
      x += step, ++i)
      answer += this._func(x) * step;
      
    return answer;
  },
};