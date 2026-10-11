(() => {
  const tiles = [...document.querySelectorAll("[data-element]")];
  const details = [...document.querySelectorAll(".element-detail")];
  if (!tiles.length) return;

  function selectElement(hash, announce = false) {
    const detail = details.find((item) => `#${item.id}` === hash);
    if (!detail) return;
    details.forEach((item) => {
      item.hidden = item !== detail;
    });
    tiles.forEach((tile) => {
      const selected = tile.hash === hash;
      tile.classList.toggle("is-selected", selected);
      if (selected) tile.setAttribute("aria-current", "true");
      else tile.removeAttribute("aria-current");
    });
    if (announce) {
      status.textContent = `${detail.querySelector("h3").textContent}. ${detail.querySelector(".detail-copy > p:not(.eyebrow)").textContent}`;
    }
  }

  const status = document.createElement("div");
  status.className = "visually-hidden";
  status.setAttribute("role", "status");
  document.querySelector(".element-details").append(status);
  tiles.forEach((tile) =>
    tile.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      history.replaceState(null, "", tile.hash);
      selectElement(tile.hash, true);
      if (window.matchMedia("(max-width: 520px)").matches) {
        document.querySelector(tile.hash).scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
          block: "center",
        });
      }
    }),
  );
  window.addEventListener("hashchange", () =>
    selectElement(location.hash, true),
  );
  // All material notes remain readable if JavaScript is unavailable.
  selectElement("#element-W");
  selectElement(location.hash);
})();
