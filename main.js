const si = document.querySelector("#btn-si");
const no = document.querySelector("#btn-no");

si.addEventListener("click", (e) => {
    tmp = si.innerHTML; 
    si.innerHTML = "<span>SII 😍</span>";
    setTimeout(() => {
        si.innerHTML = tmp;
      }, "5000");
    alert("Fammi sapere la tua risposta :)")
});

no.addEventListener("click", (e) => {
    no.innerHTML = "<span>Peccato :(</span>";
    setTimeout(() => {
        no.innerHTML = tmp;
      }, "5000");
    alert("Fammi sapere la tua risposta :)")
});
