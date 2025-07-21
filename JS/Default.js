function CalulatePercentage(Marks, Outof) {
    if (Outof === void 0) { Outof = 500; }
    var result = 0;
    result = (Marks / Outof) * 100;
    return result;
}
console.log(CalulatePercentage(230) + "%");
console.log(CalulatePercentage(230, 300) + "%");
