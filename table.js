let table = document.querySelector('table');
if(table == null)
    console.error("Table is not created!");
else {
    let td = document.querySelectorAll('td');
    if(td.length == 0)
        console.error("Table is not created properly!");
    else {
        for(let field of td) {
            field.addEventListener("click", function() {
                console.log(field.className)
                if(field.textContent != '/') {
                    let klasa = field.className;
                    if(klasa.includes("izrada"))
                        window.location.href = "../view/error/greska.html";
                    else if(klasa.includes("dok"))
                        window.location.href = "../view/subject/" + field.textContent.toLowerCase() + ".html";
                    else
                        window.location.href = "../view/error/nepostojeca.html";
                }
            });
        }
    }
}