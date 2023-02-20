#JS Challenge

## Rotate matrix

```javascript
const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Example 1
rotateMatrix(arr1);
// Should return
/*
[
  [1,3],
  [2,4]
]
*/
// Example 2
rotateMatrix(arr2);
// Should return
/* 
[
  [1,4,7],
  [2,5,8],
  [3,6,9]
]
*/
```

## Dragon Curve

![dragon curve](https://github.com/cos1715/javascript-challenge-2/blob/master/src/dragon-curve/dragon-curve.png?raw=trueg)

```javascript
// Start line doesn't cunt
// Every left turn is 1 every right turn is 0
dragonCurve(1); // 1
dragonCurve(2); // 110
dragonCurve(3); // 1101100
dragonCurve(4); // 110110011100100
dragonCurve(n); // ...
```
