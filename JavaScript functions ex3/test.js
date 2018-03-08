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

console.log(howMany("aba","a"))