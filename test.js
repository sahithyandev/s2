import "https://cdn.tailwindcss.com";
const e = document.querySelector("[data-toggle-nav]"),
	t = document.querySelector("[data-navbar]"),
	s = document.querySelector("[data-nav-overlay]");
e &&
	(e.addEventListener("click", (a) => {
		a.preventDefault(),
			e.getAttribute("data-open-nav") === "false"
				? (e.setAttribute("data-open-nav", "true"),
					s.setAttribute("data-is-visible", "true"),
					document.body.classList.add("!overflow-y-hidden"),
					(t.style.height = `${t.scrollHeight}px`))
				: (e.setAttribute("data-open-nav", "false"),
					s.setAttribute("data-is-visible", "false"),
					document.body.classList.remove("!overflow-y-hidden"),
					(t.style.height = "0px"));
	}),
	t.addEventListener("click", () => {
		e.setAttribute("data-open-nav", "false"),
			s.setAttribute("data-is-visible", "false"),
			document.body.classList.remove("!overflow-y-hidden"),
			(t.style.height = "0px");
	}),
	s.addEventListener("click", () => {
		e.setAttribute("data-open-nav", "false"),
			s.setAttribute("data-is-visible", "false"),
			document.body.classList.remove("!overflow-y-hidden"),
			(t.style.height = "0px");
	}));
window.addEventListener("scroll", () => {
	const a = document.querySelector("nav");
	a &&
		(window.scrollY > 50
			? a.classList.add("fixed-top")
			: a.classList.remove("fixed-top"));
});
