document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const message = document.querySelector('.message');
  
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      document.body.appendChild(confetti);
  
      gsap.fromTo(confetti, {
        x: Math.random() * window.innerWidth,
        y: -20,
        backgroundColor:` hsl(${Math.random() * 360}, 100%, 50%)`
      },
       {
        y: window.innerHeight,
        duration: Math.random() * 2 + 2,
        ease: "power1.out",
        onComplete: () => confetti.remove()
      });
    }
  
    revealButton.addEventListener('click', function() {
      gsap.to('.card', { duration: 1, scale: 1.1, yoyo: true, repeat: 1 });
      gsap.to('.message', { duration: 1, display: 'block', opacity: 1, y: -20, ease: "bounce.out" });
      revealButton.style.display = 'none';
  
      for (let i = 0; i < 100; i++) {
        setTimeout(createConfetti, i * 30);
      }
    });
  });

