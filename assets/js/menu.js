// Toogle da Lua e do Sol

const iconMoon = document.querySelector('.iconMoon');
const iconSun = document.querySelector('.iconSun');

iconMoon.addEventListener('click', () => {

  iconMoon.classList.add('inativo');
  iconSun.classList.remove('inativo');
});

iconSun.addEventListener('click', () => {

  iconSun.classList.add('inativo');
  iconMoon.classList.remove('inativo');
});

// Menu Mobile

class MobileNavbar {
  constructor() {
    this.mobileMenu = document.querySelector('.menu-mobile')
    this.navList = document.querySelector('.menu-padrao')
    this.navLinks = document.querySelectorAll('.menu-li')
    this.linkInsta = document.querySelector('.link-insta')
    this.nav = document.querySelector('nav')
    this.activeClass = "active"
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.linkInsta.classList.toggle(this.activeClass);
    this.nav.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => this.handleClick())
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar();

mobileNavbar.init();
