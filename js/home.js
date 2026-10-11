/* ===== PÁGINA INICIAL: monta os cartões a partir dos modos registrados ===== */
Rotas.inicio = function () {
  var hero = el("section", undefined, { "class": "hero" }, [
    el("h1", "Boas-vindas! Vamos estudar?"),
    el("p", "Escolha seu modo de estudo e comece a evoluir.", { "class": "lead" })
  ]);
  var grade = el("ul", undefined, { "class": "modos" });
  Modos.forEach(function (m) {
    var idT = "modo-" + m.id;
    var topo = el("div", undefined, { "class": "modo-topo" }, [el("span", undefined, { "class": "tile" }, [ico(m.icone)]), m.selo ? el("span", m.selo, { "class": "selo" }) : null]);
    var cartao = el("article", undefined, { "class": "modo modo--" + m.cor, "aria-labelledby": idT }, [
      topo, el("h2", m.titulo, { id: idT }), el("p", m.descricao), m.previa(), link(m.botao, m.rota, "btn--modo", null, "seta")
    ]);
    grade.appendChild(el("li", undefined, undefined, [cartao]));
  });
  var rodape = el("footer", undefined, { "class": "rodape" }, [
    el("p", "Banco de questões: " + Banco.total + " questões em " + Banco.assuntos.length + " assuntos."),
    el("p", "Versão de teste. As questões são inéditas e ainda estão em revisão.")
  ]);
  mostrar("Início", [hero, grade, rodape]);
  document.title = NOME_PLATAFORMA + " - Plataforma de estudos";
};
