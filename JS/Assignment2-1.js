function Maximum(array) {
    var i = 0;
    var Max = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] > Max) {
            Max = array[i];
        }
    }
    return Max;
}
var array = [21, 89, 6, 29, 56, 45, 77, 32];
var result = 0;
result = Maximum(array);
console.log("Maximum number is : " + result);
