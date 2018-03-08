//@ts-check
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if(howMany == 0){
        return arr;
    }
    if(howMany > arr.length){
      return [];
    }   
    
    arr.splice(0,howMany);
    //arr=arr.slice(arr.length-howMany+1,arr.length);    
    
    return arr;
  }
  
  var r = slasher([1, 2, 3], 2);
  console.log(r);
  r =slasher(["burgers", "fries", "shake"], 1);
  console.log(r);
  