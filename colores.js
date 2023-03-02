document.getElementById('personal').onmouseover=

var container = $('#container');

$('.codepen').hover(function(){
   container.css({backgroundColor: "#000000"});
}, function(){
   container.css({backgroundColor: "#eee"});
});
$('.github').hover(function(){
   container.css({backgroundColor: "#4078c0"});
}, function(){
   container.css({backgroundColor: "#eee"});
});
$('.dropbox').hover(function(){
   container.css({backgroundColor: "#1081de"});
}, function(){
   container.css({backgroundColor: "#eee"});
});
$('.bitbucket').hover(function(){
   container.css({backgroundColor: "#205081"});
}, function(){
   container.css({backgroundColor: "#eee"});
});