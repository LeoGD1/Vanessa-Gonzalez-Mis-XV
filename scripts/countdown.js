let dias = document.querySelector('.dias');
let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');

const getRemainTime = deadline => {
    let now = new Date();
    let remainTime = (new Date(deadline) - now + 1000) / 1000;     //devielve numero en milisegundos
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);    
    let remainDays = Math.floor(remainTime / (3600 * 24));   

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline) => {
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        dias.innerHTML = t.remainDays;
        horas.innerHTML = t.remainHours;
        minutos.innerHTML = t.remainMinutes;
        segundos.innerHTML = t.remainSeconds;
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            dias.textContent = "--";
            horas.textContent = "--";
            minutos.textContent = "--";
            segundos.textContent = "--";
        }
    }, 1000);

};

countdown('Aug 16 2025 14:00:00 GMT-0600');