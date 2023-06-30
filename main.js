// get_mode = document.querySelector(".mode")

// get_mode.addEventListener("click", () => {
//     if (get_mode.textContent == "Dark"){
//         get_mode.textContent = "Light"
//         console.log('this')
//     }
//     else{
//         get_mode.textContent = "Light"
//     }
// })


const toggleLightDarkModeMobile = document.querySelector("#moon-mode");
const toggleLightDarkModeDesktop = document.querySelector("#tablet-mode");
const lightText = document.querySelector(".light-text");
const changeModeLIght = document.querySelector("#tablet-mode-light")
const lightModeTextMobile = document.querySelector(".lightModeText")
const theMoonIcon = document.querySelector(".moon-icon")
// const changeTextColor = document.querySelector(".changeTextToDark a")
let theBody = document.body
const navLinks = document.querySelectorAll("nav a") 
const theMode = document.querySelector(".mode")
const theTabletMoon = document.querySelector(".tablet-moon")

const lightDardMode = (toggleButton) =>{
    toggleButton.addEventListener("click", () => {
        theBody.classList.toggle("toggleLightDarkMode");
        lightText.classList.toggle("toggleLightText")
        toggleLightDarkModeDesktop.classList.toggle("toggleDarkText")
        lightModeTextMobile.classList.toggle("toggleLightModeText")
        theMode.classList.toggle("toggleDarkText")
        theMoonIcon.classList.toggle("toggleMoonIcon")
        theTabletMoon.classList.toggle("toggleMoonIcon")
        // changeTextColor.classList.toggle("changeTextColor")
        // navLinks.classList.toggle("changeTextColor")
        for(let j = 0; j < navLinks.length; j++){
            navLinks[j].classList.toggle("changeNavColor")
        }
    })
}


lightDardMode(toggleLightDarkModeMobile)
lightDardMode(toggleLightDarkModeDesktop)
lightDardMode(changeModeLIght)


// console.log(theBody)