class toggleMenu {
    constructor() {
        this.btnMobile = document.querySelector("#btn-mobile");
        this.nav = document.querySelector(".nav-header");
        this.active = this.nav.classList.contains('active');
        this.init();
    }

    openMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault();
    }
    this.nav.classList.toggle('active');
    if(this.active == true) {
        event.currentTarget.setAttribute("aria-expanded", !this.active)
        event.currentTarget.setAttribute("aria-label", 'abrir menu')
    } else if(this.active == false) {
        event.currentTarget.setAttribute("aria-expanded", !this.active)
        event.currentTarget.setAttribute("aria-label", 'fechar menu')
    }
}

init() {
    this.btnMobile.addEventListener('click', ()=> {
        this.openMenu(event);
    })
    this.btnMobile.addEventListener('touchstart', ()=> {
        this.openMenu(event);
    })
}

}