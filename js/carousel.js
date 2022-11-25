document.addEventListener('DOMContentLoaded', () => {

    const SLIDETIME = 500;
    const allSlides = [...document.querySelectorAll('.slide')];
    const backButton = document.querySelector('.wbn-slider-back-btn');
    const forwardButton = document.querySelector('.wbn-slider-next-btn');

    let clickable = true;
    let active = null;
    let ones = document.querySelectorAll('.slide-one')
    let twos = document.querySelectorAll('.slide-two')
    let contents = document.querySelectorAll('.content-wrap');
    let newActive = null;

    // Interval
    let slideInterval = setInterval(changeInterval, 3000);

    function initSlider() {
        allSlides.forEach(slide => {
            slide.setAttribute(
                'style',
                `transition: transform ${SLIDETIME}ms ease;
                animation-duration: ${SLIDETIME}ms;
                `, 
            )
        })

    }

    function changeInterval () {
        if (clickable) {
            clickable = false
            active = document.querySelector('.initial');   
            const activeSlideIndex = allSlides.indexOf(active)
            newActive = allSlides[(activeSlideIndex + 1) % allSlides.length]
            active.classList.add('slideOutLeft');
            newActive.classList.add('slideInRight', 'initial');
            // contents.forEach(content => {
            //     content.classList.remove('content-arrive');
            //     void content.offsetWidth;
            //     content.classList.add('content-arrive');
            // })
            // console.log(content)
        }
    }

    function changeSlide(forward) {
        if (clickable) {
            clickable = false
            active = document.querySelector('.initial');
            clearInterval(slideInterval)
            slideInterval = setInterval(changeInterval, 3000);
            const activeSlideIndex = allSlides.indexOf(active)
            if (forward) {
                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length]
                active.classList.add('slideOutLeft');
                newActive.classList.add('slideInRight', 'initial');
            } else {
                newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
                active.classList.add('slideOutRight');
                newActive.classList.add('slideInLeft', 'initial');
            }
        }
    }

    function ideSlides(forward) {
        if (clickable) {
            clickable = false
            active = document.querySelector('.initial');
            const activeSlideIndex = allSlides.indexOf(active)
            newActive = allSlides[0]
            active.classList.add('slideOutLeft');
            newActive.classList.add('slideInRight', 'initial');
            clearInterval(slideInterval)
            const slideInterval = setInterval(changeInterval, 3000);
        }
    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            if (slide === active && !clickable) {
                clickable = true;
                active.className = 'slide';
                // contents.forEach(content => content.style.opacity = '0')
                // content.className = 'content-wrap';
            }
        })
    })


    //Event listeners
    forwardButton.addEventListener('click', () => {
        changeSlide(true);
    });
    backButton.addEventListener('click', () => {
        changeSlide(false);
    });

    ones.forEach(one => {
        one.addEventListener('click', ()=>{
            changeSlide(false);
        })
    })
    twos.forEach(two => {
        two.addEventListener('click', ()=>{
            changeSlide(true);
        })
    })

    initSlider()
})