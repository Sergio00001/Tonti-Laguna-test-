export const taxToggle = () => {
    const toggleBtns = document.querySelectorAll('.header__btn')
    const monthPrice = document.querySelectorAll('.month__price')
    const yearPrice = document.querySelectorAll('.year__price')

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            toggleBtns.forEach(active => {
                active.classList.remove('active')
            })
            btn.classList.add('active')

            monthPrice.forEach(monthTag => {
                if (e.target.textContent === 'YEARLY') {
                    monthTag.style.display = 'none'
                    yearPrice.forEach(yearTag => {
                        yearTag.style.display = 'block'
                    })
                } else {
                    monthTag.style.display = 'block'
                    yearPrice.forEach(yearTag => {
                        yearTag.style.display = 'none'
                    })
                }
            })
        })
    })
}