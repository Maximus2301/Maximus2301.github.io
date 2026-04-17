const tradeoffHeaders = document.querySelectorAll(".pf-tradeoff-header");

tradeoffHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const card = header.closest(".pf-tradeoff");
        const isOpen = card?.classList.contains("open");

        document.querySelectorAll(".pf-tradeoff").forEach((item) => {
            item.classList.remove("open");
        });

        if (card && !isOpen) {
            card.classList.add("open");
        }
    });
});

const progressLinks = Array.from(document.querySelectorAll(".pf-prog-item"));
const progressSections = progressLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if (progressLinks.length > 0 && progressSections.length > 0) {
    const syncProgressNav = () => {
        let currentId = progressSections[0].id;

        progressSections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 150) {
                currentId = section.id;
            }
        });

        progressLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentId}`;
            link.classList.toggle("active", isActive);
        });
    };

    window.addEventListener("scroll", syncProgressNav, { passive: true });
    syncProgressNav();
}
