"use strict";
  
QUnit.module("riemann.js, RiemannGenerator.getLeftRiemannSum()");

  var numRectsArray = [10, 100, 500, 1000, 5000, 10000, 500000, 1000000];

  QUnit.test("linear: left riemann is lower than real integral",
    function(assert) {
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

  QUnit.test("linear: left riemann is higher than real integral",
    function(assert) {
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

  QUnit.test("quadratic: left riemann is lower than real integral",
    function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 5 * x * x - 3 * x - 3;
    }, 3);
    
    var LOWER_BOUND = 0;
    var UPPER_BOUND = 11;
    var CALCULATOR_INTEGRAL_ANSWER = 2003.8333333334;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getLeftRiemannSum(LOWER_BOUND, UPPER_BOUND) <
        CALCULATOR_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

  QUnit.test("quadratic: left riemann is higher than real integral",
    function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 5 * x * x - 3 * x - 3;
    }, 3);
    
    var LOWER_BOUND = -8;
    var UPPER_BOUND = 0;
    var CALCULATOR_INTEGRAL_ANSWER = 925.33333333335;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      assert.ok(rg.getLeftRiemannSum(LOWER_BOUND, UPPER_BOUND) >
        CALCULATOR_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

QUnit.module("riemann.js, RiemannGenerator.getRightRiemannSum()");

  QUnit.test("linear: right riemann is higher than real integral",
    function(assert) {
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

  QUnit.test("linear: right riemann is lower than real integral",
    function(assert) {
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

  QUnit.test("quadratic: right riemann is higher than real integral",
    function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 5 * x * x - 3 * x - 3;
    }, 3);
    
    var LOWER_BOUND = 0;
    var UPPER_BOUND = 11;
    var CALCULATOR_INTEGRAL_ANSWER = 2003.8333333334;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      rg.setNumRectangles(numRectsArray[i]);
      assert.ok(rg.getRightRiemannSum(LOWER_BOUND, UPPER_BOUND) >
        CALCULATOR_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });

  QUnit.test("quadratic: right riemann is lower than real integral",
    function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 5 * x * x - 3 * x - 3;
    }, 3);
    
    var LOWER_BOUND = -8;
    var UPPER_BOUND = 0;
    var CALCULATOR_INTEGRAL_ANSWER = 925.33333333335;
    
    for (var i = 0; i < numRectsArray.length; ++i)
    {
      assert.ok(rg.getRightRiemannSum(LOWER_BOUND, UPPER_BOUND) <
        CALCULATOR_INTEGRAL_ANSWER,
        "Correct for " + numRectsArray[i] + " rectangles");
    }
  });