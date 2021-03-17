function inverseWhile() {
    var fiveNumbers = "", str = 5;
    while (str >= 0) {
        fiveNumbers += str;
        if (str > 0) {
            fiveNumbers += ",";
        }
        str--;
    }
    console.log(fiveNumbers);
}
console.log(inverseWhile());
module.exports = inverseWhile;