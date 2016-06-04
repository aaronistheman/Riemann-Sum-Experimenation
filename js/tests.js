"use strict";
  
QUnit.module("riemann.js, RiemannGenerator.getLeftRiemannSum()");

  QUnit.test("left riemann is lower than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 100);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    assert.ok(rg.getLeftRiemannSum(0, 5) < HAND_CALCULATED_INTEGRAL_ANSWER);
  });

QUnit.module("riemann.js, RiemannGenerator.getRightRiemannSum()");

  QUnit.test("right riemann is higher than real integral", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 100);
    
    var HAND_CALCULATED_INTEGRAL_ANSWER = 40;
    
    assert.ok(rg.getRightRiemannSum(0, 5) > HAND_CALCULATED_INTEGRAL_ANSWER);
  });