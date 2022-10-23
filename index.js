const containerParticulas = document.querySelector('.containerParticulas')
const btnCreateParticulas = document.getElementById('botonCreateParticulas')

// llamando valor del input
const inputElement = document.getElementById('cantidad')

btnCreateParticulas.addEventListener("click", () => {
    createParticulas(Number(inputElement.value))
    starAnimation('.particula')
})

function starAnimation(element){
    anime({
        targets: element,
        translateY: [100,0,100,0],
        duration: 1000,
        loop: true,
        height: [40,60,40,60],
        easing: 'linear'
      });
}

function createParticulas(cantidad){
    let html = ''
    for (let index = 0; index < cantidad; index++) {
        html += '<div class="particula"></div>'
    }
    containerParticulas.innerHTML = html
}

