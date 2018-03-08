//@ts-check

var calcLargerInt = function(num1,num2) {
    if(num1 >= num2){
        return num1;
    }

    return num2;
}

var sort = function(num1,num2,num3){
    var initialArray =[num1,num2,num3];
    var finalResultArray =[];
    var max = num1;

    var largest = calcLargerInt(num1,num2);
    largest = calcLargerInt(largest,num3);
    finalResultArray.unshift(largest);
    var index = initialArray.indexOf(largest);
    initialArray.splice(index,1);
    largest = calcLargerInt(initialArray[0],initialArray[1]);
    finalResultArray.unshift(largest);
    var index = initialArray.indexOf(largest);
    initialArray.splice(index,1);
    finalResultArray.unshift(initialArray[0]);

    return finalResultArray;
}

var howMany = function(word,char){
    var wordChars = String(word).split("");
    var count = 0;
    for(var i=0;i < wordChars.length; i++){
        if(wordChars[i] === char){
            count++;
        }
    }

    return count;
}


$(function () {    
    $("#calculate-btn").click(
        function (){            
            var word = $("#firstWord").val();
            var char = $("#character").val();
            
            var result = howMany(word,char);
            
            $("#result").val(result);
            var html = '<h1>' +result + '</h1>';            
            $("#resultDiv").html(html);
        }
    );
});