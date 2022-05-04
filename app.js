const fullName = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const lang = document.querySelector("#lang");
const btn = document.querySelector("#btn");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
    fetch("/serverJson.json").then(response =>response.json()).then(data => {
        showProfile(data)
     })
})


let showProfile = (profile) => {
    setTimeout(() => {
        fullName.innerHTML += ` ${profile.fullName}`;
        username.innerHTML += ` ${profile.userName}`;
        email.innerHTML += ` ${profile.mail}`;
        profile.languages.forEach(languages => {
            lang.innerHTML += ` ${languages} <span style="font-weight: 900;"> | </span>
            `
        });
        
    }, 300);
}