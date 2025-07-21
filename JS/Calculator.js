function Addition(No1, No2) {
    return No1 + No2;
}
function Substraction(No1, No2) {
    return No1 - No2;
}
function Multiplication(No1, No2) {
    return No1 * No2;
}
function Divide(No1, No2) {
    return No1 / No2;
}
function main() {
    var No1 = 1;
    var No2 = 2;
    var result = Addition(No1, No2);
    console.log("Addition is : ", result);
    var result1 = Substraction(No1, No2);
    console.log("Subraction is : ", result1);
    var result2 = Multiplication(No1, No2);
    console.log("Multiplication is : ", result2);
    var result3 = Divide(No1, No2);
    console.log("Divide is : ", result3);
}
main();
