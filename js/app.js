function animate() {
    function e(e) {
        for (var t = []; e;) t.unshift(e), e = e.parentNode;
        for (let e = 0; e < t.length; e++)
            if ("avoid" === t[e].className) return !0
    }

    function t(e, t) {
        e.getBoundingClientRect().top <= window.innerHeight && (e.classList.add(t), "P" == e.tagName && setTimeout(() => {
            e.style.visibility = "visible"
        }, 1e3)), e.getBoundingClientRect().top >= window.innerHeight && ("P" == e.tagName && (e.style.visibility = "hidden"), e.classList.remove(t))
    }
    const [...n] = document.querySelectorAll("*");
    window.addEventListener("scroll", function() {
        for (let i = 0; i < n.length; ++i)
            if (!e(n[i])) {
                if ("P" === n[i].tagName) {
                    t(n[i], "animateAll");
                    continue
                }
                if ("H1" === n[i].tagName || "H2" === n[i].tagName || "H3" === n[i].tagName) {
                    t(n[i], "animateH1");
                    continue
                }
                if ("IMG" === n[i].tagName) {
                    t(n[i], "animateIMG");
                    continue
                }
            }
    })
}
animate()