# Unexpected Function Redefinition in JavaScript

This repository demonstrates a subtle bug in JavaScript related to function redefinition.  When a function is redefined multiple times, the final definition is the one that is used, which can lead to unexpected behavior if not carefully considered.

## Bug Description
The bug lies in the redefinition of the `foo` function. The last definition of the function overrides all previous ones, causing the final result to be determined by the last implementation.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js`.
3. Observe the unexpected output based on the last function implementation.