const burger = document.getElementById("burger");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (burger) {
    burger.addEventListener("click", () => {
        nav.classList.add("open");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("open");
    });
}
