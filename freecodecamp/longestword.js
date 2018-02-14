function findLongestWord(str) {

    if(str)
    {
        var wordArr = str.split(" ");
        var max = 0;

        wordArr.forEach(item => {
            if(item.length > max)
            {
                max = item.length;
            }
        });     
    }

    return max;
  }
  
  
  var result = findLongestWord("The quick brown fox jumped over the lazy dog");

  console.log(result);
  
  