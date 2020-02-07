var op = process.argv[2];
var a = process.argv[3];
var b = parseFloat(process.argv[4]);

if (a == undefined || op == undefined) {
    console.log("wrong!!!!")
} else {
    if (op === "add") {
        console.log(a + b)
    } else if (op === "subtract") {
        console.log(a - b)
    } else if (op === "multiply") {
        console.log(a * b)
    } else if (op === "divide") {
        console.log(a / b)
    } else if (op === "remainder") {
        console.log(a % b)
    } else if (op === "exponent") {
        console.log(Math.pow(a, b))
    } else if (op === "algebra"){
       // algebra 4x+2=10
    //    var s = a.split("x+")
    //    var t = a[0];
    //    var 
    }
}