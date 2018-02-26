
var isArmstrong = function(threedigit){
    if(threedigit < 100 || threedigit > 999){
        return false;
    }

    var origNum = threedigit;
    var armstrong = 0;
    for(var i=0;i < 3 ; i++){
        digit = threedigit%10;
        threedigit = Math.floor(threedigit/10);
        armstrong+= digit*digit*digit;
    }

    return origNum == armstrong ? true: false;
};

for(var i =100; i < 1000 ; i++){
    if(isArmstrong(i))
    {
        console.log(i);
    }
}