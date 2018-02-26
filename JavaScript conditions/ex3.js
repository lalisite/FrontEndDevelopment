var x=20,y=-1,z=4;

var max=x;
if(y > max){
    max = y;
}

if(z > max){
    max = z;
}

var result = max + " ";

if(x < max){
    if(y < max){
        if(x < y){
            result += y+" " + x;
        }
        else{
            result += x+" " + y;
        }
    }
    else if(x < z){
        result +=z+" " + x;
    }
    else{
        result +=x+" " + z;
    }
}
else{
    if(y < z){
        result += z+" " + y;
    }
    else{
        result += x+" " + z;
    }
}

console.log(result);