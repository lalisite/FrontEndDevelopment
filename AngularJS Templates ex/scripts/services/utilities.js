//@ts-check
app.factory("convert",function($log){

    var kmRates= {
        KM : 1,
        MILE : 0.621371192,
        METER: 1000,
        FEET :3280.8399
    }

    function prettyTime(time){
        $log.debug("MOVIESSERVICE: input" + time);
        var hours = Math.floor(time / 60);
        var minutes = time%60;
        var result = hours+"h " + minutes +"min"; 
        $log.debug("MOVIESSERVICE: output" + result);
        return result;
    }
    return{
        toPretty : prettyTime        
    }
});