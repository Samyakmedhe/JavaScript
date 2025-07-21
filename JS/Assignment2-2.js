function Summation(array) {
    var i = 0;
    var sum = array[0];
    for (i = 1; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var array = [23, 6, 7, 4, 5, 7];
var result = 0;
result = Summation(array);
console.log("Addition is : " + result);
