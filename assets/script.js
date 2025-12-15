const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const filterEl = document.getElementById("repoFilter");
const repoGrid = document.getElementById("repoGrid");
const emptyEl = document.getElementById("repoEmpty");

function applyFilter() {
  if (!filterEl || !repoGrid) return;

  const q = filterEl.value.trim().toLowerCase();
  const cards = repoGrid.querySelectorAll("[data-repo]");

  let visibleCount = 0;
  for (const card of cards) {
    const text = (card.textContent || "").toLowerCase();
    const show = q.length === 0 || text.includes(q);
    card.hidden = !show;
    if (show) visibleCount += 1;
  }

  if (emptyEl) emptyEl.hidden = visibleCount !== 0;
}

if (filterEl) {
  filterEl.addEventListener("input", applyFilter, { passive: true });
}
