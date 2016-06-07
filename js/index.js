"use strict";

// I treat OptionData like a C++ struct
function OptionData(displayHeader, func, rangeLow, rangeHigh)
{
  this.displayHeader = displayHeader;
  this.func = func;
  this.rangeLow = rangeLow;
  this.rangeHigh = rangeHigh;
  
  var rg = new RiemannGenerator(func, OptionData.NUM_RECTANGLES);
  this.leftSum = rg.getLeftRiemannSum(rangeLow, rangeHigh);
  this.rightSum = rg.getRightRiemannSum(rangeLow, rangeHigh);
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
    alert($(this).html());
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
  
  return menuOptionData;
}

$(document).ready(function()
{
  var menuOptionData = getMenuOptionData();
  
  setUpOptionEventHandlers(menuOptionData);
  
  // By default, display linear function's data
  display(menuOptionData.linFunc);
});