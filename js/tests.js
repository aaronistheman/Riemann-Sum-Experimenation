"use strict";
  
QUnit.module("riemann.js, RiemannGenerator.getLeftRiemannSum()");

  QUnit.test("test 1: linear function", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 5);
    
    var RESULT_CALCULATED_BY_HAND = 35;
    assert.deepEqual(rg.getLeftRiemannSum(0, 5), RESULT_CALCULATED_BY_HAND,
      "Correct calculation");
      
  }); // test 1

  QUnit.test("test 2: linear function; harder calculation", function(assert) {
    var func = function(x) {
      return 2 * x + 3;
    };
    var rg = new RiemannGenerator(func, 100);
    
    var range = 5 - (-5);
    var step = range / 100;
    var answer = 0;
    for (var x = -5; x < 5; x += step)
      answer += func(x) * step;
    
    assert.deepEqual(rg.getLeftRiemannSum(-5, 5), answer);
    assert.notOk(false);
  }); // test 2
  
  // QUnit.test("test 3: quadratic function", function(assert) {
    
  // }); // test 3

QUnit.module("riemann.js, RiemannGenerator.getRightRiemannSum()");

  QUnit.test("test 1: linear function", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 5);
    
    var RESULT_CALCULATED_BY_HAND = 45;
    assert.deepEqual(rg.getRightRiemannSum(0, 5), RESULT_CALCULATED_BY_HAND);
  }); // test 1

  QUnit.test("test 2: linear function; harder calculation", function(assert) {
    var rg = new RiemannGenerator(function(x) {
      return 2 * x + 3;
    }, 100);
    
    
    
    assert.deepEqual(rg.getRightRiemannSum(-5, 5), answer);
    assert.notOk(false);
  }); // test 2
  
  // QUnit.test("test 3: quadratic function", function(assert) {
    
  // }); // test 3