var TEMP = function (No1, No2) {
    console.log("Inside Addition Lambda Statement");
    var result = 0;
    result = No1 + No2;
    return result;
};
var ans = 0;
ans = TEMP(11, 10);
console.log("Addition is : " + ans);
console.log(typeof (TEMP));
