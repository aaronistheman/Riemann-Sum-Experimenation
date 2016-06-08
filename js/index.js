"use strict";

/**
 * I treat OptionData like a C++ struct
 *
 * This is an "overloaded" constructor with two signatures:
 * 1) function OptionData(displayHeader, func, rangeLow, rangeHigh)
 * 2) function OptionData(displayHeader, func1, func2, rangeLow, rangeHigh)
 */
function OptionData()
{
  if (arguments.length == 4) // if signature #1
  {
    this.displayHeader = arguments[0];
    this.func = arguments[1];
    this.rangeLow = arguments[2];
    this.rangeHigh = arguments[3];
    
    var rg = new RiemannGenerator(this.func, OptionData.NUM_RECTANGLES);
    this.leftSum = rg.getLeftRiemannSum(this.rangeLow, this.rangeHigh);
    this.rightSum = rg.getRightRiemannSum(this.rangeLow, this.rangeHigh);
  }
  else // if signature #2
  {
    alert("HI!");
    this.displayHeader = arguments[0];
    this.func = function(x) { return arguments[1](x) - arguments[2](x); };
    this.rangeLow = arguments[3];
    this.rangeHigh = arguments[4];
    
    var rg = (new TwoFuncRG(arguments[1], arguments[2],
      OptionData.NUM_RECTANGLES)).rg;
    this.leftSum = rg.getLeftRiemannSum(this.rangeLow, this.rangeHigh);
    this.rightSum = rg.getRightRiemannSum(this.rangeLow, this.rangeHigh);
  }
} // custom type OptionData

// "Static" OptionData variables
OptionData.NUM_RECTANGLES = 500000;

function setUpOptionEventHandlers(menuOptionDataArray)
{
  $("#lin-button").click(function() {
    display(menuOptionDataArray.linFunc);
  });
  $("#quad-button").click(function() {
    display(menuOptionDataArray.quadFunc);
  });
  $("#arc-button").click(function() {
    display(menuOptionDataArray.vecFunc);
  });
  $("#btwn-button").click(function() {
    display(menuOptionDataArray.twoFunc);
  });
}

function display(optionData)
{
  $("#display-header").html(optionData.displayHeader);
  $("#function").html(optionData.func.toString());
  $("#range-lower").html(optionData.rangeLow);
  $("#range-higher").html(optionData.rangeHigh);
  $("#left-sum").html(optionData.leftSum);
  $("#right-sum").html(optionData.rightSum);
}

function getMenuOptionData()
{
  var menuOptionData = {};
  
  menuOptionData.linFunc = new OptionData("Linear Function", function(x)
    { return 2 * x + 3; }, -5, 5);
  menuOptionData.quadFunc = new OptionData("Quadratic Function", function(x)
    { return 5 * x * x - 3 * x - 3; }, -8, 11);
    
  // Arc length vector function needs a little bit more set up
  var vf = new VectorFunction(function(t) { return -Math.sin(t); },
    function(t) { return Math.cos(t); },
    function(t) { return Math.sqrt(t); });
  menuOptionData.vecFunc = new OptionData(
    "Magnitude of Vector Function (i.e. Arc Length)",
    vf.getMagnitudeFunction(), 0, 2 * Math.PI);
    
  menuOptionData.twoFunc = new OptionData("Between Two Functions",
    function(x) { return x; }, function(x) { return Math.pow(x, 2); },
    0, 0.5);
  
  return menuOptionData;
}

$(document).ready(function()
{
  var menuOptionData = getMenuOptionData();
  
  setUpOptionEventHandlers(menuOptionData);
  
  // By default, display linear function's data
  display(menuOptionData.linFunc);
});