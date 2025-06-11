/* const loader = document.querySelector('.loader'); */
const elementoAnimado = document.querySelectorAll('.anim');
const loader = document.querySelector('.loader');

const jsConfetti = new JSConfetti();

setTimeout(() => {
    loader.classList.add('open');
    jsConfetti.addConfetti({
  confettiColors: [
    '#009D71', '#1eb187', '#42cea6', '#6df1cc', '#c3fded', '#dff7f0',
    ],
  });
}, 2500);

const cargarElemento = (entradas) => {
    entradas.forEach( (entrada) => {
        if(entrada.isIntersecting == true) {
            entrada.target.classList.add('intersected');
        }
    });
}

const observador = new IntersectionObserver(cargarElemento, {
    root: null,
});

elementoAnimado.forEach(elemento => {
    observador.observe(elemento);
})