const cards = document.querySelectorAll(".box")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    },
    {
        threshold: 1,
    }
)



cards.forEach(box => {
    observer.observe(box)
})
