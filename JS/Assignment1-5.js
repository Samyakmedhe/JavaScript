function fibonacci(num) {
    var a = 0;
    var b = 1;
    var No = 0;
    if (num >= 1) {
        console.log(b);
    }
    while (true) {
        No = a + b;
        if (No > num) {
            break;
        }
        console.log(No);
        a = b;
        b = No;
    }
}
var num = 21;
var result = 0;
fibonacci(num);
