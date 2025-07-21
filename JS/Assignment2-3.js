function SecondMax(array) {
    var N = array.length;
    array.sort(function (a, b) { return a - b; });
    for (var i = N - 2; i >= 0; i--) {
        if (array[i] !== array[N - 1]) {
            return array[i];
        }
    }
    return -1;
}
var array = [23, 89, 6, 29, 56, 45, 77, 32];
var result = 0;
result = SecondMax(array);
console.log(result);
