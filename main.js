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

// we duplicate the saem code pretty much for the wave
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







