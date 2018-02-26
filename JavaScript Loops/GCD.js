var findGCD = function(num1,num2){
    var stopNum=0;
    if(num1 < num2)
    {
        stopNum = num1;
    }
    else
    {
        stopNum= num2;
    }

    var gcd = 1;
    for(var i=2 ; i <= stopNum ; i++){
        if(num1%i==0 && num2%i==0)
        {
            gcd = i;
        }
    }
    return gcd;
};

var result = findGCD(5,19);
console.log(result);