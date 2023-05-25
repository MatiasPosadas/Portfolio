const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})

var check=document.querySelector(".check");
check.addEventListener('click', idioma);


