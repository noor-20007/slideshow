var slideshow = document.getElementById('slideshow');
var imgs = ["images/1.webp","images/2.jpg","images/3.jpg", "images/4.png" , "images/5.jpg" , "images/6.png"];
var i =0;
var show = function(){
    slideshow.src=imgs[i];
    if(i<imgs.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("show()",2000);
}
show();