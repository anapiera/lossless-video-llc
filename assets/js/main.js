/* =================================================================
   LOSSLESS VIDEO LLC — Shared site JS
   Nav active-state, hover indicator, footer year.
   ================================================================= */

(function () {
    // --- Highlight nav link based on current page ---
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('#navLinks a').forEach(a => {
        const target = (a.getAttribute('href') || '').toLowerCase();
        if (target === here || (here === '' && target === 'index.html')) {
            a.classList.add('active');
        }
    });

    // --- Animated underline indicator ---
    const indicator = document.getElementById('indicator');
    const links = document.querySelectorAll('#navLinks a');

    function moveIndicatorTo(el) {
        if (!indicator || !el) return;
        indicator.style.width = el.offsetWidth + 'px';
        indicator.style.left  = el.offsetLeft + 'px';
    }

    // Park the indicator under the active link on load
    const active = document.querySelector('#navLinks a.active');
    if (active) moveIndicatorTo(active);

    links.forEach(link => {
        link.addEventListener('mouseenter', () => moveIndicatorTo(link));
    });

    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.addEventListener('mouseleave', () => {
            const a = document.querySelector('#navLinks a.active');
            if (a) moveIndicatorTo(a);
        });
    }

    // --- Auto-fill footer year ---
    const yearEl = document.querySelector('[data-year]');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
