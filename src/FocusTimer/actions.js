import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countDown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove("running")

    el.minutes.setAttribute("contenteditable", true)
    el.minutes.textContent = "00"
    state.minutes = 0

    el.minutes.focus()
    timer.updateDisplay()
}

export function addMinutes() {
    if (state.minutes < 55) {
  
        state.minutes += 5
    }
    else {
        state.minutes = 60
    }
    timer.updateDisplay()
}

export function removeMinutes() {
    if(state.minutes > 5)
        state.minutes -= 5

    else {
        return
    }

    timer.updateDisplay()
}

el.forestButton.addEventListener("click", () => handleSound(sounds.forestSound))
el.cloudButton.addEventListener("click", () => handleSound(sounds.rainSound))
el.coffeeButton.addEventListener("click", () => handleSound(sounds.coffeeShopSound))
el.fireButton.addEventListener("click", () => handleSound(sounds.fireSound))


export function handleSound(sound) {

    if(state.currentSound == sound) pauseSound()

    else { 
        if (state.currentSound != null) pauseSound()

        playSound(sound)
    }
}

export function playSound(sound) {
    state.currentSound = sound
    state.currentSound.play()
    state.currentSound.loop = true
}

export function pauseSound() {
    state.currentSound.pause()
    state.currentSound = null
}