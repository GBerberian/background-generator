let h3 = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

let background = document.getElementById('gradient');

function changeColor() {
    background.style.background = 'linear-gradient(to right, '+color1.value+','+color2.value+')';
}


function changeH3(){
    h3.textContent = 'linear-gradient(to right, '+color1.value+','+color2.value+')';
}

color1.addEventListener('input', function(){
    console.log(color1.value);
    changeColor();
    changeH3();
    
});


color2.addEventListener('input', function(){
    console.log(color1.value);
    changeColor();
    changeH3();
    
});
