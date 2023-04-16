function playSound (e) {
  const code = e.keyCode || e.target.getAttribute('data-key')
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e){
  console.log(Math.ceil(Math.random() * 10))
  console.log(e.srcElement.innerHTML)
  const oi = e.srcElement.innerHTML
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound))

window.addEventListener('keydown', playSound);
