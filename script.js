const to_read = document.getElementById("to_read");
const read = document.getElementById("read");

document.getElementById("add").addEventListener("click", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;

    if(title=="" || link=="") {
        alert("Les deux champs doivent être rempli")
    } else {
        document.getElementById('title_1').style.visibility="visible";
        document.getElementById('title_3').style.visibility="hidden";
        to_read.insertAdjacentHTML("afterbegin", 
                                    `<li>${title}
                                        <i id=${title} onClick=remove(this.id) class="fa-solid fa-trash"></i>
                                        <i id=${title} onClick=done(this.id) class="fa-solid fa-check"></i>
                                        <a href=${link} target="blank"><i class="fa-solid fa-download"></i></a>
                                    </li>`);
        document.getElementById("title").value="";
        document.getElementById("link").value="";
    }
})

const remove = (id) => {
    document.getElementById(id).parentElement.outerHTML="";
}

const done = (id) => {
    document.getElementById('title_2').style.visibility="visible";
    remove(id);
    read.insertAdjacentHTML("afterbegin", `<li>${id} <i id=${id} onClick=remove(this.id) class="fa-solid fa-trash"></i></li>`);
}
