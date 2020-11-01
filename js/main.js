const menuButton = document.querySelector('#menu-button');
const profileMenu = document.querySelector('#profile-menu');

menuButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (profileMenu.classList.contains('show')) {
    profileMenu.classList.remove('show');
    menuButton.classList.remove('show');
  } else {
    profileMenu.classList.add('show');
    menuButton.classList.add('show');
  }
})