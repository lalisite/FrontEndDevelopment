var isHappy= function(num){
    temp = num;
    var final_num = 0;
    while(num != 1 && temp != final_num){
        while(num !=0){
            var digit = num%10;
            num = Math.floor(num / 10);
            final_num += digit*digit;            
        }
        num=final_num;
    }
    return num == 1 ? true :false;
}

var counter= 0;
var i =1;
while(counter < 5){
    if(isHappy(i)){
        counter++;
        console.log("Happy " + i);
    }
    else{
        console.log(i);    
    }
    
    i++;
}
