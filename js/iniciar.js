/* ===== INÍCIO: liga a navegação e mostra a primeira tela ===== */
document.getElementById("pular").onclick = function () { app.focus(); };
window.addEventListener("hashchange", renderizar);
renderizar();
