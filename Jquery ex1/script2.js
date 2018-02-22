$(function(){
    // $("p.hide").hide();

    $("#toggle-btn").click(function() {
        $("p.hide").toggle();
    });    

    //$("main>article>section>div>p").hide();

    $("main>article>section>div>p").hover(function() {
        $(this).hide(2000);
    });
    // $("footer").hide();

    $("#fade-out-footer-btn").dblclick(function(){
        $("footer").fadeOut();
    });
});