// Typing effect
const typing = document.querySelector('.typing');
const words = ['Programming', 'Graphic Design', 'Digital Marketing', 'Animation'];
let i = 0, j = 0, currentWord = [], isDeleting = false, wait = 2000;

function type() {
    if (i >= words.length) i = 0;
    const word = words[i];

    if (isDeleting) currentWord.pop();
    else currentWord.push(word[j++]);

    typing.textContent = currentWord.join('');
    let speed = isDeleting ? 100 : 200;

    if (!isDeleting && j === word.length) { speed = wait; isDeleting = true; }
    else if (isDeleting && currentWord.length === 0) { isDeleting = false; j = 0; i++; speed = 500; }

    setTimeout(type, speed);
}
type();

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;
        if (c < target) { counter.innerText = `${Math.ceil(c + increment)}`; setTimeout(updateCounter, 10); }
        else counter.innerText = target;
    };
    updateCounter();
});