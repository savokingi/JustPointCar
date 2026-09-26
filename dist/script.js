const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#site-nav');

function closeMenu() {
  document.body.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Открыть меню');
}

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 850) closeMenu();
});

const previewImage = document.querySelector('#service-preview-image');
const previewCaption = document.querySelector('#service-preview-caption');
document.querySelectorAll('.service-item').forEach(item => {
  const updatePreview = () => {
    if (!previewImage || !previewCaption) return;
    previewImage.src = item.dataset.image;
    previewCaption.textContent = item.dataset.caption;
  };
  item.addEventListener('mouseenter', updatePreview);
  item.addEventListener('focus', updatePreview);
});
