var Circle = /** @class */ (function () {
    function Circle(X, Y) {
        if (Y === void 0) { Y = 3.14; }
        console.log("Inside Constructor");
        this.Radius = X;
        this.PI = Y;
    }
    Circle.prototype.Aera_of_circle = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(5);
var result = 0;
result = obj.Aera_of_circle();
console.log("Area of Circle : " + result);
