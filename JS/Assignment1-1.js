function Maximum(No1, No2, No3) {
    var Max = No1;
    if (No2 > Max) {
        Max = No2;
    }
    if (No3 > Max) {
        Max = No3;
    }
    return Max;
}
var No1 = 23;
var No2 = 89;
var No3 = 6;
var result = 0;
result = Maximum(No1, No2, No3);
console.log("Maximun number is : " + result);
