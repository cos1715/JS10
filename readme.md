# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Pythagorean theorem

Calculate length of other side
a*a + b*b = c\*c  
Find c

```javascript
pythagorean(a, b);

pythagorean(5, 12);
// 13
```

## Show number in money format

+- sign should be present  
Separate thousands with ,

```javascript
formatMoney(num);

formatMoney(1232323);
//'+ 1,232,323.00'

formatMoney(-23.2132);
//'- 23.21'
```

## Format number in spaces

+- sign should be present  
Separate thousands with spaces

```javascript
formatNumber(num);

formatNumber(1232323);
// 1 232 323

formatNumber(1223.65378);
// 1 223.654
```

## Write a password generator with length n

Generate password with any symbol  
!"#$%&'()\*+,-./0123456789:;<=>?  
@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^\_  
`abcdefghijklmnopqrstuvwxyz

```javascript
generatePassword(n);

generatePassword(8);
// 1H:s4dh$
```

## Calculate percentage with n numbers after dot

Given 2 numbers. Calculate their percentage with n precision after dot  
50 is 25% of 200  
secondNum \* 100% / firstNum

```javascript
calc(firstNum, secondNum, precision);

calc(200, 50, 0);
// 25

calc(200, 0.14, 1);
// 0.1
```

## Get integer part of number and decimal

User enters a number  
Get it's integer part and decimal

```javascript
splitNumber(num);

splitNumber(2);
// {int: 2, decimal: 0}

splitNumber(2.34);
// {int: 2, decimal: 34}
```

## Check if prime

Check if given number is a prime number  
Prime numbers are numbers that is divisible without a remainder only by itself and by 1  
Should return boolean

```javascript
isPrime(n);

isPrime(4);
// false

isPrime(5);
// true
```

## Check if number is Armstrong Number

An armstrong number is a number which equal to the sum of the cubes of its individual digits.  
153 = 1\*1\*1 + 5\*5\*5 + 3\*3\*3
153 = 1 + 125 + 27
153 = 153

```javascript
isArmstrong(n);

isArmstrong(4);
// false

isArmstrong(153);
// true
```
