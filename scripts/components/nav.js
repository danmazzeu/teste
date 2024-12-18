const nav = document.querySelector('nav');
const firstChild = document.querySelector('nav div:first-child');
const lastChild = document.querySelector('nav div:last-child');

nav.style.scrollbarWidth = 'none';
nav.style['-webkit-scrollbar-width'] = 'none';

const isTouch = window.matchMedia("(pointer: coarse)").matches;
const maxScrollRight = nav.scrollWidth - nav.clientWidth;

let lastX = 0;
let isHovering;
let limitWidth = 730;

if (isTouch) {
    nav.addEventListener('touchstart', (event) => {
        lastTouchX = event.changedTouches[0].clientX;
    });

    nav.addEventListener('touchmove', (event) => {
        const deltaX = event.changedTouches[0].clientX - lastTouchX;
        nav.scrollLeft += deltaX;
        lastTouchX = event.changedTouches[0].clientX;

        if (window.innerWidth <= limitWidth) {
            if (scrollPosition <= 0) {
                firstChild.style.display = 'none';
                lastChild.style.display = 'flex';
            } else if (scrollPosition >= halfScrollWidth) {
                firstChild.style.display = 'flex';
                lastChild.style.display = 'none';
            } else {
                firstChild.style.display = 'none';
                lastChild.style.display = 'none';
            }
        }
    });
} else {
    nav.addEventListener('mouseenter', () => {
        isHovering = true;
    });
      
    nav.addEventListener('mouseleave', () => {
        isHovering = false;
        firstChild.style.display = 'none';
        lastChild.style.display = 'none';
    });
      
    document.addEventListener('mousemove', (event) => {
        if (isHovering) {
            const deltaX = event.clientX - lastX;
            nav.scrollLeft += deltaX;
            lastX = event.clientX;

            const scrollPosition = nav.scrollLeft;
            const halfScrollWidth = maxScrollRight / 2;
          
            if (window.innerWidth <= limitWidth) {
                if (scrollPosition <= 0) {
                    firstChild.style.display = 'none';
                    lastChild.style.display = 'flex';
                } else if (scrollPosition >= halfScrollWidth) {
                    firstChild.style.display = 'flex';
                    lastChild.style.display = 'none';
                } else {
                    firstChild.style.display = 'none';
                    lastChild.style.display = 'none';
                }
            }
        }
    });
}