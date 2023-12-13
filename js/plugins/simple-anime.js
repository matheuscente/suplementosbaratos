
window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll("[data-anime]")), this.init();
  }


  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute("data-anime"));
      if (this.heightCheck(t)) {
        isNaN(e) ||
            setTimeout(() => {
            t.classList.add("anime");
            }, e);
        }
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? "visible" === document.visibilityState && this.animateItems()
      : this.animateItems();
  }

  heightCheck(t) {
        let heightItem = t.getBoundingClientRect().height;
        let totalHeight = window.innerHeight;
        let heightForTop = t.getBoundingClientRect().top;

        if(heightForTop + heightItem >= totalHeight * 0.2 + totalHeight) {
           return false;
        } else {
            return true;
        }
  }


  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener("visibilitychange", this.handleVisibility);
  }
};
