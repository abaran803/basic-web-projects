const navs = document.querySelectorAll(".nav > li");

for(const _ of navs) {
    _.addEventListener("click", () => {
        navs.forEach(nav => {
            nav.classList.remove("active");
        })
        _.classList.add("active");
    })
}