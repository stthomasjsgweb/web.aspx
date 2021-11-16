var arr = [];

arr[0] = new Image();
arr[0].src = "first.png";

arr[1] = new Image();
arr[1].src = "Opp.jpg";

arr[2] = new Image();
arr[2].src = "Oppp.jpg";

arr[3] = new Image();
arr[3].src = "Yoyo.jfif";

arr[4] = new Image();
arr[4].src = "Koko.jfif";

arr[5] = new Image();
arr[5].src = "Ohh.jpg";

/*arr[6] = new Image();
arr[6].src = "https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/54279187_1018146558388832_1358091873293434880_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gfLBE6D43W4AX_yvht2&_nc_ht=scontent.fnag5-1.fna&oh=a729a67471fb805563734c9653a96fa4&oe=60C534D1";

arr[7] = new Image();
arr[7].src = "https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/79387357_1237642303105922_7490852847500656640_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Q7UmFV1EnTQAX8oCcN1&_nc_ht=scontent.frpr2-1.fna&oh=9e91a8e4df73f5ae92ce152b69a28283&oe=60C63628";*/
var i = 0;

function slideshow() {
          document.getElementById("change-image").src = arr[i].src;
          i++;
          if (i == arr.length) {
                    i = 0;
          }
          setTimeout(function () {
                    slideshow();
          }, 2000);
}

var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
el_up.innerHTML = "Click on the button to disable right click";

function gfg_Run() {
          document.addEventListener('contextmenu',
                    event => event.preventDefault());
}
/* Open the sidenav */
function openNav() {
          document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
}
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

function sizeFunc() {
          document.getElementById("mySidenav").style.width = width;
          document.getElementById("mySidenav").style.height = height;
}
//To show chatbot
function showChat() {
          document.getElementById("chatbot").style.visibility = "visible";
          document.getElementById("crossmark").style.visibility = "visible";
}

function closeChat() {
          document.getElementById("chatbot").style.visibility = "hidden";
          document.getElementById("crossmark").style.visibility = "hidden";
}