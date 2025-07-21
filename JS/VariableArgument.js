function Addition() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    var Sum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < value.length; iCnt++) {
        Sum = Sum + value[iCnt];
    }
    return Sum;
}
console.log(Addition(10, 20, 30, 40));
console.log(Addition(10, 20, 30, 40, 50, 60, 70));
console.log(Addition(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
