// document.querySelector("h1").innerHTML = "hello world!" ;

// 1. work with JQuery how to manipulate tag,class 

$("h1").text("hello, this is my jquery output");


//prepend to add value before any text or item
$("p").prepend("the value has added by prepend value , ");


$(".my-class h2").text("manipulated by jquery,to change a specific tag inside the class");


var myParagraph = $("<h4></h4>").text("this paragraph is made by jquery");

$("h2").before(myParagraph);



//  work  with  attribute 

// normal javaScript code 
var attr = document.querySelector("a").getAttribute("href");

console.log(attr);

// jquery code

$("a").attr("href");


// set attribute

var setAttr = document.querySelector("a").setAttribute("href", "https:/www.youtube.com")

// in JQuery 

$("a").attr("href", "https:/www.youtube.com")


// CSS styling by jquery
// after using .css inside the parenthesis, first value is the   and second value is the value 

$(".css-style").css("color", "red");
$(".css-style").css("font-size", "3rem");
$(".css-style").css("font-weight", "bolder");

// also may write in one line 
$(".css-style").css({"color":"green" , "font-size": "4rem" , "font-weight" : "bolder"});



/// include css from style.css  by   ->  addClass method

document.querySelector(".my-class span").classList.add("style1");

document.querySelector(".my-class span").classList.remove("style1");


$(".my-class span").addClass("style1");



// event listener

//  document.querySelector("button").addEventListener("click", function (){
//      document.querySelector("span").innerHTML = "you have clicked";
//  })


// in jquery

$("button").click( function (){
    // $("span").text("you have clicked");
    $("span").toggleClass("span-style");
})



$(".mybtn").click(function() {
    var value = this.innerHTML ;
    $(".called").text(value + " is called ")
})





// simple login project

$("#login-btn").click(function (){ 
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if(password1 != ""  && password2 != ""){

        if(password1 == password2){
            alert("you are successfully logged in")
        }else{
            alert("Password is Mismatch")
        }



    }else{
        alert("Please enter a password!");
    }







})



//  Animation 

// show , hide and  toggle in jquery method
$("#btn").click( function (){
    
  // show animation
    //   $(".paragraph").show(1000);
 
 // hide animation
    //   $(".paragraph").hide(1000);
  
 //toggle    The toggle() method toggles between hide() and show() for the selected elements.
 
    $(".paragraph").toggle(1000);

  

})


// fadeIn , fadeOut and fadeToggle in jquery
// slideUp , slideDown in jquery

$("#fade").click(function(){

    // fade in 

    // $(".para2").fadeIn(3000);

    //fade out
    // $(".para2").fadeOut(5000);

    //fadeToggle

    // $(".para2").fadeToggle(2000);


    // slideUp and slideDown
    // $(".para2").slideUp(1000).slideDown(6000);



    /// animation method in jquery
// animate has a key and a value it works with json
    $(".para2").animate(
        {
            fontSize : "1.2rem",
            paddingLeft : "2rem",
            width : "70rem",
            height : "500px"
        }
    )




})






























