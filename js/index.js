window.onload = (e) => {
    e.preventDefault();
    loadPage("about");

    document.querySelector("#liAbout").addEventListener("click", (e) => {
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("about");
    });
    document.querySelector("#liContact").addEventListener("click", (e) => {
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("contact");
    });
    document.querySelector("#liProjects").addEventListener("click", (e) => {
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("projects");
    });
    document.addEventListener('scroll', (e) => {
        var photoDiv = document.querySelector(".header_image");
        var photo = document.querySelector(".header-photo");
        if (this.scrollY > 300) {
            photoDiv.style.minHeight = 0 + "px";
            photo.style.minHeight = 0 + "px";
        }
        else {
            photoDiv.style.minHeight = 300 - this.scrollY + "px";
            photoDiv.style.transform = "translate3d(0px," + 300 - this.scrollY + "px,0px);"
        }
    });
};

function loadPage(url) {
    window.event.preventDefault();

    fetch("../../jaffio/pages/" + url + ".html" /*, options */)
        .then((response) => response.text())
        .then((html) => {
            var body = document.getElementById("bodyContainer");
            body.innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });
}


function sendEmail() {
    var field = document.getElementById("inputField").value;
    var email = document.getElementById("inputEmail").value;
    var subject = document.getElementById("inputSubject").value;
    var message = document.getElementById("textAreaMessage").value;
    window.open('mailto:' + email + '?subject=' + subject + '_from_' + field + '&body=' + message);
}