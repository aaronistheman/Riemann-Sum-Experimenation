"use strict";
  
QUnit.module("riemann.js, RiemannGenerator.getLeftRiemannSum()");

  var numRectsArray = [10, 100, 500, 1000, 5000, 10000, 500000, 1000000];

  QUnit.test("left riemann is lower than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 3);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getLeftRiemannSum(0, 5) < HAND_CALCULATED_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

  QUnit.test("left riemann is higher than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return -2 * x + 3;
    }, 3);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getLeftRiemannSum(-5, 0) > HAND_CALCULATED_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

QUnit.module("riemann.js, RiemannGenerator.getRightRiemannSum()");

  QUnit.test("right riemann is higher than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 3);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getRightRiemannSum(0, 5) > HAND_CALCULATED_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

  QUnit.test("right riemann is lower than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return -2 * x + 3;
    }, 3);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getRightRiemannSum(-5, 0) < HAND_CALCULATED_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });