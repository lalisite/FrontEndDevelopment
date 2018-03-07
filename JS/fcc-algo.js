//@ts-check
function truncateString(str, num) {
    // Clear out that junk in your trunk
    var result = "";
    if(num <= str.length){
        result = String(str).slice(0,num-3) + "...";
    }   
    else if(num >=0 && num<=3){
        result = String(str).slice(0,num) + "...";
    }
    
    str = result;        

    return str;
  }
  
  var str = truncateString("A-", 1);

  console.log(str);

  str = truncateString("A-tisket a-tasket A green and yellow basket", 11);

  console.log(str);
  
  
  