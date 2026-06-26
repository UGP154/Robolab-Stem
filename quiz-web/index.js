const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
let overLay = document.querySelector('.overlay');
let overLay2 = document.querySelector('.overlay2');

let loginBtn = document.querySelector('.login-btn');
let loginBtn2 = document.querySelector('.login-btn');

let formBox = document.querySelector('.form-box');
let formBox2 = document.querySelector('.form-box2');

// footer log in btn
let loginbtn3 = document.querySelector(".login-btn2");





let logbtn = document.querySelector('.logbtn');

const  loginButton= document.querySelector('.login-button');




    function togglePages() {
            const regPage = document.getElementById('regPage');
            const logFilePage = document.getElementById('logFilePage');
            const btn = document.getElementById('toggleBtn');

            if (regPage.classList.contains('hidden')) {
                regPage.classList.remove('hidden');
                logFilePage.classList.add('hidden');
                btn.textContent = 'Register';

            } else {
                regPage.classList.add('hidden');
                logFilePage.classList.remove('hidden');
                btn.textContent = 'Login';

            }
        }


// footer log in btn

loginbtn3.addEventListener('click', () => {
    showModel();
    showModel2();
})

// main login btn code 

loginBtn.addEventListener('click', () => {
    showModel();

})

loginBtn2.addEventListener('click', () => {

    showModel2();

})

function showModel(){
    formBox.classList.add('showoverlay'); 
    formBox.classList.add('showloginform'); 
}
function closeModel(){
    formBox.classList.remove('showoverlay'); 
    formBox.classList.remove('showloginform'); 
}

function showModel2(){
    formBox2.classList.add('showoverlay'); 
    formBox2.classList.add('showloginform'); 
}


function closeModel2(){
    formBox2.classList.remove('showoverlay'); 
    formBox2.classList.remove('showloginform'); 
}




// greeting...
let demo = document.querySelector(".demo");
let ga = document.querySelector(".ga");
function greetings () {
    let time = new Date().getHours();
    let gritings;
    if(time > 4 && time <12) {
        ga.classList.add('ga-hide');

        gritings="☀️Good Morning...! "
        demo.innerHTML = gritings;
    }
    else if (time < 17){
        ga.classList.add('ga-show');


    }
    else{
        ga.classList.add('ga-hide');

        gritings="🌙good Evening...! "
        demo.innerHTML = gritings;

    }
    

}
greetings ();



// navbar toggle ...
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');

    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (navbarMenu.classList.contains('active')) {
        
        const isClickInsideMenu = navbarMenu.contains(event.target);
        const isClickInsideToggle = navbarToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideToggle) {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');


        }
    }
});

$(function () {
            $("li").click(function (e) {
                e.preventDefault();
                $("li").removeClass("active");
                $(this).addClass("active");


            });
});
