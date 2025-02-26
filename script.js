// Puedes agregar funcionalidades adicionales aquí
// Por ejemplo, pausar todos los videos excepto el que se está reproduciendo

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('play', () => {
        videos.forEach(otherVideo => {
            if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
            }
        });
    });
});