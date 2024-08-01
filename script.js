document.addEventListener('DOMContentLoaded', function () {
    let progressElement = document.getElementById('progress');
    let progressText = document.getElementById('progressText');
    let invitationContainer = document.getElementById('invitationContainer');
    let loadingPage = document.getElementById('loadingPage');
    let progress = 0;

    function updateProgress() {
        progress += 1;
        progressElement.style.width = progress + '%';
        progressText.textContent = progress + '%';

        if (progress < 100) {
            setTimeout(updateProgress, 50); // Adjust the speed of the progress bar here
        } else {
            loadingPage.style.display = 'none';
            invitationContainer.style.display = 'block';
        }
    }

    updateProgress();
});

//Confetti animation
const button = document.querySelector('.button');
const confettiContainer = document.querySelector('.confetti-container');
const heartSVG = document.querySelector('.heartSVG');
const heartLines = document.querySelector('.heartLines');
const allHeartLines = document.querySelectorAll('.heartLines line');
const particleColors = ['#34A3F2', '#B400AC', '#88E259', '#F75E19', '#39C5C0', '#E3004D'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = particleColors[Math.floor(Math.random() * particleColors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confettiContainer.appendChild(confetti);
        animateConfetti(confetti);
    }
}

function animateConfetti(confetti) {
    const angle = Math.random() * 360;
    const velocity = Math.random() * 500 + 200;
    const duration = Math.random() * 2 + 1;

    gsap.to(confetti, {
        duration: duration,
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        ease: "power1.out",
        onComplete: () => {
            confetti.remove();
        }
    });
}

function drawLines() {
    gsap.to(allHeartLines, {
        duration: 1.5,
        drawSVG: "100%",
        ease: "power1.out",
        onComplete: () => {
            gsap.to(heartSVG, {
                duration: 0.5,
                autoAlpha: 0,
                ease: "power1.out"
            });
        }
    });
}

function explodeParticles() {
    const particles = [];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElementNS("http://www.w3.org/2000/svg", "use");
        particle.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#star");
        heartSVG.appendChild(particle);
        particles.push(particle);
        gsap.set(particle, {
            x: 300,
            y: 300,
            fill: particleColors[Math.floor(Math.random() * particleColors.length)],
            opacity: 1,
            transformOrigin: '50% 50%'
        });
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    gsap.to(particle, {
        duration: Math.random() * 1 + 1,
        x: `+=${Math.random() * 600 - 300}`,
        y: `+=${Math.random() * 600 - 300}`,
        scale: Math.random() * 0.5 + 0.5,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => {
            particle.remove();
        }
    });
}

button.addEventListener('click', () => {
    createConfetti();
    drawLines();
    explodeParticles();
    gsap.to(button, {
        duration: 0.2,
        scale: 1.1,
        ease: "power1.out",
        onComplete: () => {
            gsap.to(button, {
                duration: 0.4,
                scale: 1,
                ease: "back.out(1.7)"
            });
        }
    });
});

0

