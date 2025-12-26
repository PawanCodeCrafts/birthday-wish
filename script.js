
const bgAudio = new Audio('happy-birthday.mp3');
bgAudio.preload = 'auto';
bgAudio.loop = false;
bgAudio.volume = 0.5;
function playAudio() {
    // bgAudio.play().catch(err => console.log(err));
    document.removeEventListener('click', playAudio);
    document.removeEventListener('touchstart', playAudio);
}

document.addEventListener('click', playAudio);
document.addEventListener('touchstart', playAudio);

AOS.init({
    once: true,
    easing: 'ease-in-out',
    duration: 1000,
});

const body = document.querySelector('body');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const candle = document.querySelector('.candle');
const flame = document.querySelector('.flame');
const wish = document.querySelector('#wish');
const cakename = document.querySelector('#cakename');

window.onload = () => {
    page1.style.display = 'flex';
    page2.style.display = 'none';
};

let userName = '';

form.addEventListener('submit', function (dets) {
    dets.preventDefault();
    if (inputs[0].value.trim() !== '') {
        userName = inputs[0].value;
        cakename.textContent = userName;
        page1.style.display = 'none';
        body.style.backgroundColor = '#fff0f8';
        page2.style.display = 'block';
        AOS.refresh();
    }
    bgAudio.play().catch(err => console.log(err));
});

candle.addEventListener('click', () => {
    page2.style.backgroundColor = '#04040c';
    body.style.backgroundColor = '#04040c';
    flame.style.backgroundColor = '#fca821';
    flame.style.boxShadow = '0px 0px 70px rgb(242, 218, 3)';
    flame.style.opacity = '1';
    wish.innerHTML = `🥳 Happy Birthday to ${userName} 💖🎉`;
    wish.classList.add('show-msg');

    setTimeout(() => {
        body.innerHTML = `
   
      <h3 data-aos="zoom-in" style="text-align:center; color:lightblue; margin:20px;">
       Happy Birthday , My dear  🌸✨ <span style="color:magenta; text-transform:uppercase; font-size:30px;"> ${userName} </span>, today the world feels a little brighter, a little more magical — because it’s your special day!
        🎂💖 You’re the sparkle that makes ordinary moments shine 🌟 and the warmth that makes hearts smile 😊. May your
        path be lined with love 💕, laughter 😂, and dreams that bloom into reality 🌈. Keep shining like the star you
        are 🌠 — spreading kindness, joy, and positivity wherever you go! 🎁🎉💐
    </h3>
   
    <br>
    <h2 data-aos="fade-up" style="text-align:center; color:magenta">
        Waheguru g tenu hameshaaa khush rakhn ❤!!!!
        Once Again, Happy birthday to you!
    </h2>
    `;
        AOS.refresh();
    }, 5000);
});

//  <h3 data-aos="zoom-in" style="text-align:center; color:lightblue; margin:20px;">
//         🌸✨ <span style="color:magenta; text-transform:uppercase; font-size:30px;"> ${userName} </span>, today the world feels a little brighter, a little more magical — because it’s your special day!
//         🎂💖 You’re the sparkle that makes ordinary moments shine 🌟 and the warmth that makes hearts smile 😊. May your
//         path be lined with love 💕, laughter 😂, and dreams that bloom into reality 🌈. Keep shining like the star you
//         are 🌠 — spreading kindness, joy, and positivity wherever you go! 🎁🎉💐
//     </h3>