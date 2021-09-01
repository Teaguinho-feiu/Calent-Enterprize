$(document).ready(() => {

    // Imagem Com legenda

    $('#img-calent').click(() => {
        if ($('#texto-img-calent').is(':hidden')) {
            $('#texto-img-calent').slideDown(500);
        } else {
            $('#texto-img-calent').slideUp(500)
        }
    });

});

function linkInterno (id) {
    var distancia = document.getElementById(id).offsetTop - 50;

    smoothScrollTo(0, distancia, 500);
}

function smoothScrollTo(endX, endY, duration) {

    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(0, newY);
    }, 1000 / 60); // 60 fps

  };