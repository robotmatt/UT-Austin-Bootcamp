function total(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += parseFloat(element);
    });
    return Math.round(sum * 100) / 100;
}
var fs = require("fs");
fs.readFile("bank.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    // reads user action
    var action = process.argv[2];
    // reads user money amount input
    var amount = parseInt(process.argv[3]);
    // total of user account
    let sum = 0;
    if (action == "total") {
        console.log("Your current balance is: " + total(dataArr));
    } else if (action == "deposit") {
        fs.appendFile("bank.txt", ", " + amount, function (err) {
            // If an error was experienced we will log it.
            if (err) {
                console.log(err);
            }
            // If no error is experienced show deposit
            else {
                console.log("Deposit completed!");
                dataArr.push(amount);
                console.log("Your current balance is: " + total(dataArr));
            }
        });
    } else if (action == "withdraw") {
        fs.appendFile("bank.txt", ", -" + amount, function (err) {
            // If an error was experienced we will log it.
            if (err) {
                console.log(err);
            }
            // If no error is experienced, show withdrawl.
            else {
                console.log("Withdrawl completed!");
                dataArr.push("-" + amount);
                console.log("Your current balance is: " + total(dataArr));
            }
        });
    } else if (action == "lotto") {
        var lottoWin = 7;
        function lotto() {
            var lottoRoll = Math.floor(Math.random() * 10);
            fs.appendFile("bank.txt", ", -1", function (err) {
                // If an error was experienced we will log it.
                if (err) {
                    console.log(err);
                }
                return;
            });
            console.log(lottoRoll)
            if (lottoRoll == lottoWin) {
                fs.appendFile("bank.txt", ", 50", function (err) {
                    // If an error was experienced we will log it.
                    if (err) {
                        console.log(err);
                    }
                    return;
                });
                console.log("You win");
            } else {
                console.log("Sorry, you lost");
            }
        };
        lotto();
    }
});