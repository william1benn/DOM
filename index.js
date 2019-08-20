
let btnLite = document.getElementById('switch');
let light = document.getElementsByTagName('body')[0];


btnLite.addEventListener('click',()=>{

if ( btnLite.classList.contains('lite') ){

    btnLite.innerText = "Dark Mode";

    btnLite.classList.add('dark');
    
    btnLite.classList.remove("lite");

    light.style.background = "blue";

}

if ( btnLite.classList.contains('dark') ){

    btnLite.innerText = "Light Mode";

    btnLite.classList.add('lite');
    
    btnLite.classList.remove("dark");
    
    light.style.background = "Black";
}

})