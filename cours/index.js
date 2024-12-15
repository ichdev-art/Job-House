// // SELECTEUR 
// // Ceci va chercher le body dans le document
// document.querySelector("body")
// // Ceci va chercher le h4 dans le document
// document.querySelector("h4")
// // Ceci va chercher le id dans le document
// document.querySelector("#btn-1")
// // Ceci va chercher la class dans le document
// document.querySelector(".box")
// // On peut aussi changer la couleur du background style sur js
// document.querySelector("h4").style.background="yellow"

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-click");
})

btn1.addEventListener("click", () => {
    // response.style.visibility = "visible"
    response.classList.add("show-response");
    response.style.background = "green";
    ringT()
})

btn2.addEventListener("click", () => {
    // response.style.visibility = "visible"
    response.classList.add("show-response");
    response.style.background = "red";
    ringF()
})

// ------------------------------------------------------------

// Mouse Events
const mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

// Mouse done
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
})

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
})

// --------------------------------------------------------------------------

// keyPress event 
const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play()
}

const ringF = () => {
    const audio = new Audio();
    audio.src = "./Faux.mp3";
    audio.play()
}

const ringT = () => {
    const audio = new Audio();
    audio.src = "./Correct.mp3";
    audio.play()
}

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;


    if (e.key === "j") {
        keyPressContainer.style.background = "pink";
    }
    else if (e.key === "h") {
        keyPressContainer.style.background = "teal";
    } else {
        keyPressContainer.style.background = "red";
    }

    ring();
});

// ----------------------------------------------------------------------

// Scroll Event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})

// ----------------------------------------------------------------------------------

//  Form Events
const inputName = document.querySelector(`input[type="text"]`);
const select = document.querySelector("select")
const form = document.querySelector("form")
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value
})
select.addEventListener("input", (e) => {
    language = e.target.value
})
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV")
    }
})

// -----------------------------------------------------------

// Load Event
window.addEventListener("load", () => {
    console.log("Document Chargé !");
})

// -----------------------------------------------------------

// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.background = "red"
    })
})

// -----------------------------------------------------------

//  addEventListener Vs onclick
// document.body.onclick = () => {
//     console.log("click !");
// };

// document.body.onscroll = () => {
//     console.log("Scroll !");
// }

// Bubbling => fin (de base l'eventlistener est paramétré en mode bubbling)
document.body.addEventListener("click", () => {
    console.log("click 1 !");
});

// Usecapture
document.body.addEventListener("click", () => {
    console.log("click 2 !");
}, true);

// ----------------------------------------------------------

// StopPropagation
questionContainer.addEventListener("click", (e) => {
    alert("text !");
    e.stopPropagation();
});

// removeEventListener

// -----------------------------------------------

// BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=600")
// window.close()

//  Evénements adossés à window
// alert("hello");

let answer;

btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?")
})
//  prompt 
btn1.addEventListener("click", () => {
    answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>"
})

// Timer compte à rebours
// setTimeout(() => {
//     // logique à exécuter
//     questionContainer.style.borderRadius = "300px"
// }, 2000)

// let interval = setInterval(() => {
//     document.body.innerHTML +=
//         `<div class="box"><h2>Nouvelle Boite ! </h2></div>`
// }, 4000);

// document.body.addEventListener("click", (e) => {
//     // e.target.remove();
//     clearInterval(interval);
// })

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr")

// window.onload = () => {
//     location.href = "http://x.com"
// }

// Navigator
// console.log(navigator.userAgent);
// Code de localisation
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    var crd = pos.coords;

    console.log("Votre position actuelle est :");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// History
// console.log(history);
// window.history.back()
// history.go()

// -----------------------------------------------------------
// setProperty
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px")
    nav.style.setProperty("--y", e.layerY + "px")
})
