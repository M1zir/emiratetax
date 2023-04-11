var typed = new Typed(".multiple-text",{
  strings: ["Taxes","Auditing", "Accounting", "And More"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 100,
  loop: true,
})

window.addEventListener('DOMContentLoaded', (event) => {
    lottie.loadAnimation({
      container: document.getElementById('home-img'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animation.json'
    });
  });
