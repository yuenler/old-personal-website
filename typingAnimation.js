const phrases = [
  'I am a software developer',
  'I am a researcher',
  'I am a freshman at Harvard College',
    'I make a pretty fire-ass bussin apple pie',
    'I am underweight but I’ve been eating more so dwai',
    'I lowkey got tiktok famous but then I went private cause digital footprint',
    'I need to shave my unibrow on a bi-weekly basis',
    'I love my oversized blanket hoodie'
    
];

const element = document.getElementById('typing-example');
const cursor = document.getElementById('cursor');
let direction = -1;
let phraseIdx = 0;
let sentence = phrases[phraseIdx];
let cursorPos = sentence.length;
let blinking = false;
let blinkIntervals = 0;

const switchDirection = () => {
  direction *= -1;
  toggleTyping();
  if (direction === 1) {
    /* Just started typing again, time to switch phrase */
    phraseIdx++;
    if (phraseIdx >= phrases.length) {phraseIdx = 0;}
    sentence = phrases[phraseIdx];
  }
};

const toggleTyping = () => {
  blinking = !blinking;
  if (blinking) {cursor.classList.add('blink')} else {cursor.classList.remove('blink');}
}

window.setInterval(() => {
  const atStart = cursorPos === 0;
  const atEnd = cursorPos === sentence.length;
  if (atStart && direction === -1 || atEnd && direction === 1) {switchDirection();}

  if (!blinking) {
    cursorPos += direction;
    element.innerText = sentence.slice(0, cursorPos);
  } else {
    blinkIntervals++;
    if (blinkIntervals >= 12) {
      blinkIntervals = 0;
      toggleTyping();
    }
  }
}, 90);