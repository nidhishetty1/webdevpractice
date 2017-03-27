function isEven(num) {
    if (num%2===0) {
        return "This number is even"
    }
    else {
        return "This number is odd"
    }
}

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num ; i++) {
        result = result*i
    }
    return result;
}

function kebabToSnake(str) {
    var newstr = str.replace(/-/g,"_");
    return newstr;
}
