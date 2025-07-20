var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}


var sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0"
}
function closeMenu() {
    sideMenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwwScPe5Qypshb0JPGNdOJTBYNwSrqg-kTakclLv001njRyIO7QTqvGc1R5RhFuDFkX_A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


window.onscroll = function () {
    const btn = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
};
