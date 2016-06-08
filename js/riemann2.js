"use strict";

/**
 * Inherits from RiemannGenerator
 *
 * This class is meant to faciliate integrals that involve the subtraction
 * of one function (func2) from another (func1).
 *
 * @param func1 takes one parameter
 * @param func2 takes one parameter
 */
function TwoFuncRG(func1, func2, numRectangles)
{
  if (!(this instanceof TwoFuncRG)) // in case forgot "new" operator
    return new TwoFuncRG(func1, func2, numRectangles);
  
  this.rg = new RiemannGenerator(function(x) {
    func1(x) - func2(x) }, numRectangles);
}

// Make TwoFuncRG inherit from RiemannGenerator
TwoFuncRG.prototype = Object.create(RiemannGenerator.prototype,
{
  constructor : { configurable : true, enumerable : true,
    value : TwoFuncRG, writable : true }
});