const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{        
        mario.classList.remove('jump')
    }, 600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',' ')

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 60) {
        
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Imagens/game_over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);