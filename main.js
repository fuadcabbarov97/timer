let h1 = document.querySelector(".daire h1")
let boyukBtn = document.querySelector(".boyuk-btn")
let reset = document.querySelector(".kicik-daire h3")
let deq = 0
let san = 0
let yuz = 0
let interval

function yaz() {
    let s = san < 10 ? "0" + san : san
    let y = yuz < 10 ? "0" + yuz : yuz
    h1.textContent = deq + ":" + s + ":" + y
}

boyukBtn.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(() => {
        yuz++
        if (yuz === 100) {
            yuz = 0
            san++
        }
        if (san === 60) {
            san = 0
            deq++
        }
        yaz()
    }, 10)
})

reset.addEventListener("click", () => {
    clearInterval(interval)
    deq = 0
    san = 0
    yuz = 0
    yaz()
})