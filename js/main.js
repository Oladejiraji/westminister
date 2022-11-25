const bars = document.querySelector('.bars');
const cancel = document.querySelector('.cancel');
const wrap = document.querySelector('.small-wrap')
const nav = document.querySelector('.small-nav')

bars.addEventListener('click', () => {
    wrap.style.transform = 'translateX(0px)';
    nav.style.opacity = '1'
    nav.style.pointerEvents = 'visible'
})

cancel.addEventListener('click', () => {
    wrap.style.transform = 'translateX(500px)';
    nav.style.opacity = '0'
    nav.style.pointerEvents = 'none'
})


let topBtn = document.getElementById('top-btn');




window.addEventListener('scroll', (e) => {
    if( scrollY > 500) {
        topBtn.style.display = 'block';
    } else if (scrollY <= 500) {
        topBtn.style.display = 'none';
    }
});


topBtn.addEventListener('click', smooth);

function smooth () {
    let target = 0;
    let duration = 1000;
    let start = window.pageYOffset;
    let distance = -start;
    let startTime = null;

    function animation (currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    };
    

    requestAnimationFrame(animation);
}


