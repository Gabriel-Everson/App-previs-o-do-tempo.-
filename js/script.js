const image = document.getElementById('temp-image')
const ssa = document.getElementById('botao-S');
const rj = document.getElementById('botao-Rj');
const sp = document.getElementById('botao-Sp');
const text = document.getElementById('temp-text');

ssa.addEventListener('click',()=>{
    image.src = "images/ensolarado.png";
    text.textContent = "35°C - Ensolarado";
})
rj.addEventListener('click',()=>{
    image.src = "images/nublado.png";
    text.textContent = "22°C - Nublado";
})
sp.addEventListener('click',()=>{
    image.src = "images/dia-chuvoso.png";
    text.textContent = "13°C - Chuvoso";
})