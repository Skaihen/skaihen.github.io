const css = document.createElement("link");
css.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
css.rel = "stylesheet";
css.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
css.crossOrigin = "anonymous";
css.id = "bscss";

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
script.crossOrigin = "anonymous";
script.id = "bsjs";

const darkmode = document.createElement("input");
darkmode.classList.add("form-check-input");
darkmode.type = "checkbox";
darkmode.role = "switch";
darkmode.id = "darkmodeSwitch";

const darkmode_lab = document.createElement("label")
darkmode_lab.classList.add("form-check-label");
darkmode_lab.htmlFor = "darkmodeSwitch";
darkmode_lab.textContent = "Modo oscuro";


function load() {
    var botonboot = document.getElementById("toggleboot");
    var darkmode_nav = document.getElementById("darkModeNav");
    const header = document.getElementsByTagName("header")[0];

    botonboot.addEventListener('click', function() {
        let script_search = document.getElementById("bsjs");
        if (script_search != null){
            document.head.removeChild(script);
            botonboot.innerHTML = "Añadir Bootstrap";
        }else{
            document.head.appendChild(script);
            botonboot.innerHTML = "Quitar Bootstrap";
        }
        let css_search = document.getElementById("bscss");
        if (css_search != null){
            document.head.removeChild(css);
        }else{
            document.head.appendChild(css);
        }
        let darkmode_search = document.getElementById("darkmodeSwitch");
        if (darkmode_search != null){
            darkmode_nav.removeChild(darkmode);
            darkmode_nav.removeChild(darkmode_lab);
        }else{
            darkmode_nav.appendChild(darkmode);
            darkmode_nav.appendChild(darkmode_lab);
        }
    });
    darkmode.addEventListener('click', function(){
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-light");
        let tables = document.getElementsByClassName("table");
        for (let table of tables) {
            table.classList.toggle("table-dark");   
        }
    });
}
window.addEventListener('load', load);