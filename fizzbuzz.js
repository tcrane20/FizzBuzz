"use strict";

function fizzbuzz_1() {
    var i;

    for (i = 1; i <= 100; i = i + 1) {
        var $answer = $("<p>");
        if (i % 3 !== 0 && i % 5 !== 0) {
            $answer.text(i);
        } else {
            var string = "";

            if (i % 3 === 0) {
                string += "Fizz";
            }
            if (i % 5 === 0) {
                string += "Buzz";
            }
            $answer.text(string);
        }
        $("div.result").append($answer);
    }
}

function fizzbuzz_2(start, end) {
    var i;

    for (i = start; i <= end; i = i + 1) {
        console.log(i);
        var $answer = $("<p>");
        if (i % 3 !== 0 && i % 5 !== 0) {
            $answer.text(i);
        } else {
            var string = "";

            if (i % 3 === 0) {
                string += "Fizz";
            }
            if (i % 5 === 0) {
                string += "Buzz";
            }
            $answer.text(string);
        }
        $("div.result").append($answer);
    }
}

function fizzbuzz_3(arr) {
    var i;

    for (i = 0; i <= arr.length; i = i + 1) {
        var $answer = $("<p>");
        var num = arr[i];
        if (num % 3 !== 0 && num % 5 !== 0) {
            $answer.text(num);
        } else {
            var string = "";

            if (num % 3 === 0) {
                string += "Fizz";
            }
            if (num % 5 === 0) {
                string += "Buzz";
            }
            $answer.text(string);
        }
        $("div.result").append($answer);
    }
}

function fizzbuzz_4(obj) {
    var i;

    for (i = 1; i <= 100; i = i + 1) {
        var $answer = $("<p>");
        if (i % 3 !== 0 && i % 5 !== 0) {
            $answer.text(i);
        } else {
            var string = "";

            if (i % 3 === 0) {
                string += obj.divisibleByThree;
            }
            if (i % 5 === 0) {
                string += obj.divisibleByFive;
            }
            $answer.text(string);
        }
        $("div.result").append($answer);
    }
}

function fizzbuzz_5(arr, obj) {
    var i;

    for (i = 0; i <= arr.length; i = i + 1) {
        var $answer = $("<p>");
        var num = arr[i];
        if (num % 3 !== 0 && num % 5 !== 0) {
            $answer.text(num);
        } else {
            var string = "";

            if (num % 3 === 0) {
                string += obj.divisibleByThree;
            }
            if (num % 5 === 0) {
                string += obj.divisibleByFive;
            }
            $answer.text(string);
        }
        $("div.result").append($answer);
    }
}

var main = function () {

    var cleanup = function() {
        $("div.result").empty();
    };

    $("button.b1").on("click", function (event) {
        cleanup();
        fizzbuzz_1();
    });

    $("button.b2").on("click", function (event) {
        cleanup();
        if ($("input.start").val() !== "" && $("input.end").val() !== "") {
            var start_value = parseInt($("input.start").val()),
                end_value = parseInt($("input.end").val());
            fizzbuzz_2(start_value, end_value);
        }
    });

    $("button.b3").on("click", function (event) {
        cleanup();
        if ($("input.array").val() !== "") {
            var array = $("input.array").val().split(" ");
            fizzbuzz_3(array);
        }
    });

    $("button.b4").on("click", function (event) {
        cleanup();
        if ($("input.div3").val() !== "" && $("input.div5").val() !== "") {
            var div3Word = $("input.div3").val(),
                div5Word = $("input.div5").val();
            var object = {divisibleByThree:div3Word, divisibleByFive:div5Word};
            fizzbuzz_4(object);
        }
    });

    $("button.b5").on("click", function (event) {
        cleanup();
        if ($("input.array").val() !== "" && $("input.div3").val() !== "" && $("input.div5").val() !== "") {
            var array = $("input.array").val().split(" "),
                div3Word = $("input.div3").val(),
                div5Word = $("input.div5").val();
            var object = {divisibleByThree:div3Word, divisibleByFive:div5Word};
            fizzbuzz_5(array, object);
        }
    });

};

$(document).ready(main);