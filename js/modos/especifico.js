/* ===== MODO 2: ASSUNTOS ESPECÍFICOS =====
   O aluno escolhe uma matéria e um assunto e faz uma atividade só daquele assunto. */
(function () {
  var N = Banco.POR_ATIVIDADE;
  var estado = { materia: null, chave: null };
  var refs = {};

  Modos.push({
    id: "especifico", rota: "especifico", cor: "amarelo", icone: "alvo",
    titulo: "Assuntos específicos",
    descricao: "Treine um conteúdo de cada vez, com " + N + " questões só sobre ele.",
    botao: "Escolher um assunto",
    previa: function () {
      return el("div", undefined, { "class": "previa" }, [
        el("div", undefined, { "class": "trilha" }, [el("span", "Matemática", { "class": "pilula" }), ico("chevron"), el("span", "Porcentagem", { "class": "pilula" })]),
        el("p", N + " questões desse assunto", { "class": "previa-rodape" })
      ]);
    }
  });

  function materiaAtual() { return Banco.materias.filter(function (m) { return m.nome === estado.materia; })[0] || null; }
  function assuntoAtual() { return estado.chave ? Banco.achar(estado.chave) : null; }
  function plural(n, um, varios) { return n + " " + (n === 1 ? um : varios); }

  Rotas.especifico = function () {
    refs = {};
    var cab = cabecalhoTela({ cor: "amarelo", icone: "alvo", titulo: "Assuntos específicos", lead: "Escolha uma matéria e depois um assunto. Você responde " + N + " questões só desse conteúdo." });
    var coluna = el("div", undefined, { "class": "coluna" }, [secaoMaterias(), secaoAssuntos()]);
    mostrar("Assuntos específicos", [cab, el("div", undefined, { "class": "layout" }, [coluna, montarPainel()])]);
    desenharAssuntos();
    atualizar();
  };

  function secaoMaterias() {
    var tiles = el("div", undefined, { "class": "tiles" });
    Banco.materias.forEach(function (m) {
      var inp = el("input", undefined, { type: "radio", name: "materia", value: m.nome });
      inp.checked = estado.materia === m.nome;
      var lab = el("label", undefined, { "class": "escolha escolha--radio" + (inp.checked ? " is-sel" : "") }, [
        inp, el("span", undefined, { "class": "marca" }, [ico("check")]),
        el("span", undefined, { "class": "escolha-texto" }, [el("span", m.nome, { "class": "escolha-nome" }), el("span", plural(m.total, "assunto", "assuntos"), { "class": "escolha-sub" })])
      ]);
      inp.onchange = function () {
        estado.materia = m.nome;
        var a = assuntoAtual(); if (a && a.materia !== m.nome) estado.chave = null;
        Array.prototype.forEach.call(tiles.querySelectorAll("label"), function (l) { l.classList.toggle("is-sel", l.querySelector("input").checked); });
        desenharAssuntos(); atualizar();
      };
      tiles.appendChild(lab);
    });
    return el("fieldset", undefined, { "class": "secao" }, [el("legend", "Matéria"), tiles]);
  }

  function secaoAssuntos() {
    refs.assuntosBox = el("div", undefined, { "class": "secao" });
    return el("fieldset", undefined, { "class": "secao", "aria-describedby": "assunto-dica" }, [el("legend", "Assunto"), refs.assuntosBox]);
  }

  function desenharAssuntos() {
    var box = refs.assuntosBox; box.textContent = "";
    var m = materiaAtual();
    if (!m) { box.appendChild(el("p", "Escolha uma matéria para ver os assuntos.", { "class": "vazio", id: "assunto-dica" })); return; }
    m.categorias.forEach(function (cat) {
      if (m.categorias.length > 1) box.appendChild(el("h3", cat.nome));
      var lista = el("div", undefined, { "class": "tiles" });
      cat.assuntos.forEach(function (a) {
        var inp = el("input", undefined, { type: "radio", name: "assunto", value: a.chave });
        inp.checked = estado.chave === a.chave;
        var lab = el("label", undefined, { "class": "escolha escolha--radio" + (inp.checked ? " is-sel" : "") }, [
          inp, el("span", undefined, { "class": "marca" }, [ico("check")]),
          el("span", undefined, { "class": "escolha-texto" }, [el("span", a.nome, { "class": "escolha-nome" }), el("span", plural(a.qtd, "questão", "questões"), { "class": "escolha-sub" })])
        ]);
        inp.onchange = function () {
          estado.chave = a.chave;
          Array.prototype.forEach.call(box.querySelectorAll("label"), function (l) { l.classList.toggle("is-sel", l.querySelector("input").checked); });
          atualizar();
        };
        lista.appendChild(lab);
      });
      box.appendChild(lista);
    });
  }

  function montarPainel() {
    refs.alvo = el("div", undefined, { "class": "painel-alvo" });
    refs.curto = el("p", "", { "class": "painel-curto" });
    refs.aviso = el("p", "", { "class": "aviso", hidden: true });
    refs.erro = el("div", undefined, { "class": "erro-painel", role: "alert", hidden: true });
    var iniciar = botao("Começar estudo", "btn--primario btn--bloco", tentarComecar, "seta");
    iniciar.appendChild(iniciar.firstChild);
    return el("aside", undefined, { "class": "painel", "aria-label": "Resumo do estudo" }, [el("h2", "Você vai estudar"), refs.alvo, refs.curto, refs.aviso, refs.erro, iniciar]);
  }

  function atualizar() {
    var a = assuntoAtual(), n = a ? Math.min(N, a.qtd) : N;
    refs.alvo.textContent = "";
    if (a) {
      refs.alvo.appendChild(el("span", a.materia, { "class": "sub" }));
      refs.alvo.appendChild(el("strong", a.nome));
      refs.alvo.appendChild(el("span", plural(n, "questão", "questões") + " só deste assunto", { "class": "sub" }));
      refs.curto.textContent = a.materia + ": " + a.nome;
    } else {
      refs.alvo.appendChild(el("span", "Nenhum assunto escolhido ainda.", { "class": "sub" }));
      refs.curto.textContent = "Nenhum assunto escolhido";
    }
    refs.aviso.hidden = !(a && a.qtd < N);
    refs.aviso.textContent = a && a.qtd < N ? "Este assunto tem " + a.qtd + " questões no banco por enquanto, então a atividade terá " + a.qtd + "." : "";
    refs.erro.hidden = true;
  }

  function tentarComecar() {
    var a = assuntoAtual();
    if (!a) {
      refs.erro.textContent = estado.materia ? "Escolha um assunto de " + estado.materia + " para começar." : "Escolha uma matéria e um assunto para começar.";
      refs.erro.hidden = false;
      return;
    }
    comecar();
  }

  function comecar() {
    var a = assuntoAtual();
    Atividade.iniciar({ titulo: a.nome, questoes: Banco.sortearAssunto(a.chave, N), voltar: "especifico", refazer: comecar });
  }
})();
