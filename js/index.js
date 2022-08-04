window.onload = (e)=>{
    e.preventDefault();
    loadPage("about");
    document.querySelector("#liAbout").addEventListener("click",(e)=>{
        loadPage("about");
    });
    document.querySelector("#liContact").addEventListener("click",(e)=>{
        loadPage("contact");
    });
    document.querySelector("#liProjects").addEventListener("click",(e)=>{
        loadPage("projects");
    });
};

function loadPage(url){
    window.event.preventDefault();

    fetch("https://mango3313.github.io/jaffio/pages/"+url+".html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("bodyContainer").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}