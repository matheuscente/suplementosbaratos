if(window.SimpleAnime) {
    new SimpleAnime();
    window.addEventListener('scroll', () => {
        new SimpleAnime();
    });
}

new slide('slide');
new smooth('1');
new smooth('2');
new toggleMenu();




