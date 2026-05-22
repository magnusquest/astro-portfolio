const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const backdrop = document.querySelector(".menu-backdrop");

function closeMenu() {
	navLinks.classList.remove("expanded");
	backdrop.classList.remove("visible");
	hamburger.setAttribute("aria-expanded", "false");
}

hamburger?.addEventListener("click", () => {
	const expanded = navLinks.classList.toggle("expanded");
	backdrop.classList.toggle("visible", expanded);
	hamburger.setAttribute("aria-expanded", String(expanded));
});

backdrop?.addEventListener("click", closeMenu);

navLinks?.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", closeMenu);
});
