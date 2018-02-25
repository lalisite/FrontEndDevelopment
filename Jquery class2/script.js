// Code goes here

/*
function getString() {
  return "Hello " + "World";
}


alert(getString);
*/


$(document).ready(function () {
  
    /*
    function hideNShowP() {
      $("p").hide(2000);
      $("p").show(2000);
      
    }
  
    $("#hide-p").click(hideNShowP);
    */
    
    $("#hide-p").click(function () {
      $("#hide-show-p").hide(1000);
    })
    
    $("#show-p").click(function () {
      $("#hide-show-p").show(1000);
    })
  
    $("#toggle-p").click(function () {
      $("#toggle-me").toggle(1000);
    })
    
    $("#btn-animate").click(function () {
      $("#my-div").animate({
        left: "500px",
        opacity: "0.5",
        width: "250px",
        height: "250px"
      });
    });
    
    
    
    //alert($("#change-text").html());
    
    // Example for changing html content. Similar to: document.getElementById("#change-text").innerHTML = "<b>New Text</b>"
    $("#change-text").html("<b>New Text</b>");
    
    // Example for reading values from form
    $("#fname").val("Joe")
    $("#btn-form").click(function () {
      alert($("#fname").val())
    })
    
    // Example for reading and changing attribute values
    console.log($("#link").attr("href"));                   // Read (Get)
    $("#link").attr("href", "http://www.facebook.com");     // Change (Set)
    $("#link").html("Facebook");
    
    // Example for reading and changing css 
    $("#link").css("color", "red");
    $("#link").css("text-decoration", "none");
    
    $("#class-btn").click(function () {
      $("#link").toggleClass("blue-background");
    });
    
    $("#btn-load-contact").click(function () {
      $("#my-main").load("contact.html")
    })
  
    $("#btn-load-about").click(function () {
      $("#my-main").load("about.html")
    })
    
  })
  