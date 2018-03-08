//@ts-check
$(function () {
    function calcLargerInt(num1, num2) {
        if (num1 >= num2) {
            return num1;
        }

        return num2;
    }

    function sort(num1, num2, num3) {
        var initialArray = [num1, num2, num3];
        var finalResultArray = [];
        var max = num1;

        var largest = calcLargerInt(num1, num2);
        largest = calcLargerInt(largest, num3);
        finalResultArray.unshift(largest);
        var index = initialArray.indexOf(largest);
        initialArray.splice(index, 1);
        largest = calcLargerInt(initialArray[0], initialArray[1]);
        finalResultArray.unshift(largest);
        var index = initialArray.indexOf(largest);
        initialArray.splice(index, 1);
        finalResultArray.unshift(initialArray[0]);

        return finalResultArray;
    }

    function howMany(word, char) {
        var wordChars = String(word).split("");
        var count = 0;
        for (var i = 0; i < wordChars.length; i++) {
            if (wordChars[i] === char) {
                count++;
            }
        }

        return count;
    }

    function toggleMouseEnter(idMouseEnter, idToggle) {
        $(idMouseEnter).mouseenter(
            function () {   
                $(idToggle).toggle();
            }
        );
    }

    function toggleMouseLeave(idMouseEnter, idToggle) {
        $(idMouseEnter).mouseleave(
            function () { 
                $(idToggle).toggle();
            }
        );
    }

    var arr = ['#us', '#isr', '#italy', '#holland', '#france'];

     for(var i=0 ; i < arr.length ; i++){
        toggleMouseEnter(arr[i],arr[i]+"-txt");
        toggleMouseLeave(arr[i],arr[i]+"-txt");
     }

});