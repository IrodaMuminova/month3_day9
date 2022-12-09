btn.onclick = function (e) {
    let search = document.getElementById("search");
    let meva = search.value;
    let btn = document.getElementById("btn");
    e.preventDefault();
    switch (meva) {
        case "Anjir":
        case "ZAytun":
        case "Banan":
        case "Anor":
        case "Behi":
            document.getElementById("mavjud").style.display = "block";
            document.getElementById("mavjud-emas").style.display = "none";
            break;
        default:
            document.getElementById("mavjud-emas").style.display = "block";
            document.getElementById("mavjud").style.display = "none";
            break;
    }
}
