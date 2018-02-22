$("document").ready(function(){
    //$("p").hide(2000);

    $("#hidep").click(function(){
        $("#hide-show-p").hide(2000);        
    });

    $("#showp").click(function(){
        $("hide-show-p").show(2000);        
    });

    $("#togglep").click(function(){
        $("#toggleme").toggle(1000);
    });

});