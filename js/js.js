function fun(){
    window.location.href("https://github.com/Agetto/Instagram_loginpage");
}

var myIndex = 0;
var user = document.getElementById("username");
var pass = document.getElementById("password");

slideshow();

function slideshow() {

var i;
var x = document.getElementsByClassName("phonebox_img");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";  
}

myIndex++;


if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(slideshow, 4000);

}
