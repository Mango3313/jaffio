window.onload = (e)=>{
    e.preventDefault();
    loadPage("about");
    document.querySelector("#liAbout").addEventListener("click",(e)=>{
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("about").then(()=>{
            document.getElementById("bodyContainer").classList.add("animate__animated");
        });
    });
    document.querySelector("#liContact").addEventListener("click",(e)=>{
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("contact").then(()=>{
            document.getElementById("bodyContainer").classList.add("animate__animated");
        });
    });
    document.querySelector("#liProjects").addEventListener("click",(e)=>{
        document.getElementById("bodyContainer").classList.remove("animate__animated");
        loadPage("projects").then(()=>{
            document.getElementById("bodyContainer").classList.add("animate__animated");
        });
    });
};

function loadPage(url){
    window.event.preventDefault();

    fetch("http://localhost:80/jaffio/pages/"+url+".html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        var body = document.getElementById("bodyContainer");
        body.innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}