function Area(PI, Radius) {
    var Area = 0;
    Area = PI * Radius * Radius;
    return Area;
}
var PI = 3.14;
var Radius = 5;
var result = 0;
result = Area(PI, Radius);
console.log("Area of circle is : " + result);
