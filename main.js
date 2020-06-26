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


