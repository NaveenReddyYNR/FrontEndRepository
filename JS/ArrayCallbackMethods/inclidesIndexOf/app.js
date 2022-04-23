var _array = [2, 9, 9, NaN];
_array.indexOf(9); // 1 (Returning the first matching element)
_array.indexOf(7); // -1
_array.indexOf(9, 2); // 2
_array.indexOf(9, 3); //-1
_array.indexOf(NaN); // -1

_array.includes(9); // true (Returning the first matching element)
_array.includes(7); // false
_array.includes(9, 2); // true
_array.includes(9, 3); // false
_array.includes(NaN); // true
