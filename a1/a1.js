/****************************************************************************
*	Assignment 1
*	I declare that this assignment is my own work in accordance with Seneca Academic Policy.
*	No part of this assignment has been copied manually or electronically from any other source
*	(including web sites) or distributed to other students.
*	Name: Omar Hussein	Student ID: 118073204	Date: Jan 20, 2021 	
****************************************************************************/

function playNumbers() {

    var flag = 0, args = "", sum = 0;

    if (arguments.length == 0) {
        console.log("There are no inputs.");

    }
    else {

        for (let i = 0; i < arguments.length; ++i) {
            if (isNaN(arguments[i])) {
                console.log(arguments[i] + " is not a number.");
                ++flag;
            }
        }

        if (flag == 0) {
            for (let j = 0; j < arguments.length; ++j) {
                args += String(arguments[j]);
                sum += parseFloat(arguments[j]);

                if (j < (arguments.length - 1)) {
                    args += ", ";
                }
            }
            console.log("The largest number of (" + args + ") is " + Math.max.apply(null, arguments));
            console.log("The avarage of (" + args + ") is " + (sum / arguments.length));
        }
    }
}

var convertCF = function (val, cf) {
    var temp = 0, flag = true;
    if (isNaN(val)) {
        console.log("I need a number");
        flag = false;
    }
    else if (cf != "c" && cf != "C" && cf != "f" && cf != "F") {
        console.log("I am confused :(");
        flag = false;
    }
    if (flag) {
        if (cf == "f" || cf == "F") {
            temp = (parseFloat(val) - 32) * (5 / 9);
            val += "F";
            temp += "C"
        }
        else if (cf == "c" || cf == "C") {
            temp = (parseFloat(val) * (9 / 5)) + 32;
            val += "C";
            temp += "F";
        }
        console.log(val + " is equivalant to " + temp);
    }
}

console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9, 3, 6);
playNumbers(3, 5, 1, 3, 5);
playNumbers("Good day!", 3, 4, 32, "hi", "we");

console.log("\n/***************************** Task2 *************************/");
convertCF("avc", "C");
convertCF("32", "M");
convertCF(32, "F");
convertCF(0, "C");
convertCF(122, "F");