const $ = require('jquery');
const scroller = document.querySelector("body");
const nav = document.querySelector(".Mynavbar");
const login = document.querySelector(".login");


window.onscroll = function (event) {
    if(window.scrollY>2){
        $(nav).css("background-color","white");
    }else{
        $(nav).css("background-color","#fbc820");
    }
};
