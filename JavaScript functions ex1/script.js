//@ts-check

var calcLargerInt = function(num1,num2) {
    if(num1 >= num2){
        return num1;
    }

    return num2;
}

$(function () {    
    $("#calculate-btn").click(
        function (){            
            var firstNumStr = $("#firstNum").val();
            var secondNumStr = $("#secondNum").val();
            var result = calcLargerInt(parseInt(firstNumStr),parseInt(secondNumStr));
            $("#result").val(result);
        }
    );
});