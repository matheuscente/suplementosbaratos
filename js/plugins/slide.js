class slide {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();

    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'))
        this.items.forEach(item => item.classList.remove('anime'))
        this.items[index].classList.add('active');
        this.items[index].classList.add('anime');
        
        this.thumbItems.forEach(item => item.classList.remove('active'))
        this.thumbItems.forEach(item => item.classList.remove('anime'))
        this.thumbItems[index].classList.add('active');
        this.thumbItems[index].classList.add('anime');
    }
    next() {
        if(this.active < this.items.length - 1) {

            this.activeSlide(this.active + 1);
            this.autoSlide();
        } else {
            this.activeSlide(0);
            this.autoSlide();
        }
        

    }

    prev() {
        if(this.active > 0) {
            this.activeSlide(this.active - 1);
            this.autoSlide();
        }

        else {
            this.activeSlide(this.items.length - 1);
            this.autoSlide();
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next);
        const prevBtn = this.slide.querySelector('.slide-prev');
        prevBtn.addEventListener('click', this.prev);
    }

    addThumb() {
        this.items.forEach(() => (this.thumb.innerHTML += '<span></span>'));
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearInterval(this.intervalo);
        this.intervalo = setInterval(this.next, 5000);
    }


    init(){
        this.items = this.slide.querySelectorAll(".itens-galeria > *");
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumb();
        this.addNavigation();
        this.activeSlide(0);
        this.autoSlide();
    }
}
