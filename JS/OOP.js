var Arithematic = /** @class */ (function () {
    function Arithematic() {
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj = new Arithematic();
obj.No1 = 11;
obj.No2 = 10;
var result = 0;
result = obj.Addition();
console.log("Addition is : " + result);
result = obj.Substraction();
console.log("Substraction is : " + result);
