var grades = [80,77,88,95,68];
var names = ["David","Vinoth","Divya","Ishitha","Thomas"];

var top_avgs = [60,70,80,90,100];
var results= ["Very Low","Low","Medium","Good","Verty Good"];

var sum=0;
for(var i=0;i < grades.length;i++){
    sum += grades[i];
}

var avg = sum /grades.length;

for(var i=0; i< top_avgs.length; i++){
    if(avg < top_avgs[i]){
        console.log("The Average " + avg + " is " + results[i]);
        break;
    }
}