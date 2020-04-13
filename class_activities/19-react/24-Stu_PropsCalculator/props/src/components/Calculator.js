import React from "react";
import Math from "./Math"

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      <Math num1="19" num2="341" operator="+" />
      <Math num1="42" num2="17" operator="-" />
      <Math num1="100" num2="3" operator="*" />
      <Math num1="96" num2="4" operator="/" />
      <p>19 + 341 = ?</p>
      <p>42 - 17 = ?</p>
      <p>100 * 3 = ?</p>
      <p>96 / 4 = ?</p>
    </div>
  );
}

export default Calculator;
