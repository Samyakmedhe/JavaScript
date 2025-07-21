function Age(No) {
    if (No >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var Value1 = 31;
var result = false;
result = Age(Value1);
if (result == true) {
    console.log("Age - " + Value1 + " : You are senios citizen");
}
else {
    console.log("Age - " + Value1 + " : You are not a senior citizen");
}
