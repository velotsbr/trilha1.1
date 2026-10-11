/* ===== MODO 1: PERGUNTAS GERAIS =====
   O aluno marca assuntos, escolhe a quantidade e decide se aceita assuntos aleatórios. */
(function () {
  var MAX = Banco.MAX_GERAL;
  var estado = { sel: {}, qtd: "10", aleatorio: false };
  var refs = {};

  Modos.push({
    id: "geral", rota: "geral", cor: "azul", icone: "lista",
    titulo: "Perguntas gerais",
    descricao: "Monte sua lista: escolha os assuntos e a quantidade de questões e estude do seu jeito.",
    botao: "Montar meu estudo",
    previa: function () {
      function item(t, marcado) {
        return el("li", undefined, { "class": "previa-item" + (marcado ? " is-sel" : "") }, [el("span", undefined, { "class": "mini-marca" }, [ico("check")]), el("span", t)]);
      }
      return el("div", undefined, { "class": "previa" }, [
        el("ul", undefined, { "class": "previa-lista" }, [item("Porcentagem", true), item("Biomas brasileiros", true), item("Crase", false)]),
        el("p", "Você escolhe quantas questões", { "class": "previa-rodape" })
      ]);
    }
  });

  function chaves() { return Object.keys(estado.sel).filter(function (k) { return estado.sel[k]; }); }
  function qtdValida() {
    var t = String(estado.qtd).trim(), n = Number(t);
    return (t !== "" && isFinite(n) && n >= 1 && n <= MAX && Math.floor(n) === n) ? n : null;
  }
  function plural(n, um, varios) { return n + " " + (n === 1 ? um : varios); }

  Rotas.geral = function () {
    refs = { checks: [], cats: [] };
    var cab = cabecalhoTela({ cor: "azul", icone: "lista", titulo: "Perguntas gerais", lead: "Marque os assuntos que quer estudar, escolha quantas questões quer responder e comece." });
    var coluna = el("div", undefined, { "class": "coluna" }, [secaoAssuntos(), secaoQuantidade(), secaoAleatorio()]);
    mostrar("Perguntas gerais", [cab, el("div", undefined, { "class": "layout" }, [coluna, montarPainel()])]);
    atualizar();
  };

  /* ---------- Seção: assuntos ---------- */
  function secaoAssuntos() {
    refs.contGlobal = el("p", "", { "class": "contador", "aria-live": "polite" });
    refs.limpar = botao("Limpar seleção", "btn--mini btn--sec", function () { estado.sel = {}; sincronizar(); atualizar(); }, "x");
    var cabeca = el("div", undefined, { "class": "secao-cabeca" }, [
      el("h2", "Assuntos", { id: "h-assuntos" }),
      el("div", undefined, { "class": "secao-ferramentas" }, [refs.contGlobal, refs.limpar])
    ]);
    var lista = el("div", undefined, { "class": "cats" });
    Banco.categorias.forEach(function (cat, i) { lista.appendChild(blocoCategoria(cat, i === 0, i)); });
    return el("section", undefined, { "class": "secao", "aria-labelledby": "h-assuntos" }, [cabeca, lista]);
  }

  function blocoCategoria(cat, aberta, i) {
    var idCorpo = "cat-corpo-" + i;
    var cont = el("span", "", { "class": "cat-cont" });
    var toggle = el("button", undefined, { type: "button", "class": "cat-toggle", "aria-expanded": String(aberta), "aria-controls": idCorpo }, [
      ico("chevron"), el("span", cat.nome), cat.materia !== cat.nome ? el("span", cat.materia, { "class": "cat-materia" }) : null, cont
    ]);
    var corpo = el("div", undefined, { "class": "lista-assuntos", id: idCorpo, hidden: !aberta });
    function abrir(sim) { toggle.setAttribute("aria-expanded", String(sim)); corpo.hidden = !sim; }
    toggle.onclick = function () { abrir(corpo.hidden); };

    var acao = botao("Marcar todos", "btn--mini btn--sec", function () {
      var todos = cat.assuntos.every(function (a) { return estado.sel[a.chave]; });
      cat.assuntos.forEach(function (a) { estado.sel[a.chave] = !todos; });
      if (!todos) abrir(true);
      sincronizar(); atualizar();
    });
    acao.setAttribute("aria-label", "Marcar todos os assuntos de " + cat.nome);

    cat.assuntos.forEach(function (a) {
      var inp = el("input", undefined, { type: "checkbox", name: "assunto", value: a.chave });
      var lab = el("label", undefined, { "class": "escolha" }, [
        inp, el("span", undefined, { "class": "marca" }, [ico("check")]),
        el("span", undefined, { "class": "escolha-texto" }, [el("span", a.nome, { "class": "escolha-nome" }), el("span", plural(a.qtd, "questão", "questões"), { "class": "escolha-sub" })])
      ]);
      inp.onchange = function () { estado.sel[a.chave] = inp.checked; lab.classList.toggle("is-sel", inp.checked); atualizar(); };
      refs.checks.push({ chave: a.chave, inp: inp, lab: lab });
      corpo.appendChild(lab);
    });
    refs.cats.push({ cat: cat, cont: cont, acao: acao, rotulo: acao.querySelector("span") });
    return el("div", undefined, { "class": "cat" }, [
      el("div", undefined, { "class": "cat-cabeca" }, [el("h3", undefined, undefined, [toggle]), acao]),
      corpo
    ]);
  }

  function sincronizar() {
    refs.checks.forEach(function (c) { var on = !!estado.sel[c.chave]; c.inp.checked = on; c.lab.classList.toggle("is-sel", on); });
  }

  /* ---------- Seção: quantidade ---------- */
  function secaoQuantidade() {
    var inp = el("input", undefined, { type: "number", id: "qtd", inputmode: "numeric", min: "1", max: String(MAX), step: "1", value: estado.qtd, "aria-describedby": "qtd-dica qtd-erro" });
    refs.qtdInp = inp;
    function definir(v) { estado.qtd = String(v); inp.value = estado.qtd; atualizar(); }
    inp.oninput = function () { estado.qtd = inp.value; atualizar(); };
    var menos = el("button", undefined, { type: "button", "aria-label": "Diminuir quantidade" }, [ico("menos")]);
    var mais = el("button", undefined, { type: "button", "aria-label": "Aumentar quantidade" }, [ico("mais")]);
    menos.onclick = function () { definir(Math.max(1, (qtdValida() || 10) - 1)); };
    mais.onclick = function () { definir(Math.min(MAX, (qtdValida() || 0) + 1)); };
    refs.atalhos = [5, 10, 20, 30, 50].map(function (n) {
      var b = el("button", String(n), { type: "button", "class": "atalho", "aria-pressed": "false" });
      b.onclick = function () { definir(n); };
      b.setAttribute("data-n", String(n));
      return b;
    });
    refs.qtdErro = el("p", "", { id: "qtd-erro", "class": "erro-campo", hidden: true });
    refs.qtdBloco = el("div", undefined, { "class": "secao" }, [
      el("div", undefined, { "class": "qtd-linha" }, [el("div", undefined, { "class": "stepper" }, [menos, inp, mais]), el("div", undefined, { "class": "atalhos", role: "group", "aria-label": "Atalhos de quantidade" }, refs.atalhos)]),
      el("p", "Entre 1 e " + MAX + " questões.", { id: "qtd-dica", "class": "dica" }),
      refs.qtdErro
    ]);
    return el("section", undefined, { "class": "secao", "aria-labelledby": "h-qtd" }, [
      el("h2", "Quantidade de questões", { id: "h-qtd" }),
      el("label", "Quantas questões você quer responder?", { "for": "qtd", "class": "dica" }),
      refs.qtdBloco
    ]);
  }

  /* ---------- Seção: assuntos aleatórios ---------- */
  function secaoAleatorio() {
    var inp = el("input", undefined, { type: "checkbox", id: "aleatorio", "aria-describedby": "aleat-nota" });
    inp.checked = estado.aleatorio;
    var lab = el("label", undefined, { "class": "escolha" + (estado.aleatorio ? " is-sel" : "") }, [
      inp, el("span", undefined, { "class": "marca" }, [ico("check")]),
      el("span", undefined, { "class": "escolha-texto" }, [el("span", "Incluir assuntos aleatórios", { "class": "escolha-nome" }), el("span", "Mistura questões de outros assuntos além dos que você marcou.", { "class": "escolha-sub" })])
    ]);
    inp.onchange = function () { estado.aleatorio = inp.checked; lab.classList.toggle("is-sel", inp.checked); atualizar(); };
    refs.aleatNota = el("p", "", { id: "aleat-nota", "class": "dica", "aria-live": "polite" });
    return el("section", undefined, { "class": "secao", "aria-labelledby": "h-aleat" }, [el("h2", "Assuntos aleatórios", { id: "h-aleat" }), lab, refs.aleatNota]);
  }

  /* ---------- Painel de resumo e botão ---------- */
  function montarPainel() {
    refs.pQtd = el("dd"); refs.pAss = el("dd"); refs.pAle = el("dd");
    refs.pLista = el("ul", undefined, { "class": "painel-lista", "aria-label": "Assuntos selecionados" });
    refs.pCurto = el("p", "", { "class": "painel-curto" });
    refs.erro = el("div", undefined, { "class": "erro-painel", role: "alert", hidden: true });
    var iniciar = botao("Começar estudo", "btn--primario btn--bloco", tentarComecar, "seta");
    iniciar.appendChild(iniciar.firstChild);
    return el("aside", undefined, { "class": "painel", "aria-label": "Resumo do estudo" }, [
      el("h2", "Seu estudo"),
      el("dl", undefined, undefined, [
        el("div", undefined, undefined, [el("dt", "Questões"), refs.pQtd]),
        el("div", undefined, undefined, [el("dt", "Assuntos"), refs.pAss]),
        el("div", undefined, undefined, [el("dt", "Aleatórios"), refs.pAle])
      ]),
      refs.pLista, refs.pCurto, refs.erro, iniciar
    ]);
  }

  function atualizar() {
    var sel = chaves(), n = qtdValida();
    refs.contGlobal.textContent = sel.length + " de " + Banco.assuntos.length + " selecionados";
    refs.limpar.disabled = sel.length === 0;
    refs.cats.forEach(function (r) {
      var k = r.cat.assuntos.filter(function (a) { return estado.sel[a.chave]; }).length;
      r.cont.textContent = k + " de " + r.cat.assuntos.length;
      r.cont.classList.toggle("tem", k > 0);
      r.rotulo.textContent = k === r.cat.assuntos.length ? "Desmarcar todos" : "Marcar todos";
      r.acao.setAttribute("aria-label", (k === r.cat.assuntos.length ? "Desmarcar todos os assuntos de " : "Marcar todos os assuntos de ") + r.cat.nome);
    });
    refs.atalhos.forEach(function (b) { b.setAttribute("aria-pressed", String(n === Number(b.getAttribute("data-n")))); });
    var ruim = n === null;
    refs.qtdBloco.classList.toggle("campo-invalido", ruim);
    refs.qtdInp.setAttribute("aria-invalid", String(ruim));
    refs.qtdErro.hidden = !ruim;
    refs.qtdErro.textContent = ruim ? "Digite um número inteiro de 1 a " + MAX + "." : "";

    var pc = Math.round((1 - Banco.PARTE_SELECIONADOS) * 100);
    refs.aleatNota.textContent = !estado.aleatorio
      ? "Desativado: as questões vêm somente dos assuntos que você marcou."
      : sel.length
        ? "Ativado: cerca de " + (100 - pc) + "% das questões vêm dos assuntos marcados e o restante, de outros assuntos."
        : "Ativado: sem assuntos marcados, as questões são sorteadas de todos os assuntos.";

    refs.pQtd.textContent = n === null ? "-" : String(n);
    refs.pAss.textContent = sel.length ? plural(sel.length, "assunto", "assuntos") : "Nenhum";
    refs.pAle.textContent = estado.aleatorio ? "Ativados" : "Desativados";
    refs.pCurto.textContent = (sel.length ? plural(sel.length, "assunto", "assuntos") : "Nenhum assunto") + ", " + (n === null ? "quantidade inválida" : plural(n, "questão", "questões"));
    refs.pLista.textContent = "";
    sel.slice(0, 8).forEach(function (c) { refs.pLista.appendChild(el("li", Banco.achar(c).nome)); });
    if (sel.length > 8) refs.pLista.appendChild(el("li", "+" + (sel.length - 8)));
    refs.erro.hidden = true;
  }

  /* ---------- Validação, resumo e início ---------- */
  function validar() {
    var sel = chaves(), n = qtdValida();
    if (n === null) return { msg: "Digite uma quantidade de questões entre 1 e " + MAX + "." };
    if (!sel.length && !estado.aleatorio) return { msg: "Selecione pelo menos um assunto ou ative “Incluir assuntos aleatórios” para começar." };
    if (!estado.aleatorio) {
      var disp = Banco.disponiveis(sel);
      if (disp < n) return { msg: "Os assuntos marcados têm só " + disp + " questões. Reduza a quantidade, marque mais assuntos ou ative “Incluir assuntos aleatórios”.", ajuste: disp };
    }
    return null;
  }

  function tentarComecar() {
    var e = validar();
    if (e) {
      refs.erro.textContent = "";
      refs.erro.appendChild(el("p", e.msg));
      if (e.ajuste) {
        refs.erro.appendChild(botao("Usar " + e.ajuste + " questões", "btn--mini btn--sec", function () { estado.qtd = String(e.ajuste); refs.qtdInp.value = estado.qtd; atualizar(); }));
      }
      refs.erro.hidden = false;
      return;
    }
    abrirResumo();
  }

  function abrirResumo() {
    var sel = chaves(), n = qtdValida(), pc = Math.round((1 - Banco.PARTE_SELECIONADOS) * 100);
    var dlg = el("dialog", undefined, { "class": "dialogo", "aria-labelledby": "dlg-titulo" });
    var lista = el("ul", undefined, { "class": "painel-lista" });
    sel.forEach(function (c) { lista.appendChild(el("li", Banco.achar(c).nome)); });
    var alea = !estado.aleatorio ? "Desativados. Só entram os assuntos que você marcou."
      : sel.length ? "Ativados. Cerca de " + pc + "% das questões vêm de outros assuntos."
      : "Ativados. As questões vêm de todos os assuntos.";
    var ok = botao("Confirmar e começar", "btn--primario", function () { dlg.close(); comecar(); });
    dlg.appendChild(el("h2", "Confira seu estudo", { id: "dlg-titulo" }));
    dlg.appendChild(el("dl", undefined, undefined, [
      el("div", undefined, undefined, [el("dt", "Quantidade de questões"), el("dd", String(n))]),
      el("div", undefined, undefined, [el("dt", "Assuntos escolhidos"), sel.length ? el("dd", undefined, undefined, [lista]) : el("dd", "Nenhum assunto marcado")]),
      el("div", undefined, undefined, [el("dt", "Assuntos aleatórios"), el("dd", alea)])
    ]));
    dlg.appendChild(el("div", undefined, { "class": "dialogo-acoes" }, [botao("Voltar e ajustar", "btn--sec", function () { dlg.close(); }), ok]));
    dlg.addEventListener("close", function () { if (dlg.parentNode) dlg.parentNode.removeChild(dlg); });
    dlg.addEventListener("click", function (ev) { if (ev.target === dlg) dlg.close(); });
    document.body.appendChild(dlg);
    if (typeof dlg.showModal !== "function") { dlg.parentNode.removeChild(dlg); comecar(); return; }
    dlg.showModal();
    ok.focus();
  }

  function comecar() {
    var qs = Banco.sortearGeral(chaves(), qtdValida(), estado.aleatorio);
    Atividade.iniciar({ titulo: "Perguntas gerais", questoes: qs, voltar: "geral", refazer: comecar });
  }
})();
