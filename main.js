const Yes = document.querySelector("#Yes");
Yes.addEventListener("click", () => {
  Yes.textContent = "😍";
  setTimeout(() => {
    Yes.textContent = "Si";
  }, 5000);

  alert(
    "Bene ora che hai cliccato su si, devi solo informarmi così organizziamo"
  );
});

const No = document.querySelector("#No");
No.addEventListener("click", () => {
  No.textContent = "😭";
  setTimeout(() => {
    No.textContent = "No";
  }, 5000);
  alert("Peccato, rip");
});