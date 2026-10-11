/* ===== NÚCLEO: utilidades, ícones, navegação =====
   Para trocar o nome da plataforma, edite NOME_PLATAFORMA aqui e o texto do logo no topo do HTML. */
var NOME_PLATAFORMA = "Trilha";
var LETRAS = ["A", "B", "C", "D", "E"];
var app = document.getElementById("app");
var Rotas = {};   // rota -> função que desenha a tela
var Modos = [];   // modos de estudo; cada modo se registra com Modos.push({...})
var SVG_NS = "http://www.w3.org/2000/svg";

function embaralhar(lista) {
  var a = lista.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Cria um elemento: el("p", "texto", {class: "x"}, [filhos]). Só usa textContent (sem innerHTML).
function el(tag, texto, atributos, filhos) {
  var e = document.createElement(tag);
  if (texto !== undefined && texto !== null) e.textContent = texto;
  var a = atributos || {};
  for (var k in a) {
    if (a[k] === false || a[k] === null || a[k] === undefined) continue;
    e.setAttribute(k, a[k] === true ? "" : a[k]);
  }
  (filhos || []).forEach(function (f) { if (f) e.appendChild(f); });
  return e;
}

var ICONES = {
  lista: ["M3.5 6.5l1.5 1.5 2.5-3", "M3.5 12.5l1.5 1.5 2.5-3", "M3.5 18.5l1.5 1.5 2.5-3", "M11 6.5h10", "M11 12.5h10", "M11 18.5h10"],
  alvo: ["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z", "M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 1 0 0-9z", "M12 12h.01"],
  caneta: ["M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4z", "M14 7l3 3"],
  voltar: ["M15 5l-7 7 7 7"],
  seta: ["M5 12h14", "M13 6l6 6-6 6"],
  chevron: ["M9 5l7 7-7 7"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  x: ["M6 6l12 12", "M18 6L6 18"],
  menos: ["M5 12h14"],
  mais: ["M12 5v14", "M5 12h14"]
};

function ico(nome) {
  var s = document.createElementNS(SVG_NS, "svg");
  s.setAttribute("viewBox", "0 0 24 24");
  s.setAttribute("class", "ico");
  s.setAttribute("aria-hidden", "true");
  s.setAttribute("focusable", "false");
  ICONES[nome].forEach(function (d) {
    var p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", d);
    s.appendChild(p);
  });
  return s;
}

// Botão: botao("Texto", "btn--primario", aoClicar, "icone")
function botao(texto, classes, aoClicar, icone) {
  var b = el("button", undefined, { type: "button", "class": "btn " + (classes || "") });
  if (icone) b.appendChild(ico(icone));
  b.appendChild(el("span", texto));
  if (aoClicar) b.onclick = aoClicar;
  return b;
}

// Link com aparência de botão
function link(texto, rota, classes, icone, iconeDepois) {
  var a = el("a", undefined, { href: "#" + rota, "class": "btn " + (classes || "") });
  if (icone) a.appendChild(ico(icone));
  a.appendChild(el("span", texto));
  if (iconeDepois) a.appendChild(ico(iconeDepois));
  return a;
}

// Cabeçalho padrão das telas de modo: voltar, ícone, título e descrição.
function cabecalhoTela(cfg) {
  var tile = el("span", undefined, { "class": "tile" }, [ico(cfg.icone)]);
  var titulo = el("div", undefined, { "class": "tela-titulo" }, [tile, el("h1", cfg.titulo)]);
  if (cfg.selo) titulo.appendChild(el("span", cfg.selo, { "class": "selo" }));
  return el("header", undefined, { "class": "tela-cab tela-cab--" + cfg.cor }, [
    link("Início", "inicio", "btn--leve", "voltar"),
    titulo,
    el("p", cfg.lead, { "class": "lead" })
  ]);
}

function mostrar(tituloPagina, nos) {
  app.textContent = "";
  var tela = el("div", undefined, { "class": "tela" }, nos);
  app.appendChild(tela);
  document.title = tituloPagina + " - " + NOME_PLATAFORMA;
  var h = app.querySelector("h1");
  if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  window.scrollTo(0, 0);
}

function ir(rota) {
  if (location.hash === "#" + rota) renderizar();
  else location.hash = rota;
}

function renderizar() {
  var rota = location.hash.replace(/^#/, "") || "inicio";
  if (!Rotas[rota]) rota = "inicio";
  document.body.classList.toggle("is-home", rota === "inicio");
  Rotas[rota]();
}
