function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  window.addEventListener('keydown', playSound);

  function keysHover(e) {
    const keysHov = Array.from(document.querySelectorAll('.key'));
    keysHov.addEventListener('mouseover', keysHov.target.classList.add('hover'));
    
  }
  
  const keyshover = Array.from(document.querySelectorAll('.key'));
  
  keyshover.forEach(key => key.addEventListener('mouseover', ))