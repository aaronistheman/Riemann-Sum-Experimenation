"use strict";

/**
 * func must be a function that takes just one parameter, a number
 */
function RiemannGenerator(func, numRectangles) {
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
    
  },
  
  getRightRiemannSum : function(lowerBound, upperBound) {
    
  },
};