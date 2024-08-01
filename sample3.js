        // Sakura animation script
        function createSakura() {
            const container = document.querySelector('.sakura-container');
            const sakura = document.createElement('div');
            sakura.classList.add('sakura', `flower${Math.floor(Math.random() * 4) + 1}`);
            sakura.style.left = Math.random() * 100 + 'vw';
            sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
            sakura.style.backgroundColor = ['#F9E400', '#FFAF00', '#F5004F', '#7C00FE'][Math.floor(Math.random() * 4)];
            container.appendChild(sakura);
            setTimeout(() => {
                sakura.remove();
            }, 5000);
        }

        setInterval(createSakura, 300);

        // Countdown timer script
        const eventDate = new Date('2024-08-18T03:09:00').getTime();
        
        const timerElement = document.getElementById('timer');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        function updateTimer() {
            const now = new Date().getTime();
            const timeRemaining = eventDate - now;

            if (timeRemaining < 0) {
                clearInterval(timerInterval);
                timerElement.innerHTML = 'Event has started!';
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        }

        const timerInterval = setInterval(updateTimer, 1000);

        // Add to Calendar script
        function addToCalendar() {
            const event = {
                title: 'Wedding Invitation',
                start: eventDate,
                description: 'Join us for a beautiful ceremony',
                location: 'Location address'
            };
            
            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${new Date(event.start).toISOString().replace(/-|:|\.\d\d\d/g, "")}/${new Date(event.start + 3600000).toISOString().replace(/-|:|\.\d\d\d/g, "")}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
            window.open(calendarUrl, '_blank');
        }

// Music control script
const backgroundMusic = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    } else {
        backgroundMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
}

// Start music 3 seconds after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        backgroundMusic.play();
        isPlaying = true;
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    }, 3000); // 3000 milliseconds = 3 seconds
});

        
        // Load Google Translate script
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,te',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
        
        (function() {
            var gtScript = document.createElement('script');
            gtScript.type = 'text/javascript';
            gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.head.appendChild(gtScript);
        })();
        


//Code for Contact Section
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#contact h2', 'h2-active');
    reveal('#contact p', 'p-active');
    reveal('#contact .contactForm', 'contactForm-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowheight = window.innerHeight;

    elements.forEach(function (element) {
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});
//End of Contact Section

