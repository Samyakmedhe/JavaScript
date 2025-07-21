function Armstrong(No) {
    var sum = 0;
    var temp = No;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = Math.floor(temp / 10);
    }
    if (sum == No) {
        return 1;
    }
    else {
        return 0;
    }
}
var No = 153;
var result = 0;
result = Armstrong(No);
if (result == 1) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is  not Armstrong number");
}
