"use strict";

// I treat OptionData like a C++ struct
function OptionData(displayHeader, func, rangeLow, rangeHigh)
{
  this.displayHeader = displayHeader;
  this.func = func;
  this.rangeLow = rangeLow;
  this.rangeHigh = rangeHigh;
  
  var rg = new RiemannGenerator(func, 500000);
  this.leftSum = rg.getLeftRiemannSum(rangeLow, rangeHigh);
  this.rightSum = rg.getRightRiemannSum(rangeLow, rangeHigh);
} // custom type OptionData

OptionData.NUM_RECTANGLES = 500000;

$(document).ready(function()
{
  // Menu option data instances
  var linFuncOption = new OptionData("Linear Function", function(x)
    { return 2 * x + 3; }, -5, 5);
  
  // Menu option event handlers
  $("#lin-button").click(function() {
    alert($(this).html());
  });
  $("#quad-button").click(function() {
    alert($(this).html());
  });
  $("#para-button").click(function() {
    alert($(this).html());
  });
  $("#btwn-button").click(function() {
    alert($(this).html());
  });
  
  // By default, display linear function's data
  $("#display-header").html(linFuncOption.displayHeaer);
  $("#function").html(linFuncOption.func.toString());
  $("#range-lower").html(linFuncOption.rangeLow);
  $("#range-higher").html(linFuncOption.rangeHigh);
  $("#left-sum").html(linFuncOption.leftSum);
  $("#right-sum").html(linFuncOption.rightSum);
});