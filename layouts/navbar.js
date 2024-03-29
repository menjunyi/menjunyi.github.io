const sections = document.querySelectorAll('[data-include]')
const navLi = document.querySelectorAll('nav ul li')
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('data-include');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})
