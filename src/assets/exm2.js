var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 0] = "apple";
    fruits[fruits["mango"] = 1] = "mango";
    fruits[fruits["banana"] = 2] = "banana";
    fruits[fruits["orange"] = 3] = "orange";
})(fruits || (fruits = {}));
var fruitname = fruits[1];
console.log(fruitname);
