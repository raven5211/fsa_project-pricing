# Project Pricing

Something you might do as a freelance web developer, in addition to building
websites and writing scripts, is write quotes and send invoices. Let's write
some code to help us calculate our rates.

## Instructions

1. Each person in the group should clone this repository down to your local machine.
1. Open the cloned folder with VS Code.
1. Choose one person in the group to share their screen. Everyone else should follow
   along and type the answers on their own computers.
1. As a team, read each question out loud and reach a consensus on the answer
   before moving to the next question.

## Follow code conventions

Different teams will have different preferences when it comes to **code style**
and **naming conventions**, but there are some general guidelines to follow.
They all follow the same principle: you are writing code for _other people_ to read!

- Prefer readability over brevity.
  - For example, prefer `canScrollHorizontally` over `scrollableX`.
- Avoid abbreviations and uncommon acronyms.
  - If you have to explain an abbreviation, then don't use it.
  - Don't skip letters in words.
- Prefer nouns for variable names.
- Prefer verbs for function names.
- Prefer `camelCase` for variable and function names.
- Be consistent!

1. Why is `convertHoursToSeconds` a better function name than `cnvrtHr2Secs`?
1. Why is `convertHoursToSeconds` a better function name than `hoursToSeconds`?
1. Why is `minutes` a better variable name than `min`?
1. Why is `numPages` a better variable name than `numpages`?

## Document code with JSDoc

Professional JavaScript code is often documented with [JSDoc](https://jsdoc.app/),
which are comments that give readers and IDEs useful information about the code.
JSDoc comments are denoted by `/** */`.

Refer to `index.js` to answer the following questions.

5. What are the names of `applyDiscount`'s two parameters?
6. What are the types of those parameters?
7. What does `applyDiscount` return (in words)?
8. What is the type of `applyDiscount`'s return value?
9. Most IDEs, including VS Code, allow you to hover over a symbol for more information.
   Try hovering over `applyDiscount`. What do you see?
10. Write the JSDoc for `calculateProjectCost` based on the provided code.

> [!TIP]
>
> Not sure if you've written the JSDoc correctly? Ask your instructor to double
> check your work or take a peek at the `solution` branch on GitHub!

## Test a function with the browser console

Once a function is declared, you can call it over and over again with different inputs.
One way to test that a function works correctly is to call it in the browser console
and ensure that it produces the expected output.

Live serve `index.html` and use the browser console to answer the following questions.

11. Based on the JSDoc, what do you expect `applyDiscount(100,0.2)` to return?
12. Give 2 more examples of inputs and expected outputs for `applyDiscount`.
13. Call `applyDiscount` in the browser console with the example inputs above.
    Do the actual outputs match the expected outputs?
14. Fix the mistake in the body of `applyDiscount` so that it works as intended.

## Avoid magic numbers

Using a [magic number](<https://en.wikipedia.org/wiki/Magic_number_(programming)>)
is considered an **anti-pattern**. We want to _avoid_ using number and string literals
with special implicit meanings. Instead, we prefer using **named constants**,
which are denoted by **SCREAMING_SNAKE_CASE** in JavaScript.

```js
// 1.08 is a magic number, which we want to avoid.
const priceAfterTax = 1.08 * price;

// Instead, we should use a named constant.
const SALES_TAX = 0.08;
const priceAfterTax = (1 + SALES_TAX) * price;
```

15. The `estimateHours` function currently uses a few magic numbers.
    **Refactor** the code to use named constants instead.
16. Refactor the magic number out of `calculateProjectCost`.
