# random-in-range <br> [![Test workflow status](https://github.com/ChrisCodesThings/random-in-range/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/random-in-range)](https://www.npmjs.com/package/@chriscodesthings/random-in-range) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Picks a random number within a given range**

## Description

Returns a random number within a given range.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/random-in-range
```

## Usage

```js
import randomInRange from '@chriscodesthings/random-in-range';

console.log(randomInRange(1, 100));
// => 42
```

## Syntax

```js
randomInRange(n1, (n2));
```

### Parameters

- *n1*: A number
- *n2* (optional): A number

If *n2* is omitted, the range is 0-*n1*, inclusive. If *n2* is provided, the range is *n1*-*n2* inclusive.

### Return Value

Returns a random number in the range.

## Examples

```js
// range 0-n1
const securityQuestions = [
    "Favourite colour",
    "Favourite food",
    "Favourite TV show",
    // ....
];

function pickTwoQuestions(securityQuestions) {
    const q1 = randomInRange(questions.length-1);
    const q2 = randomInRange(questions.length-1);

    return [questions[q1], questions[q2]];
}

// range n1-n2
function diceRoll() {
    return randomInRange(1,6);
}
```

## See Also...

- [**ultimate-random-number-er**: Generates random numbers with options for ranges, repetition, past and future sequences ... and more!](https://github.com/ChrisCodesThings/ultimate-random-number-er "Generates random numbers with options for ranges, repetition, past and future sequences ... and more!")
- [**randomize-array**: Function to randomize an array](https://github.com/ChrisCodesThings/randomize-array "Function to randomize an array")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
