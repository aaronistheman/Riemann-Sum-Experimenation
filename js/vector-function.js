"use strict";

/**
 * This custom type isn't meant to fulfill all of the capabilities
 * of a vector function.
 * Regarding convention, each component function should be a function
 * of just the variable t.
 */
function VectorFunction(xComponentFunc, yComponentFunc, zComponentFunc)
{
  if (!(this instanceof VectorFunction)) // if user forgot "new" operator
    return new VectorFunction(xComponentFunc, yComponentFunc, zComponentFunc);

  this.xComp = xComponentFunc;
  this.yComp = yComponentFunc;
  this.zComp = zComponentFunc;
}

VectorFunction.prototype = {
  constructor : VectorFunction,

  // Returns a function, not the function's result
  getMagnitudeFunction : function()
  {
    var that = this; // because "this" changes within function definition
    return function(t) {
      return Math.sqrt(Math.pow(that.xComp(t), 2) +
        Math.pow(that.yComp(t), 2) +
        Math.pow(that.zComp(t), 2));
    };
  },
};