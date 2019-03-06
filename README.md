# E-Centric Calculator

“Our pretend company” manufactures calculators. A new calculator is being
developed.
The development team is an agile team and adopts XP development
methodology. The application will be written as a web application using
ReactJS.
The final product will be able to support more complex operations such as
trigonometric functions (sine, cosine, tangent and their reciprocals), calculus
(integrals and derivatives) as well as logarithmic functions. It is anticipated
that a future version of the product will include the ability to switch modes,
e.g. simple, scientific, programmer, statistical.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. node
2. npm
3. npm install -g testcafe
see https://devexpress.github.io/testcafe/ for details
4. see package.json

### Installing

npm install

## Running the tests

npm test

```
Example:
PS D:\programming\ecentric\ecentriccalculator\app> npm test

> ecentriccalculator@1.0.0 test D:\programming\ecentric\ecentriccalculator
> mocha --reporter spec

  Calculator
    Addition
      √ adds two numbers
    Multiplication
      √ multiplies two numbers
    Subtraction
      √ subtracts two numbers
    Precision
      √ gets decimal precision of a number
    Division
      √ divides two numbers
    Modulo
      √ gets the remainder
    Exponent
      √ get a to the power of b
    Square Root
      √ get square root of a number
    nth Root
      √ get nth root of a number


  9 passing (24ms)
```

### Break down into end to end tests
TEST calculator will be hosted on http://127.0.0.1:3100/calculator.html
PROD calculator will be hosted on http://128.199.226.210:3100/calculator.html

1. For TEST, run server by running
  node .
or
  node app.js

2. go to test_cafe folder then run

for TEST:
testcafe chrome calculator-test.js

for PROD
testcafe chrome calculator-prod.js

```
example:

PS D:\programming\ecentric\ecentriccalculator\test_cafe> testcafe chrome calculator-test.js
\
 Running tests in:
 - Chrome 72.0.3626 / Windows 10.0.0

 Aaron Calculator
 √ 12 plus 3


 1 passed (4s)
PS D:\programming\ecentric\ecentriccalculator\test_cafe> testcafe chrome calculator-test.js
\
 Running tests in:
 - Chrome 72.0.3626 / Windows 10.0.0

 Aaron Calculator
 √ 12 plus 3
 √ 3 (1 + 2 ^ 2 * 3) / 4 ( 5 - 4 )


 2 passed (8s)
```

### And coding style tests

To preserve coding style. see .eslintrc.js and .eslintrc.json. Also it helps find mistakes in the program.

```
Example
PS D:\programming\ecentric\ecentriccalculator> eslint app/calculator.js --fix

D:\programming\ecentric\ecentriccalculator\app\calculator.js
  105:10  error  Parsing error: Identifier 'squareRoot' has already been declared

✖ 1 problem (1 error, 0 warnings)

PS D:\programming\ecentric\ecentriccalculator>
```

## Deployment

Clone Repository then persist node app.js. You may set process.env.PORT to your liking.

## Built With



## Contributing


## Versioning


## Authors

* **Aaron Galvez Dizon** - *Initial work* - [amehybrid](https://github.com/amehybrid)


## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* To my family and friends who believe in me.