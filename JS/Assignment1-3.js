function DisplayFactor(No) {
    var Fact = 1;
    for (var i = 1; i < No; i++) {
        if (No % i == 0) {
            console.log(i);
        }
    }
}
var No = 20;
var result = 0;
DisplayFactor(No);
