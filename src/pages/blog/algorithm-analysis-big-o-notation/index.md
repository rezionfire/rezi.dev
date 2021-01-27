---
slug: "/algorithm-analysis-big-o-notation"
date: "2020-08-28"
title: "Algorithm Analysis - Big-O Notation"
spoiler: "Let's talk about Oh m Big O."
---
We, Software engineers, must know that when we write a piece of code, an Algorithm, it requires some kinds of resources to run. And our job is not only to write a code that solves the problem but, also to solve the problem as efficiently with as few resources as possible.

The Big-O notation allows us to talk about what'll be the worst-case scenario runtime of an algorithm as the inputs grow. We don't even care about the exact number on a specific input. We only care about the rough estimate, the big picture.

Here we have the simple the function that takes an array of integers and returns the sum of it.

```javascript
const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
```

Let's count the operations of this function.

1. At first, we're setting the variable sum to 0, which happens only one time. So that's 1.
2. Then we define the variable "i" to equal to 0 in our for-loop. That also happens only once.
3. Then we compare "i" to the length of the array n times. I say n times because it will change based on the given input. So, that's n operations.
4. Then we redefine the variable "i" and assign at the same time (i=i+1 or i++). So that's 2n - assignment and addition, we're just using simplified shorthand in js.
5. In the for-loop body, we're redefining the sum variable to be sum + "i"th index of the array.
6. And lastly, we're returning the value of the sum variable, which will execute only once.

So, our getSum(n) = 5n+3, and that's our Big-O!
O(5n+3)

## Simplifying the Expression
Since we do not care about the specifics and we only care about the big picture, we need to change some things in our expression. Here are some rules to simplify the weird 5n+3 expression.

1. Always drop the constants! Just remember, we only care about the big picture and rough estimate. We don't care if it's O(9n+1) or (2n+10000000000). It still will be O(n).
2. Add up the steps. Just like we did in our example.
3. Since we do not care about the constants, drop the variable assignments and stuff like that and pay attention to loops, recursion, etc.
4. You can use a different variable name instead of n.

## Time complexities
- O(1), or, the constant time - When the function do not care about the input growth and it takes a constant time to execute.
- O(n), or, linear - When the runtime grows directly in proportion to the input.
- O(logn), or, logarithmic - When the runtime grows as the input grows. O(1) < O(logn) < O(n)
- O(nlogn), or, superlinear - When the runtime grows as the input grows. O(n) < O(nlogn) < O(n²)
- O(n²), or, qadratic - When the runtimes grows quadratically depending on the input growth. O(nlogn) < O(n²) < O(n!)
- O(n!), or, factorial - When the runtime grows at the fastest pace depending on the input. O(n!) > O(n²)

![Big-O Complexity Chart](./1_5ZLci3SuR0zM_QlZOADv8Q.jpeg)
*Big-O Complexity Chart. Credit to https://www.bigocheatsheet.com/*
