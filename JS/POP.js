function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var value1 = 11;
var value2 = 10;
var result = 0;
result = Addition(value1, value2);
console.log("Addition is : " + result);
result = Substraction(value1, value2);
console.log("Substraction is : " + result);
