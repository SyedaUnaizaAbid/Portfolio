// Smooth scroll to section
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (!section) return;

	window.scrollTo({
		top: section.offsetTop - 16, // adjust for sticky header
		behavior: "smooth",
	});

	// Update active nav-link
	document
		.querySelectorAll(".nav-link")
		.forEach((link) => link.classList.remove("active"));
	const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
	if (activeLink) activeLink.classList.add("active");
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
	const nav = document.querySelector(".nav");
	nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Contact form handling (optional)
function handleForm(event) {
	event.preventDefault();
	const status = document.getElementById("formStatus");
	status.textContent = "Message sent! ✅ (Demo only, no backend)";
	event.target.reset();
}

// Open Resume PDF from hero button
document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const href = btn.getAttribute("href");
		if (href && href.includes("Resume.pdf")) {
			window.open(href, "_blank");
			e.preventDefault();
		}
	});
});
