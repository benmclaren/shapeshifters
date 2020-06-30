// we want to duplicate our crosses content ten times
const duplicateHtml = (element, quantity) => {
  const content = element.innerHTML;
  const newContent = new Array(quantity).fill(content).join('');
  element.innerHTML = newContent
}

const crosses = document.querySelector('#crosses');
duplicateHtml(crosses, 10);

anime({
  // normal css selector
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});



anime({
  // normal css selector
  targets: '#tunnel circle',
  // here we scale by 20%
  scale: 1.1,
  // returns it to beginning
  direction: 'alternate',
  // loops
  loop: true,
  duration: 250,
  // easings allow us to add more character to animations
  easing: 'easeInOutSine',

  delay: (el, index) => index * 50
});

// set up conveyer effect
anime({
  // normal css selector
  targets: '.conveyer',
  // only want to move it by half of its width
  translateX: '-50%',
  duration: 1500,
  loop: true,
  // makes the effect look smoother
  easing: 'linear',
  autoplay: true
});



 const zigZagPath = document.querySelector('#zigzag path');
 // setDashOffset figures out how lomg the path is
 const zigZagOffset = anime.setDashoffset(zigZagPath);
 // we then set that back onto the path element
  zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
  anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: anime.random(1000, 9000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });

// we duplicate the same code pretty much for the wave
const wavePath = document.querySelector('#wave path');
const waveOffset = anime.setDashoffset(wavePath);

wavePath.setAttribute('stroke-dashoffset', waveOffset);
 anime({
    targets: wavePath,
    strokeDashoffset: [0, waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

const dot = document.querySelector('#dots');
duplicateHtml(dot, 40);

const dots =document.querySelectorAll('#dots .dot');

dots.forEach(dot => {
   anime({
    targets: dot,
    // random rotation
    rotate: (el, i) => anime.random(90, 360),
    // random duration
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });
});


duplicateHtml(document.querySelector('#circles'), 20);

anime({
    targets: '#circles .dot',
    scale:[0, 1.2],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });

anime({
    targets: '#flashes .flash',
    backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
    delay: (el, i) => anime.random(50, 100),
    duration: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });
