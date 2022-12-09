function qidir() {
    let text = document.getElementById("box-text");
    let search = document.getElementById("search");
    // let b=`${text.innerHTML}`;
    // let a=b.includes(`${search.innerHTML}`);
    let b = text.innerHTML;
    let c = search.value
    let a = b.includes(c);
    if (c != '' || c != ' ') {

        if (a) {
            document.getElementById("mavjud").style.display = "block";
            document.getElementById("mavjud-emas").style.display = "none";
        }
        else {
            document.getElementById("mavjud").style.display = "none";
            document.getElementById("mavjud-emas").style.display = "block";
        }
    }

}
