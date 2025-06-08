const sound = new Audio('../images/vanessaxv.wav');

const play = document.querySelector('.reproductor__play');
const pausa = document.querySelector('.reproductor__pause');

play.addEventListener('click', () => {
    sound.play();
    play.style.display = 'none';
    pausa.style.display = 'block';
});

pausa.addEventListener('click', () => {
    sound.pause();
    play.style.display = 'block';
    pausa.style.display = 'none';
    
});