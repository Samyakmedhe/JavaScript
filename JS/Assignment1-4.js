function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
var num = 6;
var result = true;
result = isPrime(num);
if (result == true) {
    console.log("it is prime number ");
}
else {
    console.log("it is Not prime number ");
}
