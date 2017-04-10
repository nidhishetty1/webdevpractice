//printReverse([1,2,3,4]) --> 4,3,2,1
//isUniform([1,1,1,1])=true, else false
//sumArray
//max

var testy = [1,2,3,4,5]
var tester = [1,1,1,1,1]

function printReverese(array){
    for (var i = array.length-1; i >=0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var value = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i]==value) {
            value = array[i];
        } else {
            console.log("False");
        }
    }
}

function isUniform2(array) {
    var i=1
    while (array[0]==array[i]) {
        i++
    }
    if (i==array.length) {
        console.log("True");
    } else {
        console.log("False");
    }
}

function sumArray(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

function max(array) {
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}




var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"},
    ],
    color: "baby blue",
    isEvil: true
}
someObject.friends[0].name
