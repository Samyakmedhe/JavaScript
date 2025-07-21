var Demo = /** @class */ (function () {
    function Demo(x, name) {
        console.log("Inside Parametrised constructor ");
        this.No = x;
        this.str = name;
    }
    Demo.prototype.fun = function () {
        console.log("Inside fun of Demo class");
        console.log("value of No is : " + this.No);
        console.log("value of str is : " + this.str);
    };
    return Demo;
}());
var obj1 = new Demo(11, "PPA");
var obj2 = new Demo(21, "LB");
obj1.fun();
obj2.fun();
