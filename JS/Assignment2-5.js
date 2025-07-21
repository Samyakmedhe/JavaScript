function CheckString(Str) {
    var substring = "Marvellous";
    if (Str.search(substring)) {
        return 1;
    }
    else {
        return 0;
    }
}
var Str = "Pune Kothrud Marvellous Infosytems";
var result = 0;
result = CheckString(Str);
if (result == 1) {
    console.log("string contains Marvellous in it..");
}
else {
    console.log("string was not contains Marvellous in it..");
}
