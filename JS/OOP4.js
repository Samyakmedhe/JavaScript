var Arithematic = /** @class */ (function () {
    function Arithematic(X, Y) {
        this.No1 = X;
        this.No2 = Y;
    }
    Arithematic.prototype.Addition = function () {
        console.log("Inside Addtion Fuction ");
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        console.log("Inside Substraction Fuction ");
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var result = 0;
var obj1 = new Arithematic(11, 10);
result = obj1.Addition();
console.log("Addition is : " + result);
result = obj1.Substraction();
console.log("Substraction is : " + result);
var obj2 = new Arithematic(51, 42);
result = obj2.Addition();
console.log("Addition is : " + result);
result = obj2.Substraction();
console.log("Substraction is : " + result);
