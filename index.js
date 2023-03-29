window.addEventListener('DOMContentLoaded', function () {
    const includes = document.querySelectorAll('[data-include]');
    for (let i = 0; i < includes.length; i++) {
        const file = 'layouts/' + includes[i].dataset.include + '.html';
        fetch(file)
            .then(response => response.text())
            .then(html => {
                html = html.replaceAll("../layouts/", "layouts/")
                html = html.replaceAll("../pages/", "pages/")
                html = html.replaceAll("../public/", "public/")
                html = html.replaceAll("../index.html", "index.html")
                includes[i].innerHTML = html;
            })
        //Add css files, based on the current path
        const link = document.createElement("link");
        link.href = 'layouts/' + includes[i].dataset.include + ".css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
});

