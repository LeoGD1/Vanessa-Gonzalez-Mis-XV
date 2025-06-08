/* const loader = document.querySelector('.loader'); */
const elementoAnimado = document.querySelectorAll('.anim');

/* setTimeout(() => {
    loader.classList.add('open');
}, 2000); */

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