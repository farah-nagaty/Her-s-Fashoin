function myfun_alert()
{
    alert("Welcome to Flash sale " )
}

function myF1() 
{
  document.getElementById("image1").src = "img/W1 (4).png"; 
}
function myF2() 
{
  document.getElementById("image2").src = "img/T1.png"; 
}
function myF3() 
{
  document.getElementById("image3").src = "img/T1 (4).png"; 
}
function p1()
{
    document.getElementById("p1").style = "color : orange" ;
}
  //  j query
  $(document).ready(function(){
    $(".move-btn").click(function(){
      $("#p0").css("color", "white").slideUp(2000).slideDown(2000);
    });
  });
  ////////////////////////////////////////////////////////////////////
  //login page

  function Click() {
    document.getElementById("Fatma").innerHTML = "Hello in our side";
  }
  
  function con() {
    document.getElementById("1998").innerHTML = "Thank you for joining";
  }
  
  function mouseDown() {
    document.getElementById("2002").style.color = "black";
  }
  
  function mouseUp() {
    document.getElementById("2002").style.color = "blue";
  }
  
  $(document).ready(function () {
    $(".two #btn3").click(function () {
      alert("Value: " + $("#five").val());
    });
  });
//about page
alert('Thank You For Shopping At Our Website!') 

  //contact us
  function myfun_alert()
{
    alert(" Thank you for your message " )
}
document.addEventListener("DOMContentLoaded", function() {
    fields.fullname = document.getElementById('fullname');
    fields.Email = document.getElementById('Email');
    fields.country = document.getElementById('country');
    fields.Message = document.getElementById('Message');
   })
function validateForm() {
    var fullname = document.forms["contacus"]["fullname"].value;
    var Email = document.forms["contactus"]["Email"].value;
    var Message = document.forms["contactus"]["Message"].value;
  
    //if any of them is empty prevent submit
    if (!fullname || !Email || !Message) {
      return false;
    }
    if (!isValidEmail(Email) || (fullname && !isValidfullname(fullname))) {
        return false;
      }
    
      return true;
    }
    $("#show").click(function(){
      $("p").show();
    });

    //service page
    $(document).ready(function(){
      $(".btnn").click(function(){
        $(".wrapper").slideDown("slow");
      });
    });

     
