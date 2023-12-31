class smooth {
    constructor(id) {
        this.n = id;
        this.itemSmooth = document.querySelector(`* > [data-smooth="${id}"]`);
        this.items = this.itemSmooth.querySelectorAll('a');
        this.init();
    }

    smoothOnClick(event) {
        event.preventDefault();
        this.element = event.target;
        this.id = this.element.getAttribute('href');
        this.section = document.querySelector(this.id).offsetTop;
        window.scroll({
            top: this.section - 100,
            behavior: "smooth",

        });
    }

    animate() {
        this.items.forEach(item => {
            item.addEventListener('click', ()=> {
                this.smoothOnClick(event);
            })
        })
    }

    init() {
        this.animate();
    }
}