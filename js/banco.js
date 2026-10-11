/* ===== BANCO DE QUESTÕES: índices e sorteio =====
   Lê QUESTOES (bloco de dados acima). Cada questão tem materia, assunto e, nas de Ciências da Natureza, area. */
var Banco = (function () {
  var POR_ATIVIDADE = 10;          // Modo específico: tamanho da atividade
  var MAX_GERAL = 50;              // Modo geral: máximo de questões por atividade
  var PARTE_SELECIONADOS = 0.7;    // Modo geral com aleatórios: fatia que vem dos assuntos marcados

  var porAssunto = {}, assuntos = [], categorias = [], materias = [];
  var catMap = {}, matMap = {};

  QUESTOES.forEach(function (q) {
    var chave = q.materia + "|" + q.assunto;
    if (!porAssunto[chave]) {
      porAssunto[chave] = [];
      var nomeCat = q.area || q.materia;
      var a = { chave: chave, nome: q.assunto, materia: q.materia, categoria: nomeCat, qtd: 0 };
      assuntos.push(a);
      if (!catMap[nomeCat]) { catMap[nomeCat] = { nome: nomeCat, materia: q.materia, assuntos: [] }; categorias.push(catMap[nomeCat]); }
      catMap[nomeCat].assuntos.push(a);
      if (!matMap[q.materia]) { matMap[q.materia] = { nome: q.materia, categorias: [], total: 0 }; materias.push(matMap[q.materia]); }
      if (matMap[q.materia].categorias.indexOf(catMap[nomeCat]) < 0) matMap[q.materia].categorias.push(catMap[nomeCat]);
      matMap[q.materia].total++;
    }
    porAssunto[chave].push(q);
  });
  assuntos.forEach(function (a) { a.qtd = porAssunto[a.chave].length; });

  function achar(chave) { for (var i = 0; i < assuntos.length; i++) if (assuntos[i].chave === chave) return assuntos[i]; return null; }

  // Pega até n questões repartindo por igual entre os assuntos (um de cada vez, em rodízio).
  function equilibrado(chaves, n) {
    var filas = embaralhar(chaves).map(function (c) { return embaralhar(porAssunto[c]); });
    var saida = [], i = 0;
    while (saida.length < n && filas.some(function (f) { return f.length; })) {
      var f = filas[i % filas.length];
      if (f.length) saida.push(f.shift());
      i++;
    }
    return saida;
  }

  function disponiveis(chaves) { return chaves.reduce(function (s, c) { return s + (porAssunto[c] ? porAssunto[c].length : 0); }, 0); }

  // Modo geral. Sem aleatórios: só os assuntos marcados. Com aleatórios: ~70% dos marcados, o resto de outros assuntos.
  function sortearGeral(chaves, n, aleatorio) {
    var todas = assuntos.map(function (a) { return a.chave; });
    if (!aleatorio) return embaralhar(equilibrado(chaves, n));
    if (!chaves.length) return embaralhar(equilibrado(todas, n));
    var outras = todas.filter(function (c) { return chaves.indexOf(c) < 0; });
    var nSel = Math.min(disponiveis(chaves), Math.ceil(n * PARTE_SELECIONADOS));
    var nOut = Math.min(disponiveis(outras), n - nSel);
    nSel = Math.min(disponiveis(chaves), n - nOut);
    return embaralhar(equilibrado(chaves, nSel).concat(equilibrado(outras, nOut)));
  }

  // Modo específico: só questões do assunto escolhido (até n; se o banco tiver menos, devolve todas).
  function sortearAssunto(chave, n) { return embaralhar(porAssunto[chave] || []).slice(0, n); }

  return {
    POR_ATIVIDADE: POR_ATIVIDADE, MAX_GERAL: MAX_GERAL, PARTE_SELECIONADOS: PARTE_SELECIONADOS,
    assuntos: assuntos, categorias: categorias, materias: materias, total: QUESTOES.length,
    achar: achar, disponiveis: disponiveis, sortearGeral: sortearGeral, sortearAssunto: sortearAssunto
  };
})();
