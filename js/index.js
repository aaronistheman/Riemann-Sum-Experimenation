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
});