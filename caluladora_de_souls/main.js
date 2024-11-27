const soulTotal = document.querySelector("#total")
const curInput = document.querySelector("#current-input")
const desInput = document.querySelector("#desired-input")


function onCalc(e) {
    e.preventDefault()
    let low_levels = [0, 0, 673, 689, 706, 723, 740, 757, 775, 793, 811, 829, 847]
    let total = 0
    let cl = Number(curInput.value) + 1
    let dl = Number(desInput.value) + 1
    
    while (cl < dl && cl < 13) {
        total += low_levels[cl]
        cl++
    }

    while (cl < dl) {
        total += (0.02 * cl ** 3 + 3.06 * cl ** 2 + 105.6 * cl - 895)
        cl++
    }

    curInput.value = ""
    desInput.value = ""
    soulTotal.innerHTML = Math.floor(total).toLocaleString('de-DE')
}