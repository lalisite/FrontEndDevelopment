function palindrome(str) {

    if(str)
    {
        str = str.replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi,"").toLowerCase();
        //str = str.replace(/\W+/g,"").toLowerCase();
        var origStr = String(str);
        str = str.split("").reverse().join("");
        return str === origStr;
    }
    // Good luck!
    return true;
  }
  
  
  
  var result = palindrome("i am not a polyndrome");
  var result = palindrome("0_0 (: /-\ :) 0-0");

  console.log(result);
  
  []