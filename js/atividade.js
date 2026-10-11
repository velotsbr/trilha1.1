/* ===== ATIVIDADE: perguntas e resultado (usada por todos os modos) =====
   Atividade.iniciar({ titulo, questoes, voltar: "rota do modo", refazer: função que sorteia e inicia de novo }) */
var Atividade = (function () {
  var s = null; // estado da atividade em andamento

  // Monta a pergunta: 1 correta + 4 incorretas sorteadas. Se a questão tiver uma lista
  // "erradas" maior que 4, cada rodada mostra incorretas diferentes.
  function montar(q) {
    var correta = q.correta || q.alternativas[q.gabarito];
    var erradas = q.erradas || Object.keys(q.alternativas)
      .filter(function (l) { return l !== q.gabarito; })
      .map(function (l) { return q.alternativas[l]; });
    var opcoes = embaralhar([correta].concat(embaralhar(erradas).slice(0, 4)));
    return { id: q.id, materia: q.materia, assunto: q.assunto, enunciado: q.enunciado, explicacao: q.explicacao, correta: correta, opcoes: opcoes };
  }

  function iniciar(opcoes) {
    s = { titulo: opcoes.titulo, perguntas: opcoes.questoes.map(montar), atual: 0, escolhas: [], voltar: opcoes.voltar || "inicio", refazer: opcoes.refazer, fim: false };
    ir("estudo");
  }

  Rotas.estudo = function () {
    if (!s || !s.perguntas.length) { ir("inicio"); return; }
    if (s.fim) telaResultado(); else telaPergunta();
  };

  function sair() { var destino = s.voltar; s = null; ir(destino); }

  function telaPergunta() {
    var p = s.perguntas[s.atual], total = s.perguntas.length, ultima = s.atual === total - 1;

    var painelSaida = el("div", undefined, { "class": "saida", hidden: true, role: "group", "aria-label": "Confirmar saída" }, [
      el("p", "Sair da atividade? Suas respostas desta atividade serão perdidas."),
      el("div", undefined, { "class": "saida-acoes" }, [
        botao("Continuar estudando", "btn--primario", function () { painelSaida.hidden = true; botaoSair.setAttribute("aria-expanded", "false"); botaoSair.focus(); }),
        botao("Sair da atividade", "btn--sec", sair)
      ])
    ]);
    var botaoSair = botao("Sair", "btn--leve", function () {
      painelSaida.hidden = !painelSaida.hidden;
      botaoSair.setAttribute("aria-expanded", String(!painelSaida.hidden));
      if (!painelSaida.hidden) painelSaida.querySelector("button").focus();
    }, "x");
    botaoSair.setAttribute("aria-expanded", "false");

    var barra = el("div", undefined, { "class": "progresso", role: "progressbar", "aria-label": "Progresso da atividade", "aria-valuemin": "0", "aria-valuemax": String(total), "aria-valuenow": String(s.atual + 1) }, [
      el("div", undefined, { style: "width:" + Math.round(((s.atual + 1) / total) * 100) + "%" })
    ]);

    var dica = el("p", "Escolha uma alternativa para continuar.", { "class": "dica" });
    var proxima = botao(ultima ? "Finalizar" : "Próxima", "btn--primario", function () {
      if (ultima) { s.fim = true; renderizar(); } else { s.atual++; renderizar(); }
    }, "seta");
    // O ícone da seta vai depois do texto
    proxima.appendChild(proxima.firstChild);

    function atualizarEstado() {
      var escolhida = s.escolhas[s.atual];
      botoesAlt.forEach(function (b, i) { b.setAttribute("aria-pressed", escolhida === i ? "true" : "false"); });
      proxima.disabled = escolhida === undefined;
      dica.hidden = escolhida !== undefined;
    }

    var botoesAlt = p.opcoes.map(function (texto, i) {
      var b = el("button", undefined, { type: "button", "class": "alt", "aria-pressed": "false" }, [
        el("span", LETRAS[i], { "class": "letra", "aria-hidden": "true" }),
        el("span", texto)
      ]);
      b.onclick = function () { s.escolhas[s.atual] = i; atualizarEstado(); };
      return b;
    });

    var acoes = el("div", undefined, { "class": "ativ-acoes" });
    if (s.atual > 0) acoes.appendChild(botao("Anterior", "btn--sec", function () { s.atual--; renderizar(); }, "voltar"));
    else acoes.appendChild(el("span"));
    acoes.appendChild(proxima);
    acoes.appendChild(dica);

    var tela = [
      el("div", undefined, { "class": "ativ-topo" }, [botaoSair, el("span", s.titulo, { "class": "ativ-nome" })]),
      painelSaida,
      barra,
      el("p", "Pergunta " + (s.atual + 1) + " de " + total, { "class": "progresso-txt" }),
      el("section", undefined, { "class": "pergunta", "aria-label": "Pergunta " + (s.atual + 1) }, [
        el("p", p.materia + ": " + p.assunto, { "class": "etiqueta" }),
        el("h1", p.enunciado, { "class": "enunciado" }),
        el("div", undefined, { "class": "alts", role: "group", "aria-label": "Alternativas" }, botoesAlt)
      ]),
      acoes
    ];
    mostrar("Pergunta " + (s.atual + 1) + " de " + total, tela);
    atualizarEstado();
  }

  function telaResultado() {
    var total = s.perguntas.length, acertos = 0;
    var itens = s.perguntas.map(function (p, n) {
      var marcada = p.opcoes[s.escolhas[n]], acertou = marcada === p.correta;
      if (acertou) acertos++;
      var corpo = el("div", undefined, { "class": "rev-corpo" });
      if (!acertou) {
        corpo.appendChild(el("p", undefined, { "class": "rev-sua" }, [el("strong", "Sua resposta: "), document.createTextNode(marcada === undefined ? "sem resposta" : marcada)]));
      }
      corpo.appendChild(el("p", undefined, { "class": "rev-certa" }, [el("strong", "Resposta certa: "), document.createTextNode(p.correta)]));
      corpo.appendChild(el("p", p.explicacao, { "class": "rev-expl" }));
      var resumo = el("summary", undefined, undefined, [
        el("span", (n + 1) + ". " + p.materia + ": " + p.assunto),
        el("span", undefined, { "class": "res " + (acertou ? "res--certo" : "res--erro") }, [ico(acertou ? "check" : "x"), el("span", acertou ? "Acertou" : "Errou")])
      ]);
      return el("details", undefined, { "class": "rev", open: !acertou }, [resumo, corpo]);
    });
    var pct = Math.round((acertos / total) * 100);
    var msg = pct >= 80 ? "Excelente resultado. Continue assim." : pct >= 50 ? "Você está no caminho. Revise os erros abaixo." : "Vale revisar os erros abaixo e tentar de novo.";
    var refazer = s.refazer, voltar = s.voltar;
    var placar = el("section", undefined, { "class": "placar", "aria-label": "Placar" }, [
      el("h1", "Resultado"),
      el("p", undefined, { "class": "placar-n" }, [document.createTextNode(acertos + " de " + total + " "), el("small", "(" + pct + "%)")]),
      el("p", msg)
    ]);
    var acoes = el("div", undefined, { "class": "placar-acoes" }, [
      refazer ? botao("Estudar de novo", "btn--primario", function () { refazer(); }) : null,
      botao("Mudar configuração", "btn--sec", function () { s = null; ir(voltar); }),
      botao("Voltar ao início", "btn--leve", function () { s = null; ir("inicio"); })
    ]);
    mostrar("Resultado", [placar, acoes, el("h2", "Revisão das questões"), el("div", undefined, { "class": "revisao" }, itens)]);
  }

  return { iniciar: iniciar };
})();
