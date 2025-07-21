var Data = [11, 21, 51, 101];
var iCnt = 0;
for (iCnt = 0; iCnt < Data.length; iCnt++) {
    console.log(Data[iCnt]);
}
var Sum = 0;
for (iCnt = 0; iCnt < Data.length; iCnt++) {
    Sum = Sum + Data[iCnt];
}
console.log("Summattion of all elments is : " + Sum);
