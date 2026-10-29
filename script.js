const motionToggle = document.querySelector('.motion-toggle');
const diagram = document.querySelector('.diagram-wrap');

motionToggle.addEventListener('click', () => {
  const paused = diagram.classList.toggle('is-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.innerHTML = paused
    ? 'Resume animation <span aria-hidden="true">▶</span>'
    : 'Pause animation <span aria-hidden="true">Ⅱ</span>';
});
