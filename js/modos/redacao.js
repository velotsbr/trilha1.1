/* ===== MODO 3: REDAÇÃO (estrutura inicial) =====
   Ainda não há temas, texto nem correção. Para desenvolver depois: preencha Redacao.temas,
   use Redacao.sortearParte() e troque a tela abaixo pelo editor. */
var Redacao = {
  partes: ["Introdução", "Desenvolvimento", "Conclusão"],
  temas: [], // futuro: lista de temas de redação
  sortearParte: function () { return this.partes[Math.floor(Math.random() * this.partes.length)]; }
};

(function () {
  Modos.push({
    id: "redacao", rota: "redacao", cor: "verde", icone: "caneta", selo: "Em breve",
    titulo: "Redação",
    descricao: "Receba um tema e escreva só uma parte do texto: introdução, desenvolvimento ou conclusão.",
    botao: "Ver como vai funcionar",
    previa: function () {
      return el("div", undefined, { "class": "previa" }, [
        el("div", undefined, { "class": "partes" }, [el("span", "Introdução"), el("span", "Desenvolvimento", { "class": "is-vez" }), el("span", "Conclusão")]),
        el("p", "A plataforma escolhe a sua parte", { "class": "previa-rodape" })
      ]);
    }
  });

  Rotas.redacao = function () {
    var cab = cabecalhoTela({ cor: "verde", icone: "caneta", titulo: "Redação", selo: "Em desenvolvimento", lead: "Este modo ainda está sendo construído. Veja como ele vai funcionar." });
    var passos = el("ol", undefined, { "class": "passos" }, [
      passo("Você recebe um tema", "A plataforma apresenta um tema de redação no estilo das provas."),
      passo("A plataforma sorteia uma parte", "Pode ser a introdução, o desenvolvimento ou a conclusão."),
      passo("Você escreve só essa parte", "Em vez de um texto inteiro, você treina uma parte de cada vez.")
    ]);
    var info = el("p", "Por enquanto não há temas, campo de escrita nem correção. Enquanto isso, treine com as perguntas.", { "class": "aviso" });
    var acoes = el("div", undefined, { "class": "placar-acoes" }, [link("Perguntas gerais", "geral", "btn--primario"), link("Assuntos específicos", "especifico", "btn--sec"), link("Voltar ao início", "inicio", "btn--leve")]);
    mostrar("Redação", [cab, el("section", undefined, { "class": "coluna", "aria-label": "Como vai funcionar" }, [el("h2", "Como vai funcionar"), passos, info, acoes])]);
  };

  function passo(t, d) {
    return el("li", undefined, { "class": "passo" }, [el("span", undefined, { "class": "passo-n" }), el("div", undefined, undefined, [el("h3", t), el("p", d, { "class": "dica" })])]);
  }
})();
