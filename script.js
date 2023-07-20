var mais = document.getElementById('plus')
var menos = document.getElementById('menos')
var reset = document.getElementById('reset')
var mostrar = document.querySelector('.result')

const updateResult = ()=>{
    mostrar.textContent = contar
}

let contar = 0;

mais.addEventListener('click', ()=>{
    contar++;
   updateResult();

})

menos.addEventListener('click', ()=>{
    contar--;
   updateResult();

})

reset.addEventListener('click', ()=>{
    contar = 0;
    updateResult();
})

