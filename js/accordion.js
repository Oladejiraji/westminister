let accordions = document.querySelectorAll('.accordion-link');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('correct')
        let answer = accordion.nextElementSibling
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
})