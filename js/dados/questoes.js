// Questões inéditas (Matemática, Português, História, Geografia e Ciências da Natureza). gabarito = letra. Revise antes de usar.
const QUESTOES = [
  {
    "id": "M01-Q1",
    "materia": "Matemática",
    "assunto": "Geometria",
    "dificuldade": "facil",
    "enunciado": "Um retângulo tem 8 m de comprimento e 5 m de largura. Qual é o seu perímetro?",
    "imagem": null,
    "alternativas": {
      "A": "26 m",
      "B": "40 m",
      "C": "13 m",
      "D": "18 m",
      "E": "30 m"
    },
    "gabarito": "A",
    "explicacao": "Perímetro é a soma de todos os lados: 8 + 5 + 8 + 5 = 26 m.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M01-Q2",
    "materia": "Matemática",
    "assunto": "Geometria",
    "dificuldade": "facil",
    "enunciado": "Um triângulo tem base de 10 cm e altura de 6 cm. Qual é a sua área?",
    "imagem": null,
    "alternativas": {
      "A": "16 cm²",
      "B": "60 cm²",
      "C": "30 cm²",
      "D": "36 cm²",
      "E": "15 cm²"
    },
    "gabarito": "C",
    "explicacao": "Área do triângulo = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 30 cm².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M01-Q3",
    "materia": "Matemática",
    "assunto": "Geometria",
    "dificuldade": "media",
    "enunciado": "Uma escada de 5 m de comprimento está apoiada em uma parede vertical, com a base a 3 m da parede. A que altura da parede a escada toca?",
    "imagem": null,
    "alternativas": {
      "A": "2 m",
      "B": "3 m",
      "C": "8 m",
      "D": "4 m",
      "E": "5 m"
    },
    "gabarito": "D",
    "explicacao": "Pitágoras: 5² = 3² + h², então h² = 25 − 9 = 16 e h = 4 m.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M01-Q4",
    "materia": "Matemática",
    "assunto": "Geometria",
    "dificuldade": "media",
    "enunciado": "Um terreno quadrado tem 10 m de lado e, no meio dele, há um canteiro circular de raio 3 m. Considerando π = 3, qual é a área do terreno que sobra, sem contar o canteiro?",
    "imagem": null,
    "alternativas": {
      "A": "27 m²",
      "B": "91 m²",
      "C": "100 m²",
      "D": "70 m²",
      "E": "73 m²"
    },
    "gabarito": "E",
    "explicacao": "Área do terreno: 10 × 10 = 100 m². Área do canteiro: 3 × 3² = 27 m². Sobra 100 − 27 = 73 m².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M01-Q5",
    "materia": "Matemática",
    "assunto": "Geometria",
    "dificuldade": "dificil",
    "enunciado": "Uma caixa-d'água tem formato de paralelepípedo, com 2 m de comprimento, 1,5 m de largura e 1 m de altura. Sabendo que 1 m³ equivale a 1.000 litros, quantos litros cabem nela?",
    "imagem": null,
    "alternativas": {
      "A": "300 L",
      "B": "3.000 L",
      "C": "30.000 L",
      "D": "4.500 L",
      "E": "6.000 L"
    },
    "gabarito": "B",
    "explicacao": "Volume = 2 × 1,5 × 1 = 3 m³. Como 1 m³ = 1.000 L, cabem 3.000 L.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M02-Q1",
    "materia": "Matemática",
    "assunto": "Porcentagem",
    "dificuldade": "facil",
    "enunciado": "Uma camisa custava R$ 80,00 e está com 25% de desconto. Quanto ela custa agora?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 20,00",
      "B": "R$ 55,00",
      "C": "R$ 60,00",
      "D": "R$ 100,00",
      "E": "R$ 105,00"
    },
    "gabarito": "C",
    "explicacao": "25% de 80 é 20, que é o desconto. O preço novo é 80 − 20 = R$ 60,00.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M02-Q2",
    "materia": "Matemática",
    "assunto": "Porcentagem",
    "dificuldade": "facil",
    "enunciado": "Em um ônibus com 40 passageiros, 15% são crianças. Quantos passageiros são crianças?",
    "imagem": null,
    "alternativas": {
      "A": "6",
      "B": "15",
      "C": "25",
      "D": "34",
      "E": "55"
    },
    "gabarito": "A",
    "explicacao": "15% de 40 = 0,15 × 40 = 6 crianças.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M02-Q3",
    "materia": "Matemática",
    "assunto": "Porcentagem",
    "dificuldade": "media",
    "enunciado": "O preço de um celular passou de R$ 800,00 para R$ 920,00. Qual foi o aumento percentual?",
    "imagem": null,
    "alternativas": {
      "A": "5%",
      "B": "10%",
      "C": "12%",
      "D": "120%",
      "E": "15%"
    },
    "gabarito": "E",
    "explicacao": "O aumento foi de 920 − 800 = 120 reais. Em relação ao preço inicial: 120 ÷ 800 = 0,15 = 15%.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M02-Q4",
    "materia": "Matemática",
    "assunto": "Porcentagem",
    "dificuldade": "media",
    "enunciado": "Uma loja deu 10% de desconto em uma geladeira de R$ 2.000,00 e, depois, mais 10% de desconto sobre o novo preço. Qual é o preço final?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 1.600,00",
      "B": "R$ 1.620,00",
      "C": "R$ 1.640,00",
      "D": "R$ 1.800,00",
      "E": "R$ 1.580,00"
    },
    "gabarito": "B",
    "explicacao": "Primeiro desconto: 2.000 × 0,9 = 1.800. Segundo desconto, sobre 1.800: 1.800 × 0,9 = 1.620. Dois descontos de 10% não somam 20%.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M02-Q5",
    "materia": "Matemática",
    "assunto": "Porcentagem",
    "dificuldade": "dificil",
    "enunciado": "Em uma escola, 60% dos alunos estudam de manhã. Dos alunos da manhã, 25% participam do clube de ciências. Se o clube tem 90 alunos, quantos alunos a escola tem no total?",
    "imagem": null,
    "alternativas": {
      "A": "150",
      "B": "216",
      "C": "360",
      "D": "600",
      "E": "900"
    },
    "gabarito": "D",
    "explicacao": "Se 25% dos alunos da manhã são 90, os alunos da manhã são 90 ÷ 0,25 = 360. Como 360 são 60% da escola, o total é 360 ÷ 0,6 = 600.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M03-Q1",
    "materia": "Matemática",
    "assunto": "Razão, proporção e regra de três",
    "dificuldade": "facil",
    "enunciado": "Em uma sala há 12 meninas e 18 meninos. Qual é a razão entre o número de meninas e o total de alunos da sala?",
    "imagem": null,
    "alternativas": {
      "A": "3/5",
      "B": "2/3",
      "C": "3/2",
      "D": "1/5",
      "E": "2/5"
    },
    "gabarito": "E",
    "explicacao": "O total é 12 + 18 = 30. A razão é 12/30, que simplificada por 6 dá 2/5.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M03-Q2",
    "materia": "Matemática",
    "assunto": "Razão, proporção e regra de três",
    "dificuldade": "facil",
    "enunciado": "Um carro percorre 90 km gastando 6 litros de combustível. Mantendo o mesmo consumo, quantos quilômetros ele percorre com 20 litros?",
    "imagem": null,
    "alternativas": {
      "A": "180",
      "B": "270",
      "C": "300",
      "D": "360",
      "E": "420"
    },
    "gabarito": "C",
    "explicacao": "Regra de três: 6 L → 90 km, 20 L → x. x = (90 × 20) ÷ 6 = 300 km.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M03-Q3",
    "materia": "Matemática",
    "assunto": "Razão, proporção e regra de três",
    "dificuldade": "media",
    "enunciado": "A escala de um mapa é 1 : 2.000.000. Se a distância entre duas cidades no mapa é 4,5 cm, qual é a distância real entre elas?",
    "imagem": null,
    "alternativas": {
      "A": "90 km",
      "B": "9 km",
      "C": "900 km",
      "D": "45 km",
      "E": "9.000 km"
    },
    "gabarito": "A",
    "explicacao": "4,5 × 2.000.000 = 9.000.000 cm. Como 1 km = 100.000 cm, são 90 km.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M03-Q4",
    "materia": "Matemática",
    "assunto": "Razão, proporção e regra de três",
    "dificuldade": "media",
    "enunciado": "Seis pedreiros constroem um muro em 10 dias. Mantendo o mesmo ritmo de trabalho, em quantos dias 15 pedreiros construiriam o mesmo muro?",
    "imagem": null,
    "alternativas": {
      "A": "25",
      "B": "6",
      "C": "2",
      "D": "4",
      "E": "10"
    },
    "gabarito": "D",
    "explicacao": "Mais pedreiros, menos dias: grandezas inversamente proporcionais. 6 × 10 = 15 × x, então x = 60 ÷ 15 = 4 dias.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M03-Q5",
    "materia": "Matemática",
    "assunto": "Razão, proporção e regra de três",
    "dificuldade": "dificil",
    "enunciado": "Ana, Bia e Caio abriram um negócio. Ana investiu R$ 2.000,00, Bia R$ 3.000,00 e Caio R$ 5.000,00. O lucro de R$ 4.500,00 será dividido em partes proporcionais ao valor investido. Quanto Bia deve receber?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 900,00",
      "B": "R$ 1.350,00",
      "C": "R$ 1.500,00",
      "D": "R$ 2.250,00",
      "E": "R$ 1.125,00"
    },
    "gabarito": "B",
    "explicacao": "O total investido é 10.000. Bia colocou 3/10 do total, então recebe 3/10 de 4.500 = R$ 1.350,00.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M04-Q1",
    "materia": "Matemática",
    "assunto": "MMC e MDC",
    "dificuldade": "facil",
    "enunciado": "Qual é o mínimo múltiplo comum (MMC) entre 12 e 18?",
    "imagem": null,
    "alternativas": {
      "A": "18",
      "B": "36",
      "C": "54",
      "D": "72",
      "E": "216"
    },
    "gabarito": "B",
    "explicacao": "12 = 2² · 3 e 18 = 2 · 3². O MMC usa os maiores expoentes: 2² · 3² = 36.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M04-Q2",
    "materia": "Matemática",
    "assunto": "MMC e MDC",
    "dificuldade": "facil",
    "enunciado": "Qual é o máximo divisor comum (MDC) entre 24 e 36?",
    "imagem": null,
    "alternativas": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "12",
      "E": "72"
    },
    "gabarito": "D",
    "explicacao": "24 = 2³ · 3 e 36 = 2² · 3². O MDC usa os menores expoentes: 2² · 3 = 12.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M04-Q3",
    "materia": "Matemática",
    "assunto": "MMC e MDC",
    "dificuldade": "media",
    "enunciado": "Dois ônibus saem juntos da rodoviária às 6h. Um deles sai a cada 20 minutos e o outro a cada 30 minutos. A que horas eles voltam a sair juntos pela primeira vez?",
    "imagem": null,
    "alternativas": {
      "A": "6h30",
      "B": "6h50",
      "C": "7h00",
      "D": "7h20",
      "E": "7h30"
    },
    "gabarito": "C",
    "explicacao": "MMC(20, 30) = 60 minutos. Uma hora depois das 6h, ou seja, às 7h00.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M04-Q4",
    "materia": "Matemática",
    "assunto": "MMC e MDC",
    "dificuldade": "media",
    "enunciado": "Uma costureira tem duas fitas, uma de 84 cm e outra de 120 cm. Ela quer cortá-las em pedaços iguais, do maior tamanho possível, sem sobrar nada. Quantos pedaços ela terá no total?",
    "imagem": null,
    "alternativas": {
      "A": "10",
      "B": "12",
      "C": "14",
      "D": "24",
      "E": "17"
    },
    "gabarito": "E",
    "explicacao": "MDC(84, 120) = 12 cm. Pedaços: 84 ÷ 12 = 7 e 120 ÷ 12 = 10. No total, 7 + 10 = 17.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M04-Q5",
    "materia": "Matemática",
    "assunto": "MMC e MDC",
    "dificuldade": "dificil",
    "enunciado": "Três luzes piscam juntas em um certo instante. A primeira pisca a cada 4 s, a segunda a cada 6 s e a terceira a cada 10 s. Considerando o intervalo de 0 a 180 segundos, sem contar o instante 0 mas contando o instante 180, quantas vezes as três piscam juntas?",
    "imagem": null,
    "alternativas": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "6",
      "E": "15"
    },
    "gabarito": "A",
    "explicacao": "MMC(4, 6, 10) = 60 s. Elas piscam juntas em 60 s, 120 s e 180 s: 3 vezes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M05-Q1",
    "materia": "Matemática",
    "assunto": "Equações e funções",
    "dificuldade": "facil",
    "enunciado": "Resolva a equação 3x + 5 = 20. Qual é o valor de x?",
    "imagem": null,
    "alternativas": {
      "A": "5",
      "B": "7",
      "C": "8",
      "D": "10",
      "E": "15"
    },
    "gabarito": "A",
    "explicacao": "3x = 20 − 5 = 15, então x = 15 ÷ 3 = 5.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M05-Q2",
    "materia": "Matemática",
    "assunto": "Equações e funções",
    "dificuldade": "facil",
    "enunciado": "Uma locadora cobra uma taxa fixa de R$ 50,00 mais R$ 12,00 por hora de aluguel. Quanto paga quem aluga por 5 horas?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 60,00",
      "B": "R$ 85,00",
      "C": "R$ 100,00",
      "D": "R$ 310,00",
      "E": "R$ 110,00"
    },
    "gabarito": "E",
    "explicacao": "Valor = 50 + 12 × 5 = 50 + 60 = R$ 110,00.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M05-Q3",
    "materia": "Matemática",
    "assunto": "Equações e funções",
    "dificuldade": "media",
    "enunciado": "O dobro de um número, aumentado de 7, é igual ao triplo desse número, diminuído de 5. Qual é esse número?",
    "imagem": null,
    "alternativas": {
      "A": "9",
      "B": "12",
      "C": "14",
      "D": "−12",
      "E": "2"
    },
    "gabarito": "B",
    "explicacao": "2x + 7 = 3x − 5, então 7 + 5 = 3x − 2x, e x = 12.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M05-Q4",
    "materia": "Matemática",
    "assunto": "Equações e funções",
    "dificuldade": "media",
    "enunciado": "Em uma lanchonete, 2 sucos e 3 pastéis custam R$ 23,00, e 3 sucos e 1 pastel custam R$ 17,00. Qual é o preço de um pastel?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 3,00",
      "B": "R$ 4,00",
      "C": "R$ 5,00",
      "D": "R$ 6,00",
      "E": "R$ 7,00"
    },
    "gabarito": "C",
    "explicacao": "Da segunda: p = 17 − 3s. Na primeira: 2s + 3(17 − 3s) = 23, então 51 − 7s = 23 e s = 4. Logo p = 17 − 12 = 5.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M05-Q5",
    "materia": "Matemática",
    "assunto": "Equações e funções",
    "dificuldade": "dificil",
    "enunciado": "A área de um retângulo é 48 cm² e o comprimento é 2 cm maior que a largura. Qual é o perímetro desse retângulo?",
    "imagem": null,
    "alternativas": {
      "A": "14 cm",
      "B": "20 cm",
      "C": "24 cm",
      "D": "28 cm",
      "E": "48 cm"
    },
    "gabarito": "D",
    "explicacao": "Largura x e comprimento x + 2: x(x + 2) = 48, então x² + 2x − 48 = 0 e x = 6. Lados 6 e 8: perímetro 2 × (6 + 8) = 28 cm.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M06-Q1",
    "materia": "Matemática",
    "assunto": "Médias",
    "dificuldade": "facil",
    "enunciado": "As notas de Lia em quatro provas foram 6, 7, 8 e 9. Qual é a média aritmética dessas notas?",
    "imagem": null,
    "alternativas": {
      "A": "6,5",
      "B": "7,0",
      "C": "7,2",
      "D": "7,5",
      "E": "8,0"
    },
    "gabarito": "D",
    "explicacao": "Soma: 6 + 7 + 8 + 9 = 30. Média: 30 ÷ 4 = 7,5.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M06-Q2",
    "materia": "Matemática",
    "assunto": "Médias",
    "dificuldade": "facil",
    "enunciado": "A média aritmética de 5 números é 12. Qual é a soma desses 5 números?",
    "imagem": null,
    "alternativas": {
      "A": "12",
      "B": "60",
      "C": "17",
      "D": "65",
      "E": "72"
    },
    "gabarito": "B",
    "explicacao": "Média = soma ÷ quantidade, então soma = 12 × 5 = 60.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M06-Q3",
    "materia": "Matemática",
    "assunto": "Médias",
    "dificuldade": "media",
    "enunciado": "Em um concurso, a nota final é a média ponderada entre Português (peso 2) e Matemática (peso 3). Um candidato tirou 7,0 em Português e 8,0 em Matemática. Qual é a nota final dele?",
    "imagem": null,
    "alternativas": {
      "A": "7,0",
      "B": "7,4",
      "C": "7,5",
      "D": "8,0",
      "E": "7,6"
    },
    "gabarito": "E",
    "explicacao": "(7 × 2 + 8 × 3) ÷ (2 + 3) = (14 + 24) ÷ 5 = 38 ÷ 5 = 7,6.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M06-Q4",
    "materia": "Matemática",
    "assunto": "Médias",
    "dificuldade": "media",
    "enunciado": "A média das idades de 4 amigos é 20 anos. Quando um quinto amigo chega ao grupo, a média passa a ser 22 anos. Qual é a idade do quinto amigo?",
    "imagem": null,
    "alternativas": {
      "A": "30",
      "B": "22",
      "C": "24",
      "D": "42",
      "E": "26"
    },
    "gabarito": "A",
    "explicacao": "Soma inicial: 4 × 20 = 80. Soma nova: 5 × 22 = 110. O quinto amigo tem 110 − 80 = 30 anos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M06-Q5",
    "materia": "Matemática",
    "assunto": "Médias",
    "dificuldade": "dificil",
    "enunciado": "Em uma turma, 10 meninas têm média 8,0 em uma prova e 15 meninos têm média 6,0. Qual é a média da turma toda?",
    "imagem": null,
    "alternativas": {
      "A": "6,5",
      "B": "6,6",
      "C": "6,8",
      "D": "7,0",
      "E": "7,5"
    },
    "gabarito": "C",
    "explicacao": "Soma das meninas: 80. Soma dos meninos: 90. Média da turma: 170 ÷ 25 = 6,8. Note que não é a média simples (8 + 6) ÷ 2 = 7, porque há mais meninos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M07-Q1",
    "materia": "Matemática",
    "assunto": "Gráficos, tabelas e estatística",
    "dificuldade": "facil",
    "enunciado": "Uma tabela mostra os livros lidos por uma turma a cada mês: janeiro, 12; fevereiro, 15; março, 9; abril, 20. Quantos livros foram lidos ao todo nesses quatro meses?",
    "imagem": null,
    "alternativas": {
      "A": "46",
      "B": "54",
      "C": "56",
      "D": "60",
      "E": "65"
    },
    "gabarito": "C",
    "explicacao": "12 + 15 + 9 + 20 = 56 livros.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M07-Q2",
    "materia": "Matemática",
    "assunto": "Gráficos, tabelas e estatística",
    "dificuldade": "facil",
    "enunciado": "Um gráfico de barras mostra a fruta preferida de 60 alunos: banana, 18; maçã, 12; uva, 6; laranja, 24. Que porcentagem dos alunos prefere laranja?",
    "imagem": null,
    "alternativas": {
      "A": "24%",
      "B": "30%",
      "C": "20%",
      "D": "36%",
      "E": "40%"
    },
    "gabarito": "E",
    "explicacao": "24 de 60 alunos: 24 ÷ 60 = 0,4 = 40%. Cuidado: 24 é a quantidade de alunos, não a porcentagem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M07-Q3",
    "materia": "Matemática",
    "assunto": "Gráficos, tabelas e estatística",
    "dificuldade": "media",
    "enunciado": "Em cinco partidas de basquete, Pedro fez 8, 12, 10, 12 e 28 pontos. Qual é a mediana dos pontos dele?",
    "imagem": null,
    "alternativas": {
      "A": "8",
      "B": "10",
      "C": "14",
      "D": "12",
      "E": "28"
    },
    "gabarito": "D",
    "explicacao": "Colocando em ordem: 8, 10, 12, 12, 28. A mediana é o valor do meio: 12. (A média seria 14, mas ela é puxada pelo 28.)",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M07-Q4",
    "materia": "Matemática",
    "assunto": "Gráficos, tabelas e estatística",
    "dificuldade": "media",
    "enunciado": "As vendas de uma loja foram: janeiro, 40; fevereiro, 55; março, 50; abril, 70; maio, 95. Entre quais meses consecutivos houve o maior aumento nas vendas?",
    "imagem": null,
    "alternativas": {
      "A": "Janeiro para fevereiro",
      "B": "Abril para maio",
      "C": "Fevereiro para março",
      "D": "Março para abril",
      "E": "Janeiro para maio"
    },
    "gabarito": "B",
    "explicacao": "Aumentos: jan→fev, 15; fev→mar, −5 (queda); mar→abr, 20; abr→mai, 25. O maior foi de abril para maio.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M07-Q5",
    "materia": "Matemática",
    "assunto": "Gráficos, tabelas e estatística",
    "dificuldade": "dificil",
    "enunciado": "Foram entrevistados 200 alunos sobre o esporte preferido: 35% escolheram futebol, 25% vôlei e 15% natação. Os demais escolheram basquete. Quantos alunos escolheram basquete?",
    "imagem": null,
    "alternativas": {
      "A": "50",
      "B": "25",
      "C": "70",
      "D": "30",
      "E": "75"
    },
    "gabarito": "A",
    "explicacao": "35% + 25% + 15% = 75%. Sobram 25% para o basquete, e 25% de 200 = 50 alunos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M08-Q1",
    "materia": "Matemática",
    "assunto": "Probabilidade",
    "dificuldade": "facil",
    "enunciado": "Ao lançar um dado comum de 6 faces, qual é a probabilidade de sair um número maior que 4?",
    "imagem": null,
    "alternativas": {
      "A": "1/6",
      "B": "1/3",
      "C": "1/2",
      "D": "2/3",
      "E": "5/6"
    },
    "gabarito": "B",
    "explicacao": "Os números maiores que 4 são 5 e 6: 2 casos favoráveis em 6 possíveis. 2/6 = 1/3.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M08-Q2",
    "materia": "Matemática",
    "assunto": "Probabilidade",
    "dificuldade": "facil",
    "enunciado": "Uma urna tem 3 bolas vermelhas, 5 azuis e 2 verdes. Sorteando uma bola ao acaso, qual é a probabilidade de ela ser azul?",
    "imagem": null,
    "alternativas": {
      "A": "1/2",
      "B": "1/5",
      "C": "3/10",
      "D": "1/3",
      "E": "2/5"
    },
    "gabarito": "A",
    "explicacao": "São 5 bolas azuis em 10 no total: 5/10 = 1/2.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M08-Q3",
    "materia": "Matemática",
    "assunto": "Probabilidade",
    "dificuldade": "media",
    "enunciado": "Duas moedas são lançadas ao mesmo tempo. Qual é a probabilidade de sair pelo menos uma cara?",
    "imagem": null,
    "alternativas": {
      "A": "1/4",
      "B": "1/2",
      "C": "3/4",
      "D": "2/3",
      "E": "1"
    },
    "gabarito": "C",
    "explicacao": "Os resultados possíveis são CC, CK, KC e KK (4 casos). Só KK não tem cara, então 3 casos favoráveis: 3/4.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M08-Q4",
    "materia": "Matemática",
    "assunto": "Probabilidade",
    "dificuldade": "media",
    "enunciado": "Um número inteiro de 1 a 20 é sorteado ao acaso. Qual é a probabilidade de ele ser múltiplo de 3?",
    "imagem": null,
    "alternativas": {
      "A": "1/3",
      "B": "1/5",
      "C": "3/20",
      "D": "3/10",
      "E": "3/5"
    },
    "gabarito": "D",
    "explicacao": "Múltiplos de 3 até 20: 3, 6, 9, 12, 15 e 18, ou seja, 6 números. 6/20 = 3/10.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M08-Q5",
    "materia": "Matemática",
    "assunto": "Probabilidade",
    "dificuldade": "dificil",
    "enunciado": "Dois dados comuns são lançados ao mesmo tempo. Qual é a probabilidade de a soma das faces ser 7?",
    "imagem": null,
    "alternativas": {
      "A": "1/12",
      "B": "1/9",
      "C": "1/8",
      "D": "7/36",
      "E": "1/6"
    },
    "gabarito": "E",
    "explicacao": "Há 6 × 6 = 36 resultados. Somam 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), ou seja, 6 casos. 6/36 = 1/6.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M09-Q1",
    "materia": "Matemática",
    "assunto": "Contagem",
    "dificuldade": "facil",
    "enunciado": "Uma lanchonete oferece 3 tipos de pão e 4 tipos de recheio. Quantos sanduíches diferentes é possível montar com 1 pão e 1 recheio?",
    "imagem": null,
    "alternativas": {
      "A": "7",
      "B": "8",
      "C": "10",
      "D": "14",
      "E": "12"
    },
    "gabarito": "E",
    "explicacao": "Princípio multiplicativo: 3 × 4 = 12 sanduíches. (Somar daria 7, mas cada pão pode ser combinado com cada recheio.)",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M09-Q2",
    "materia": "Matemática",
    "assunto": "Contagem",
    "dificuldade": "facil",
    "enunciado": "Marcos tem 5 camisetas, 2 bermudas e 2 pares de tênis. De quantos modos diferentes ele pode se vestir usando 1 camiseta, 1 bermuda e 1 par de tênis?",
    "imagem": null,
    "alternativas": {
      "A": "9",
      "B": "10",
      "C": "15",
      "D": "20",
      "E": "25"
    },
    "gabarito": "D",
    "explicacao": "5 × 2 × 2 = 20 combinações.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M09-Q3",
    "materia": "Matemática",
    "assunto": "Contagem",
    "dificuldade": "media",
    "enunciado": "Em uma corrida com 6 atletas, sem empates, de quantos modos diferentes podem ser distribuídas as medalhas de ouro, prata e bronze?",
    "imagem": null,
    "alternativas": {
      "A": "20",
      "B": "120",
      "C": "216",
      "D": "720",
      "E": "18"
    },
    "gabarito": "B",
    "explicacao": "Ouro: 6 opções. Prata: 5 restantes. Bronze: 4 restantes. 6 × 5 × 4 = 120.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M09-Q4",
    "materia": "Matemática",
    "assunto": "Contagem",
    "dificuldade": "media",
    "enunciado": "Quantas senhas de 3 algarismos podem ser formadas usando os algarismos de 0 a 9, podendo repetir algarismos?",
    "imagem": null,
    "alternativas": {
      "A": "1.000",
      "B": "720",
      "C": "900",
      "D": "10.000",
      "E": "30"
    },
    "gabarito": "A",
    "explicacao": "Cada posição tem 10 opções: 10 × 10 × 10 = 1.000. (720 seria sem repetir algarismos.)",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M09-Q5",
    "materia": "Matemática",
    "assunto": "Contagem",
    "dificuldade": "dificil",
    "enunciado": "Quantos números pares de 3 algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4 e 5?",
    "imagem": null,
    "alternativas": {
      "A": "12",
      "B": "20",
      "C": "24",
      "D": "30",
      "E": "60"
    },
    "gabarito": "C",
    "explicacao": "O último algarismo deve ser par: 2 ou 4 (2 opções). O primeiro tem 4 opções restantes e o do meio 3. Total: 2 × 4 × 3 = 24.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M10-Q1",
    "materia": "Matemática",
    "assunto": "Potências e fatoração",
    "dificuldade": "facil",
    "enunciado": "Qual é o valor de 2⁵?",
    "imagem": null,
    "alternativas": {
      "A": "10",
      "B": "16",
      "C": "25",
      "D": "32",
      "E": "64"
    },
    "gabarito": "D",
    "explicacao": "2⁵ = 2 × 2 × 2 × 2 × 2 = 32. (O expoente diz quantas vezes multiplicar, e não é 2 × 5.)",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M10-Q2",
    "materia": "Matemática",
    "assunto": "Potências e fatoração",
    "dificuldade": "facil",
    "enunciado": "Qual é a fatoração do número 60 em fatores primos?",
    "imagem": null,
    "alternativas": {
      "A": "2 · 3 · 10",
      "B": "2³ · 3 · 5",
      "C": "2 · 5 · 6",
      "D": "3² · 5 · 2",
      "E": "2² · 3 · 5"
    },
    "gabarito": "E",
    "explicacao": "60 ÷ 2 = 30; 30 ÷ 2 = 15; 15 ÷ 3 = 5; 5 ÷ 5 = 1. Logo 60 = 2 · 2 · 3 · 5 = 2² · 3 · 5.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M10-Q3",
    "materia": "Matemática",
    "assunto": "Potências e fatoração",
    "dificuldade": "media",
    "enunciado": "Escrito em notação científica, o número 0,00045 fica:",
    "imagem": null,
    "alternativas": {
      "A": "4,5 × 10⁻⁴",
      "B": "4,5 × 10⁻³",
      "C": "4,5 × 10⁻⁵",
      "D": "4,5 × 10⁴",
      "E": "4,5 × 10³"
    },
    "gabarito": "A",
    "explicacao": "Para obter 4,5 a vírgula andou 4 casas para a direita, então o expoente é −4: 4,5 × 10⁻⁴.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M10-Q4",
    "materia": "Matemática",
    "assunto": "Potências e fatoração",
    "dificuldade": "media",
    "enunciado": "Qual é o valor da expressão (2³ × 2⁴) ÷ 2⁵?",
    "imagem": null,
    "alternativas": {
      "A": "2",
      "B": "8",
      "C": "4",
      "D": "16",
      "E": "32"
    },
    "gabarito": "C",
    "explicacao": "Na multiplicação somam-se os expoentes (3 + 4 = 7) e na divisão subtraem-se (7 − 5 = 2). Resultado: 2² = 4.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "M10-Q5",
    "materia": "Matemática",
    "assunto": "Potências e fatoração",
    "dificuldade": "dificil",
    "enunciado": "Qual é o valor da expressão 5² − 3 · 2³ + √81?",
    "imagem": null,
    "alternativas": {
      "A": "−5",
      "B": "10",
      "C": "19",
      "D": "34",
      "E": "58"
    },
    "gabarito": "B",
    "explicacao": "5² = 25; 3 · 2³ = 3 · 8 = 24; √81 = 9. Então 25 − 24 + 9 = 10.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P01-Q1",
    "materia": "Português",
    "assunto": "Figuras de linguagem",
    "dificuldade": "facil",
    "enunciado": "Em “Meu coração é um oceano de saudade”, qual figura de linguagem aparece?",
    "imagem": null,
    "alternativas": {
      "A": "Hipérbole",
      "B": "Metáfora",
      "C": "Ironia",
      "D": "Metonímia",
      "E": "Antítese"
    },
    "gabarito": "B",
    "explicacao": "Metáfora: compara o coração a um oceano sem usar “como”.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P01-Q2",
    "materia": "Português",
    "assunto": "Figuras de linguagem",
    "dificuldade": "facil",
    "enunciado": "Em “Já te avisei mil vezes!”, qual figura de linguagem foi usada?",
    "imagem": null,
    "alternativas": {
      "A": "Metáfora",
      "B": "Eufemismo",
      "C": "Antítese",
      "D": "Pleonasmo",
      "E": "Hipérbole"
    },
    "gabarito": "E",
    "explicacao": "Hipérbole é o exagero intencional para dar ênfase.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P01-Q3",
    "materia": "Português",
    "assunto": "Figuras de linguagem",
    "dificuldade": "media",
    "enunciado": "Em “O vento sussurrava pela janela”, o vento ganha uma ação humana. Essa figura é:",
    "imagem": null,
    "alternativas": {
      "A": "Metonímia",
      "B": "Comparação",
      "C": "Ironia",
      "D": "Personificação",
      "E": "Hipérbole"
    },
    "gabarito": "D",
    "explicacao": "Personificação (prosopopeia) atribui ações humanas a seres não humanos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P01-Q4",
    "materia": "Português",
    "assunto": "Figuras de linguagem",
    "dificuldade": "media",
    "enunciado": "Em “Li Machado de Assis nas férias”, o autor aparece no lugar da obra. Essa figura é:",
    "imagem": null,
    "alternativas": {
      "A": "Metáfora",
      "B": "Antítese",
      "C": "Metonímia",
      "D": "Catacrese",
      "E": "Pleonasmo"
    },
    "gabarito": "C",
    "explicacao": "Metonímia troca um termo por outro com relação de proximidade; aqui, o autor pela obra.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P01-Q5",
    "materia": "Português",
    "assunto": "Figuras de linguagem",
    "dificuldade": "dificil",
    "enunciado": "Que figura mistura sensações de sentidos diferentes, como em “uma voz doce”?",
    "imagem": null,
    "alternativas": {
      "A": "Sinestesia",
      "B": "Antítese",
      "C": "Metonímia",
      "D": "Hipérbole",
      "E": "Ironia"
    },
    "gabarito": "A",
    "explicacao": "“Voz” é audição e “doce” é paladar: a mistura de sentidos é a sinestesia.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P02-Q1",
    "materia": "Português",
    "assunto": "Sentido denotativo e conotativo",
    "dificuldade": "facil",
    "enunciado": "Em qual frase a palavra “ferro” está em sentido conotativo?",
    "imagem": null,
    "alternativas": {
      "A": "Ele tem vontade de ferro.",
      "B": "O portão é de ferro.",
      "C": "O ferro é um metal.",
      "D": "Comprei um ferro de passar.",
      "E": "O ferro enferrujou."
    },
    "gabarito": "A",
    "explicacao": "“Vontade de ferro” é figurado: quer dizer vontade muito firme.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P02-Q2",
    "materia": "Português",
    "assunto": "Sentido denotativo e conotativo",
    "dificuldade": "facil",
    "enunciado": "Em “Estou morrendo de fome”, o sentido é:",
    "imagem": null,
    "alternativas": {
      "A": "Denotativo",
      "B": "Científico",
      "C": "Formal",
      "D": "Técnico",
      "E": "Conotativo"
    },
    "gabarito": "E",
    "explicacao": "Ninguém está morrendo de verdade: é um exagero figurado, ou seja, conotativo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P02-Q3",
    "materia": "Português",
    "assunto": "Sentido denotativo e conotativo",
    "dificuldade": "media",
    "enunciado": "Qual frase está em sentido denotativo?",
    "imagem": null,
    "alternativas": {
      "A": "Ele é uma raposa nos negócios.",
      "B": "Ela tem um coração de ouro.",
      "C": "O coração bombeia sangue.",
      "D": "Meu pai é uma rocha.",
      "E": "O tempo voa."
    },
    "gabarito": "C",
    "explicacao": "Aqui “coração” é o órgão, em sentido literal (denotativo).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P02-Q4",
    "materia": "Português",
    "assunto": "Sentido denotativo e conotativo",
    "dificuldade": "media",
    "enunciado": "O que significa, em sentido figurado, “Ele jogou a toalha”?",
    "imagem": null,
    "alternativas": {
      "A": "Foi tomar banho",
      "B": "Secou o rosto",
      "C": "Limpou o chão",
      "D": "Desistiu",
      "E": "Ficou com calor"
    },
    "gabarito": "D",
    "explicacao": "A expressão vem do boxe e quer dizer desistir.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P02-Q5",
    "materia": "Português",
    "assunto": "Sentido denotativo e conotativo",
    "dificuldade": "dificil",
    "enunciado": "O sentido denotativo é aquele que:",
    "imagem": null,
    "alternativas": {
      "A": "É figurado e subjetivo",
      "B": "É literal, o de dicionário",
      "C": "Depende só do humor de quem fala",
      "D": "Só aparece em poemas",
      "E": "É sempre irônico"
    },
    "gabarito": "B",
    "explicacao": "Denotação é o sentido literal; conotação é o sentido figurado.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P03-Q1",
    "materia": "Português",
    "assunto": "Funções da linguagem",
    "dificuldade": "facil",
    "enunciado": "“Compre agora e ganhe desconto!” Qual função predomina?",
    "imagem": null,
    "alternativas": {
      "A": "Emotiva",
      "B": "Conativa",
      "C": "Referencial",
      "D": "Fática",
      "E": "Poética"
    },
    "gabarito": "B",
    "explicacao": "Tenta convencer o leitor a agir: função conativa (apelativa).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P03-Q2",
    "materia": "Português",
    "assunto": "Funções da linguagem",
    "dificuldade": "facil",
    "enunciado": "“Que saudade eu sinto de você!” Qual função predomina?",
    "imagem": null,
    "alternativas": {
      "A": "Conativa",
      "B": "Referencial",
      "C": "Emotiva",
      "D": "Fática",
      "E": "Metalinguística"
    },
    "gabarito": "C",
    "explicacao": "Expressa o sentimento de quem fala: função emotiva.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P03-Q3",
    "materia": "Português",
    "assunto": "Funções da linguagem",
    "dificuldade": "media",
    "enunciado": "Uma notícia que informa os fatos de forma objetiva usa predominantemente a função:",
    "imagem": null,
    "alternativas": {
      "A": "Referencial",
      "B": "Emotiva",
      "C": "Conativa",
      "D": "Fática",
      "E": "Poética"
    },
    "gabarito": "A",
    "explicacao": "Foca no assunto (referente) da mensagem: função referencial.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P03-Q4",
    "materia": "Português",
    "assunto": "Funções da linguagem",
    "dificuldade": "media",
    "enunciado": "“Alô? Está me ouvindo?” Qual função predomina?",
    "imagem": null,
    "alternativas": {
      "A": "Referencial",
      "B": "Emotiva",
      "C": "Conativa",
      "D": "Fática",
      "E": "Metalinguística"
    },
    "gabarito": "D",
    "explicacao": "Testa e mantém o canal de comunicação: função fática.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P03-Q5",
    "materia": "Português",
    "assunto": "Funções da linguagem",
    "dificuldade": "dificil",
    "enunciado": "“Substantivo é a palavra que nomeia seres.” Aqui a linguagem fala da própria linguagem. A função é:",
    "imagem": null,
    "alternativas": {
      "A": "Referencial",
      "B": "Poética",
      "C": "Fática",
      "D": "Conativa",
      "E": "Metalinguística"
    },
    "gabarito": "E",
    "explicacao": "Quando o código explica o próprio código, a função é metalinguística.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P04-Q1",
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "facil",
    "enunciado": "Complete: “Fui ___ escola ontem.”",
    "imagem": null,
    "alternativas": {
      "A": "a",
      "B": "as",
      "C": "à",
      "D": "á",
      "E": "há"
    },
    "gabarito": "C",
    "explicacao": "Há a preposição “a” (ir a) + o artigo “a” (a escola): à.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P04-Q2",
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "facil",
    "enunciado": "Complete: “Vou ___ pé até o parque.”",
    "imagem": null,
    "alternativas": {
      "A": "à",
      "B": "a",
      "C": "á",
      "D": "as",
      "E": "há"
    },
    "gabarito": "B",
    "explicacao": "“Pé” é masculino e não aceita artigo feminino, então não há crase.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P04-Q3",
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "media",
    "enunciado": "Complete: “Cheguei ___ 15 horas.”",
    "imagem": null,
    "alternativas": {
      "A": "as",
      "B": "a",
      "C": "à",
      "D": "às",
      "E": "há"
    },
    "gabarito": "D",
    "explicacao": "Há crase antes de indicação de hora: às 15 horas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P04-Q4",
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "media",
    "enunciado": "Qual frase está correta quanto ao uso da crase?",
    "imagem": null,
    "alternativas": {
      "A": "Referi-me a ela.",
      "B": "Referi-me à ela.",
      "C": "Referi-me á ela.",
      "D": "Referi-me há ela.",
      "E": "Referi-me às ela."
    },
    "gabarito": "A",
    "explicacao": "Antes de pronome pessoal não há artigo, então não há crase.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P04-Q5",
    "materia": "Português",
    "assunto": "Crase",
    "dificuldade": "dificil",
    "enunciado": "Em qual frase a crase está empregada corretamente?",
    "imagem": null,
    "alternativas": {
      "A": "Vou à Salvador.",
      "B": "Vou a Bahia.",
      "C": "Vou à pé.",
      "D": "Vou à ele.",
      "E": "Vou à Bahia."
    },
    "gabarito": "E",
    "explicacao": "“Bahia” aceita artigo (a Bahia), então há crase. “Salvador” não aceita artigo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P05-Q1",
    "materia": "Português",
    "assunto": "Acentuação gráfica",
    "dificuldade": "facil",
    "enunciado": "Qual palavra é proparoxítona?",
    "imagem": null,
    "alternativas": {
      "A": "café",
      "B": "amor",
      "C": "lâmpada",
      "D": "fácil",
      "E": "caju"
    },
    "gabarito": "C",
    "explicacao": "Lâm-pa-da: a sílaba mais forte é a antepenúltima. Toda proparoxítona leva acento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P05-Q2",
    "materia": "Português",
    "assunto": "Acentuação gráfica",
    "dificuldade": "facil",
    "enunciado": "Por que “também” leva acento?",
    "imagem": null,
    "alternativas": {
      "A": "É paroxítona terminada em “em”",
      "B": "É oxítona terminada em “em”",
      "C": "É proparoxítona",
      "D": "É monossílaba",
      "E": "Tem hiato"
    },
    "gabarito": "B",
    "explicacao": "Oxítonas terminadas em a, e, o, em e ens são acentuadas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P05-Q3",
    "materia": "Português",
    "assunto": "Acentuação gráfica",
    "dificuldade": "media",
    "enunciado": "Qual palavra recebe acento por ter hiato (i ou u tônicos)?",
    "imagem": null,
    "alternativas": {
      "A": "vaidade",
      "B": "coisa",
      "C": "cadeira",
      "D": "feira",
      "E": "saída"
    },
    "gabarito": "E",
    "explicacao": "Sa-í-da: o “i” tônico forma hiato com a vogal anterior.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P05-Q4",
    "materia": "Português",
    "assunto": "Acentuação gráfica",
    "dificuldade": "media",
    "enunciado": "Qual palavra NÃO deve ser acentuada?",
    "imagem": null,
    "alternativas": {
      "A": "cipó",
      "B": "fácil",
      "C": "ônibus",
      "D": "amor",
      "E": "bônus"
    },
    "gabarito": "D",
    "explicacao": "Amor é oxítona terminada em “r”, e essas não levam acento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P05-Q5",
    "materia": "Português",
    "assunto": "Acentuação gráfica",
    "dificuldade": "dificil",
    "enunciado": "Por que “água” leva acento?",
    "imagem": null,
    "alternativas": {
      "A": "É paroxítona terminada em ditongo",
      "B": "É oxítona terminada em “a”",
      "C": "É proparoxítona",
      "D": "É monossílaba tônica",
      "E": "Tem hiato"
    },
    "gabarito": "A",
    "explicacao": "Á-gua é paroxítona terminada em ditongo (-ua).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P06-Q1",
    "materia": "Português",
    "assunto": "Valor semântico das conjunções",
    "dificuldade": "facil",
    "enunciado": "Em “Estudou muito, mas não passou”, a palavra “mas” indica:",
    "imagem": null,
    "alternativas": {
      "A": "Oposição",
      "B": "Causa",
      "C": "Conclusão",
      "D": "Adição",
      "E": "Condição"
    },
    "gabarito": "A",
    "explicacao": "“Mas” é adversativa: liga ideias opostas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P06-Q2",
    "materia": "Português",
    "assunto": "Valor semântico das conjunções",
    "dificuldade": "facil",
    "enunciado": "Em “Cheguei atrasado porque choveu”, a palavra “porque” indica:",
    "imagem": null,
    "alternativas": {
      "A": "Oposição",
      "B": "Conclusão",
      "C": "Adição",
      "D": "Finalidade",
      "E": "Causa"
    },
    "gabarito": "E",
    "explicacao": "Introduz o motivo do atraso.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P06-Q3",
    "materia": "Português",
    "assunto": "Valor semântico das conjunções",
    "dificuldade": "media",
    "enunciado": "Em “Penso, logo existo”, a palavra “logo” indica:",
    "imagem": null,
    "alternativas": {
      "A": "Tempo",
      "B": "Causa",
      "C": "Oposição",
      "D": "Conclusão",
      "E": "Concessão"
    },
    "gabarito": "D",
    "explicacao": "Nesse caso “logo” é conjunção conclusiva, com sentido de “portanto”.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P06-Q4",
    "materia": "Português",
    "assunto": "Valor semântico das conjunções",
    "dificuldade": "media",
    "enunciado": "Em “Embora estivesse cansado, continuou”, a palavra “embora” indica:",
    "imagem": null,
    "alternativas": {
      "A": "Causa",
      "B": "Concessão",
      "C": "Condição",
      "D": "Finalidade",
      "E": "Tempo"
    },
    "gabarito": "B",
    "explicacao": "Mostra um obstáculo (cansaço) que não impediu o fato principal.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P06-Q5",
    "materia": "Português",
    "assunto": "Valor semântico das conjunções",
    "dificuldade": "dificil",
    "enunciado": "Em “Saiu para que ela descansasse”, a expressão “para que” indica:",
    "imagem": null,
    "alternativas": {
      "A": "Causa",
      "B": "Consequência",
      "C": "Finalidade",
      "D": "Concessão",
      "E": "Condição"
    },
    "gabarito": "C",
    "explicacao": "Indica o objetivo da ação: ela descansar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P07-Q1",
    "materia": "Português",
    "assunto": "Concordância verbal",
    "dificuldade": "facil",
    "enunciado": "Complete: “___ muitos alunos na sala.” (haver com sentido de existir)",
    "imagem": null,
    "alternativas": {
      "A": "Haviam",
      "B": "Houveram",
      "C": "Havemos",
      "D": "Havia",
      "E": "Haveriam"
    },
    "gabarito": "D",
    "explicacao": "Haver no sentido de existir é impessoal e fica no singular.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P07-Q2",
    "materia": "Português",
    "assunto": "Concordância verbal",
    "dificuldade": "facil",
    "enunciado": "Complete: “Eu e meus amigos ___ cedo.”",
    "imagem": null,
    "alternativas": {
      "A": "saímos",
      "B": "saí",
      "C": "saíram",
      "D": "saiu",
      "E": "saem"
    },
    "gabarito": "A",
    "explicacao": "Eu + eles = nós, então o verbo vai para a 1ª pessoa do plural.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P07-Q3",
    "materia": "Português",
    "assunto": "Concordância verbal",
    "dificuldade": "media",
    "enunciado": "Complete: “___ dois anos que moro aqui.”",
    "imagem": null,
    "alternativas": {
      "A": "Fazem",
      "B": "Faz",
      "C": "Fazemos",
      "D": "Fizeram",
      "E": "Faziam"
    },
    "gabarito": "B",
    "explicacao": "Fazer indicando tempo decorrido é impessoal e fica no singular.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P07-Q4",
    "materia": "Português",
    "assunto": "Concordância verbal",
    "dificuldade": "media",
    "enunciado": "Complete: “Os alunos que chegaram atrasados ___ em silêncio.”",
    "imagem": null,
    "alternativas": {
      "A": "entrou",
      "B": "entrei",
      "C": "entraremos",
      "D": "entrar",
      "E": "entraram"
    },
    "gabarito": "E",
    "explicacao": "O verbo concorda com o sujeito plural “os alunos”.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P07-Q5",
    "materia": "Português",
    "assunto": "Concordância verbal",
    "dificuldade": "dificil",
    "enunciado": "Qual frase está correta quanto à concordância verbal?",
    "imagem": null,
    "alternativas": {
      "A": "Aluga-se casas.",
      "B": "Alugamos-se casas.",
      "C": "Alugam-se casas.",
      "D": "Alugou-se casas.",
      "E": "Alugar-se casas."
    },
    "gabarito": "C",
    "explicacao": "Em “alugam-se casas”, “casas” é o sujeito (voz passiva sintética), então o verbo vai para o plural.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P08-Q1",
    "materia": "Português",
    "assunto": "Tipos de sujeito",
    "dificuldade": "facil",
    "enunciado": "Qual é o tipo de sujeito em “Choveu muito ontem”?",
    "imagem": null,
    "alternativas": {
      "A": "Simples",
      "B": "Composto",
      "C": "Oculto",
      "D": "Inexistente",
      "E": "Indeterminado"
    },
    "gabarito": "D",
    "explicacao": "Verbos de fenômeno da natureza não têm sujeito.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P08-Q2",
    "materia": "Português",
    "assunto": "Tipos de sujeito",
    "dificuldade": "facil",
    "enunciado": "Qual é o tipo de sujeito em “Os alunos saíram cedo”?",
    "imagem": null,
    "alternativas": {
      "A": "Composto",
      "B": "Simples",
      "C": "Oculto",
      "D": "Indeterminado",
      "E": "Inexistente"
    },
    "gabarito": "B",
    "explicacao": "Há um só núcleo: alunos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P08-Q3",
    "materia": "Português",
    "assunto": "Tipos de sujeito",
    "dificuldade": "media",
    "enunciado": "Qual é o tipo de sujeito em “Maria e João viajaram”?",
    "imagem": null,
    "alternativas": {
      "A": "Simples",
      "B": "Oculto",
      "C": "Indeterminado",
      "D": "Inexistente",
      "E": "Composto"
    },
    "gabarito": "E",
    "explicacao": "Há dois núcleos: Maria e João.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P08-Q4",
    "materia": "Português",
    "assunto": "Tipos de sujeito",
    "dificuldade": "media",
    "enunciado": "Qual é o tipo de sujeito em “Cheguei tarde”?",
    "imagem": null,
    "alternativas": {
      "A": "Oculto (eu)",
      "B": "Composto",
      "C": "Indeterminado",
      "D": "Inexistente",
      "E": "Oracional"
    },
    "gabarito": "A",
    "explicacao": "Não está escrito, mas a terminação do verbo mostra que é “eu”.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "P08-Q5",
    "materia": "Português",
    "assunto": "Tipos de sujeito",
    "dificuldade": "dificil",
    "enunciado": "Qual é o tipo de sujeito em “Bateram à porta”?",
    "imagem": null,
    "alternativas": {
      "A": "Simples",
      "B": "Composto",
      "C": "Indeterminado",
      "D": "Oculto",
      "E": "Inexistente"
    },
    "gabarito": "C",
    "explicacao": "Verbo na 3ª pessoa do plural, sem que se saiba quem bateu.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H01-Q1",
    "materia": "História",
    "assunto": "Capitanias Hereditárias e Governo-Geral",
    "dificuldade": "facil",
    "enunciado": "Em que ano começou a divisão do Brasil em capitanias hereditárias?",
    "imagem": null,
    "alternativas": {
      "A": "1500",
      "B": "1549",
      "C": "1822",
      "D": "1888",
      "E": "1534"
    },
    "gabarito": "E",
    "explicacao": "O sistema foi implantado a partir de 1534, no reinado de D. João III.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H01-Q2",
    "materia": "História",
    "assunto": "Capitanias Hereditárias e Governo-Geral",
    "dificuldade": "facil",
    "enunciado": "Quem administrava as capitanias hereditárias?",
    "imagem": null,
    "alternativas": {
      "A": "Os governadores-gerais",
      "B": "Os donatários",
      "C": "Os bandeirantes",
      "D": "Os jesuítas",
      "E": "Os vice-reis"
    },
    "gabarito": "B",
    "explicacao": "A Coroa doava as capitanias a donatários, que as administravam e exploravam.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H01-Q3",
    "materia": "História",
    "assunto": "Capitanias Hereditárias e Governo-Geral",
    "dificuldade": "media",
    "enunciado": "Duas capitanias que prosperaram foram:",
    "imagem": null,
    "alternativas": {
      "A": "Pernambuco e São Vicente",
      "B": "Bahia e Ceará",
      "C": "Pará e Maranhão",
      "D": "Minas e Goiás",
      "E": "Paraná e Santa Catarina"
    },
    "gabarito": "A",
    "explicacao": "Com a cana-de-açúcar, Pernambuco e São Vicente tiveram sucesso.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H01-Q4",
    "materia": "História",
    "assunto": "Capitanias Hereditárias e Governo-Geral",
    "dificuldade": "media",
    "enunciado": "Quem foi o primeiro governador-geral do Brasil?",
    "imagem": null,
    "alternativas": {
      "A": "Duarte Coelho",
      "B": "Martim Afonso de Sousa",
      "C": "Pedro Álvares Cabral",
      "D": "Tomé de Sousa",
      "E": "Mem de Sá"
    },
    "gabarito": "D",
    "explicacao": "Tomé de Sousa chegou em 1549 e fundou Salvador, a primeira capital.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H01-Q5",
    "materia": "História",
    "assunto": "Capitanias Hereditárias e Governo-Geral",
    "dificuldade": "dificil",
    "enunciado": "Por que a Coroa criou o Governo-Geral, em 1548?",
    "imagem": null,
    "alternativas": {
      "A": "Para proclamar a independência",
      "B": "Para abolir a escravidão",
      "C": "Para centralizar a administração, pois a maioria das capitanias fracassou",
      "D": "Para expulsar os holandeses",
      "E": "Para criar a República"
    },
    "gabarito": "C",
    "explicacao": "Muitas capitanias fracassaram, e a Coroa passou a ter um governo central na colônia.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H02-Q1",
    "materia": "História",
    "assunto": "Quilombo dos Palmares",
    "dificuldade": "facil",
    "enunciado": "Palmares foi um:",
    "imagem": null,
    "alternativas": {
      "A": "Engenho",
      "B": "Forte holandês",
      "C": "Aldeia jesuíta",
      "D": "Capitania",
      "E": "Quilombo"
    },
    "gabarito": "E",
    "explicacao": "Quilombo é uma comunidade de pessoas que fugiram da escravidão.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H02-Q2",
    "materia": "História",
    "assunto": "Quilombo dos Palmares",
    "dificuldade": "facil",
    "enunciado": "Qual foi o principal líder de Palmares?",
    "imagem": null,
    "alternativas": {
      "A": "Tiradentes",
      "B": "Dom Pedro I",
      "C": "Frei Caneca",
      "D": "Zumbi",
      "E": "José Bonifácio"
    },
    "gabarito": "D",
    "explicacao": "Zumbi é o líder mais conhecido; antes dele, Ganga Zumba.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H02-Q3",
    "materia": "História",
    "assunto": "Quilombo dos Palmares",
    "dificuldade": "media",
    "enunciado": "A Serra da Barriga, onde ficava Palmares, fica hoje em qual estado?",
    "imagem": null,
    "alternativas": {
      "A": "Bahia",
      "B": "Alagoas",
      "C": "Minas Gerais",
      "D": "Maranhão",
      "E": "Rio Grande do Sul"
    },
    "gabarito": "B",
    "explicacao": "Na época, a área pertencia à capitania de Pernambuco; hoje é Alagoas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H02-Q4",
    "materia": "História",
    "assunto": "Quilombo dos Palmares",
    "dificuldade": "media",
    "enunciado": "O Dia da Consciência Negra, 20 de novembro, lembra:",
    "imagem": null,
    "alternativas": {
      "A": "A Lei Áurea",
      "B": "A Independência do Brasil",
      "C": "A morte de Zumbi",
      "D": "A fundação de Salvador",
      "E": "A Proclamação da República"
    },
    "gabarito": "C",
    "explicacao": "Zumbi foi morto em 20 de novembro de 1695.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H02-Q5",
    "materia": "História",
    "assunto": "Quilombo dos Palmares",
    "dificuldade": "dificil",
    "enunciado": "Em que século Palmares foi destruído?",
    "imagem": null,
    "alternativas": {
      "A": "XVII",
      "B": "XVI",
      "C": "XVIII",
      "D": "XIX",
      "E": "XX"
    },
    "gabarito": "A",
    "explicacao": "A destruição ocorreu em 1694, no século XVII.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H03-Q1",
    "materia": "História",
    "assunto": "Conjuração Baiana",
    "dificuldade": "facil",
    "enunciado": "Em que ano ocorreu a Conjuração Baiana?",
    "imagem": null,
    "alternativas": {
      "A": "1789",
      "B": "1822",
      "C": "1835",
      "D": "1888",
      "E": "1798"
    },
    "gabarito": "E",
    "explicacao": "Ocorreu em 1798, em Salvador. A Inconfidência Mineira foi em 1789.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H03-Q2",
    "materia": "História",
    "assunto": "Conjuração Baiana",
    "dificuldade": "facil",
    "enunciado": "A Conjuração Baiana também é conhecida como:",
    "imagem": null,
    "alternativas": {
      "A": "Revolta dos Malês",
      "B": "Sabinada",
      "C": "Revolta dos Alfaiates",
      "D": "Cabanagem",
      "E": "Revolta da Vacina"
    },
    "gabarito": "C",
    "explicacao": "Muitos envolvidos eram alfaiates, por isso o nome.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H03-Q3",
    "materia": "História",
    "assunto": "Conjuração Baiana",
    "dificuldade": "media",
    "enunciado": "Qual era uma das reivindicações do movimento?",
    "imagem": null,
    "alternativas": {
      "A": "Volta da monarquia",
      "B": "Fim da escravidão",
      "C": "Aumento de impostos",
      "D": "Fim do voto",
      "E": "Proibição do comércio"
    },
    "gabarito": "B",
    "explicacao": "O movimento pedia o fim da escravidão, uma república e igualdade entre as pessoas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H03-Q4",
    "materia": "História",
    "assunto": "Conjuração Baiana",
    "dificuldade": "media",
    "enunciado": "Quem participou da Conjuração Baiana?",
    "imagem": null,
    "alternativas": {
      "A": "Pessoas das camadas populares",
      "B": "Só a elite mineira",
      "C": "Só nobres portugueses",
      "D": "Só jesuítas",
      "E": "Só donos de engenhos"
    },
    "gabarito": "A",
    "explicacao": "Participaram alfaiates, soldados, artesãos, libertos e escravizados.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H03-Q5",
    "materia": "História",
    "assunto": "Conjuração Baiana",
    "dificuldade": "dificil",
    "enunciado": "Comparada à Inconfidência Mineira, a Conjuração Baiana teve caráter mais:",
    "imagem": null,
    "alternativas": {
      "A": "Elitista",
      "B": "Religioso",
      "C": "Estrangeiro",
      "D": "Popular",
      "E": "Monárquico"
    },
    "gabarito": "D",
    "explicacao": "A mineira foi liderada pela elite; a baiana teve forte participação popular.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H04-Q1",
    "materia": "História",
    "assunto": "Abolição da escravidão",
    "dificuldade": "facil",
    "enunciado": "Em que data foi assinada a Lei Áurea?",
    "imagem": null,
    "alternativas": {
      "A": "7 de setembro de 1822",
      "B": "15 de novembro de 1889",
      "C": "20 de novembro de 1695",
      "D": "28 de setembro de 1871",
      "E": "13 de maio de 1888"
    },
    "gabarito": "E",
    "explicacao": "A Lei Áurea aboliu a escravidão no Brasil em 13 de maio de 1888.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H04-Q2",
    "materia": "História",
    "assunto": "Abolição da escravidão",
    "dificuldade": "facil",
    "enunciado": "Quem assinou a Lei Áurea?",
    "imagem": null,
    "alternativas": {
      "A": "D. Pedro II",
      "B": "A princesa Isabel",
      "C": "D. Pedro I",
      "D": "Marechal Deodoro",
      "E": "Getúlio Vargas"
    },
    "gabarito": "B",
    "explicacao": "A princesa Isabel era a regente, pois D. Pedro II estava na Europa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H04-Q3",
    "materia": "História",
    "assunto": "Abolição da escravidão",
    "dificuldade": "media",
    "enunciado": "O que determinava a Lei do Ventre Livre (1871)?",
    "imagem": null,
    "alternativas": {
      "A": "Todos os escravizados seriam libertados",
      "B": "O tráfico negreiro seria proibido",
      "C": "Filhos de escravizadas nasceriam livres",
      "D": "Escravizados com 60 anos seriam livres",
      "E": "Os libertos receberiam terras"
    },
    "gabarito": "C",
    "explicacao": "A lei libertava os filhos de mulheres escravizadas nascidos a partir dela.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H04-Q4",
    "materia": "História",
    "assunto": "Abolição da escravidão",
    "dificuldade": "media",
    "enunciado": "A Lei Eusébio de Queirós (1850) proibiu:",
    "imagem": null,
    "alternativas": {
      "A": "A escravidão",
      "B": "A imigração europeia",
      "C": "A produção de café",
      "D": "O tráfico de africanos escravizados",
      "E": "O voto dos analfabetos"
    },
    "gabarito": "D",
    "explicacao": "Ela acabou com a entrada de novos africanos escravizados, mas não com a escravidão.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H04-Q5",
    "materia": "História",
    "assunto": "Abolição da escravidão",
    "dificuldade": "dificil",
    "enunciado": "Um grande problema dos libertos depois da abolição foi:",
    "imagem": null,
    "alternativas": {
      "A": "A falta de terra, trabalho e educação",
      "B": "Receber terras e indenização do governo",
      "C": "Serem integrados de imediato ao mercado de trabalho",
      "D": "Ganhar cargos públicos",
      "E": "Receber moradia do Império"
    },
    "gabarito": "A",
    "explicacao": "A lei não garantiu terra, emprego ou escola, o que manteve a exclusão da população negra.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H05-Q1",
    "materia": "História",
    "assunto": "República Velha",
    "dificuldade": "facil",
    "enunciado": "Em que ano foi proclamada a República no Brasil?",
    "imagem": null,
    "alternativas": {
      "A": "1889",
      "B": "1822",
      "C": "1888",
      "D": "1930",
      "E": "1964"
    },
    "gabarito": "A",
    "explicacao": "A República foi proclamada em 15 de novembro de 1889.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H05-Q2",
    "materia": "História",
    "assunto": "República Velha",
    "dificuldade": "facil",
    "enunciado": "Quem foi o primeiro presidente do Brasil?",
    "imagem": null,
    "alternativas": {
      "A": "Getúlio Vargas",
      "B": "Prudente de Morais",
      "C": "Campos Sales",
      "D": "Juscelino Kubitschek",
      "E": "Deodoro da Fonseca"
    },
    "gabarito": "E",
    "explicacao": "Deodoro da Fonseca, marechal do Exército, assumiu em 1889.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H05-Q3",
    "materia": "História",
    "assunto": "República Velha",
    "dificuldade": "media",
    "enunciado": "O coronelismo era:",
    "imagem": null,
    "alternativas": {
      "A": "Um regime militar nacional",
      "B": "O poder político local de grandes fazendeiros, os coronéis",
      "C": "Um tipo de partido operário",
      "D": "O governo dos vice-reis",
      "E": "Um sistema de voto feminino"
    },
    "gabarito": "B",
    "explicacao": "Os coronéis controlavam a política e os votos em suas regiões.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H05-Q4",
    "materia": "História",
    "assunto": "República Velha",
    "dificuldade": "media",
    "enunciado": "O que era o voto de cabresto?",
    "imagem": null,
    "alternativas": {
      "A": "O voto secreto e livre",
      "B": "O voto das mulheres",
      "C": "O voto controlado pelos coronéis",
      "D": "O voto feito por correspondência",
      "E": "O voto dos militares"
    },
    "gabarito": "C",
    "explicacao": "O eleitor era pressionado a votar no candidato do coronel.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H05-Q5",
    "materia": "História",
    "assunto": "República Velha",
    "dificuldade": "dificil",
    "enunciado": "O que foi a política do café com leite?",
    "imagem": null,
    "alternativas": {
      "A": "Alternância entre Bahia e Pernambuco",
      "B": "Divisão do comércio de leite",
      "C": "Aliança entre Rio e Bahia",
      "D": "Alternância de presidentes entre São Paulo e Minas Gerais",
      "E": "Acordo comercial com a Inglaterra"
    },
    "gabarito": "D",
    "explicacao": "As elites de São Paulo (café) e Minas (leite) se revezavam na Presidência.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H06-Q1",
    "materia": "História",
    "assunto": "Era Vargas",
    "dificuldade": "facil",
    "enunciado": "A Era Vargas durou:",
    "imagem": null,
    "alternativas": {
      "A": "De 1889 a 1930",
      "B": "De 1930 a 1945",
      "C": "De 1945 a 1964",
      "D": "De 1964 a 1985",
      "E": "De 1985 a 1990"
    },
    "gabarito": "B",
    "explicacao": "Vargas governou de 1930 a 1945.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H06-Q2",
    "materia": "História",
    "assunto": "Era Vargas",
    "dificuldade": "facil",
    "enunciado": "Em que ano foi criada a CLT, a Consolidação das Leis do Trabalho?",
    "imagem": null,
    "alternativas": {
      "A": "1888",
      "B": "1922",
      "C": "1964",
      "D": "1943",
      "E": "1988"
    },
    "gabarito": "D",
    "explicacao": "A CLT reuniu as leis trabalhistas em 1943.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H06-Q3",
    "materia": "História",
    "assunto": "Era Vargas",
    "dificuldade": "media",
    "enunciado": "O Estado Novo (1937) foi:",
    "imagem": null,
    "alternativas": {
      "A": "Uma monarquia",
      "B": "Uma democracia plena",
      "C": "Uma ditadura, com censura e Congresso fechado",
      "D": "Um regime parlamentarista",
      "E": "Uma república federativa sem censura"
    },
    "gabarito": "C",
    "explicacao": "Vargas fechou o Congresso e governou de forma autoritária até 1945.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H06-Q4",
    "materia": "História",
    "assunto": "Era Vargas",
    "dificuldade": "media",
    "enunciado": "Em que ano as mulheres conquistaram o direito ao voto no Brasil?",
    "imagem": null,
    "alternativas": {
      "A": "1932",
      "B": "1822",
      "C": "1889",
      "D": "1964",
      "E": "1988"
    },
    "gabarito": "A",
    "explicacao": "O Código Eleitoral de 1932 garantiu o voto feminino.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H06-Q5",
    "materia": "História",
    "assunto": "Era Vargas",
    "dificuldade": "dificil",
    "enunciado": "O DIP, criado no Estado Novo, servia para:",
    "imagem": null,
    "alternativas": {
      "A": "Construir estradas",
      "B": "Vacinar a população",
      "C": "Fiscalizar eleições",
      "D": "Controlar preços",
      "E": "Fazer propaganda do governo e censurar"
    },
    "gabarito": "E",
    "explicacao": "O Departamento de Imprensa e Propaganda divulgava o governo e censurava a imprensa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H07-Q1",
    "materia": "História",
    "assunto": "Ditadura Militar",
    "dificuldade": "facil",
    "enunciado": "A ditadura militar no Brasil durou:",
    "imagem": null,
    "alternativas": {
      "A": "De 1930 a 1945",
      "B": "De 1945 a 1964",
      "C": "De 1985 a 2000",
      "D": "De 1889 a 1930",
      "E": "De 1964 a 1985"
    },
    "gabarito": "E",
    "explicacao": "Começou com o golpe de 1964 e terminou em 1985.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H07-Q2",
    "materia": "História",
    "assunto": "Ditadura Militar",
    "dificuldade": "facil",
    "enunciado": "O golpe de 1964 derrubou o presidente:",
    "imagem": null,
    "alternativas": {
      "A": "Juscelino Kubitschek",
      "B": "Getúlio Vargas",
      "C": "Jânio Quadros",
      "D": "João Goulart",
      "E": "Tancredo Neves"
    },
    "gabarito": "D",
    "explicacao": "João Goulart (Jango) foi deposto em 31 de março de 1964.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H07-Q3",
    "materia": "História",
    "assunto": "Ditadura Militar",
    "dificuldade": "media",
    "enunciado": "O que foi o AI-5, de 1968?",
    "imagem": null,
    "alternativas": {
      "A": "Uma lei que criou a CLT",
      "B": "A Lei da Anistia",
      "C": "Um ato que ampliou a repressão e a censura",
      "D": "A Constituição de 1988",
      "E": "Um plano econômico"
    },
    "gabarito": "C",
    "explicacao": "O AI-5 fechou o Congresso e deu poderes quase ilimitados ao governo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H07-Q4",
    "materia": "História",
    "assunto": "Ditadura Militar",
    "dificuldade": "media",
    "enunciado": "A Lei da Anistia, de 1979, permitiu:",
    "imagem": null,
    "alternativas": {
      "A": "A volta dos exilados políticos",
      "B": "Eleições diretas imediatas",
      "C": "O fim imediato da ditadura",
      "D": "A criação da CLT",
      "E": "A volta da monarquia"
    },
    "gabarito": "A",
    "explicacao": "A anistia perdoou crimes políticos e permitiu o retorno de exilados.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "H07-Q5",
    "materia": "História",
    "assunto": "Ditadura Militar",
    "dificuldade": "dificil",
    "enunciado": "O que pedia o movimento Diretas Já (1983–84)?",
    "imagem": null,
    "alternativas": {
      "A": "A volta da monarquia",
      "B": "Eleições diretas para presidente",
      "C": "O fim do voto",
      "D": "Reforma agrária imediata",
      "E": "A saída do Brasil do Mercosul"
    },
    "gabarito": "B",
    "explicacao": "A campanha pedia voto direto para presidente; a emenda foi rejeitada no Congresso.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G01-Q1",
    "materia": "Geografia",
    "assunto": "Biomas brasileiros",
    "dificuldade": "facil",
    "enunciado": "Qual é o maior bioma brasileiro?",
    "imagem": null,
    "alternativas": {
      "A": "Cerrado",
      "B": "Mata Atlântica",
      "C": "Amazônia",
      "D": "Caatinga",
      "E": "Pampa"
    },
    "gabarito": "C",
    "explicacao": "A Amazônia ocupa cerca de 49% do território brasileiro.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G01-Q2",
    "materia": "Geografia",
    "assunto": "Biomas brasileiros",
    "dificuldade": "facil",
    "enunciado": "Qual bioma é exclusivamente brasileiro e predomina no semiárido nordestino?",
    "imagem": null,
    "alternativas": {
      "A": "Caatinga",
      "B": "Cerrado",
      "C": "Pampa",
      "D": "Pantanal",
      "E": "Mata Atlântica"
    },
    "gabarito": "A",
    "explicacao": "A Caatinga só existe no Brasil e tem clima semiárido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G01-Q3",
    "materia": "Geografia",
    "assunto": "Biomas brasileiros",
    "dificuldade": "media",
    "enunciado": "Qual bioma é chamado de “berço das águas”?",
    "imagem": null,
    "alternativas": {
      "A": "Pampa",
      "B": "Cerrado",
      "C": "Pantanal",
      "D": "Caatinga",
      "E": "Mata Atlântica"
    },
    "gabarito": "B",
    "explicacao": "No Cerrado nascem rios de grandes bacias hidrográficas do país.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G01-Q4",
    "materia": "Geografia",
    "assunto": "Biomas brasileiros",
    "dificuldade": "media",
    "enunciado": "Qual bioma é uma grande planície inundável?",
    "imagem": null,
    "alternativas": {
      "A": "Cerrado",
      "B": "Amazônia",
      "C": "Caatinga",
      "D": "Pantanal",
      "E": "Pampa"
    },
    "gabarito": "D",
    "explicacao": "O Pantanal alaga no período das chuvas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G01-Q5",
    "materia": "Geografia",
    "assunto": "Biomas brasileiros",
    "dificuldade": "dificil",
    "enunciado": "Qual bioma mais perdeu área original ao longo do litoral brasileiro?",
    "imagem": null,
    "alternativas": {
      "A": "Amazônia",
      "B": "Caatinga",
      "C": "Pampa",
      "D": "Pantanal",
      "E": "Mata Atlântica"
    },
    "gabarito": "E",
    "explicacao": "Restam poucas áreas de Mata Atlântica, onde estão a maioria das grandes cidades.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G02-Q1",
    "materia": "Geografia",
    "assunto": "Massas de ar",
    "dificuldade": "facil",
    "enunciado": "Qual massa de ar fria provoca queda de temperatura no Sul e no Sudeste no inverno?",
    "imagem": null,
    "alternativas": {
      "A": "Massa Equatorial Continental",
      "B": "Massa Tropical Continental",
      "C": "Massa Polar Atlântica",
      "D": "Massa Equatorial Atlântica",
      "E": "Massa Tropical Atlântica"
    },
    "gabarito": "C",
    "explicacao": "A Polar Atlântica traz frio e chuva quando chega com as frentes frias.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G02-Q2",
    "materia": "Geografia",
    "assunto": "Massas de ar",
    "dificuldade": "facil",
    "enunciado": "A Massa Equatorial Continental, formada na Amazônia, é:",
    "imagem": null,
    "alternativas": {
      "A": "Fria e seca",
      "B": "Fria e úmida",
      "C": "Quente e seca",
      "D": "Gelada e seca",
      "E": "Quente e úmida"
    },
    "gabarito": "E",
    "explicacao": "Origina-se numa região quente e cheia de floresta e rios.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G02-Q3",
    "materia": "Geografia",
    "assunto": "Massas de ar",
    "dificuldade": "media",
    "enunciado": "A Massa Tropical Continental, formada no interior da América do Sul, é:",
    "imagem": null,
    "alternativas": {
      "A": "Quente e seca",
      "B": "Quente e úmida",
      "C": "Fria e úmida",
      "D": "Fria e seca",
      "E": "Gelada e úmida"
    },
    "gabarito": "A",
    "explicacao": "Forma-se no interior do continente, longe do mar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G02-Q4",
    "materia": "Geografia",
    "assunto": "Massas de ar",
    "dificuldade": "media",
    "enunciado": "Uma frente fria é o encontro entre:",
    "imagem": null,
    "alternativas": {
      "A": "Duas massas quentes",
      "B": "Uma massa de ar fria e uma massa de ar quente",
      "C": "Duas massas secas",
      "D": "O ar e a água",
      "E": "O vento e a chuva"
    },
    "gabarito": "B",
    "explicacao": "O ar frio avança e empurra o ar quente, o que costuma trazer chuva.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G02-Q5",
    "materia": "Geografia",
    "assunto": "Massas de ar",
    "dificuldade": "dificil",
    "enunciado": "A Massa Tropical Atlântica atua principalmente:",
    "imagem": null,
    "alternativas": {
      "A": "Na Amazônia",
      "B": "Só no Sul",
      "C": "Só no Centro-Oeste",
      "D": "No litoral",
      "E": "No semiárido apenas"
    },
    "gabarito": "D",
    "explicacao": "Forma-se sobre o Atlântico e é quente e úmida.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G03-Q1",
    "materia": "Geografia",
    "assunto": "Formação e conservação dos solos",
    "dificuldade": "facil",
    "enunciado": "Qual destes NÃO é um fator de formação do solo?",
    "imagem": null,
    "alternativas": {
      "A": "Densidade populacional",
      "B": "Clima",
      "C": "Relevo",
      "D": "Tempo",
      "E": "Material de origem"
    },
    "gabarito": "A",
    "explicacao": "Os fatores são clima, relevo, organismos, material de origem e tempo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G03-Q2",
    "materia": "Geografia",
    "assunto": "Formação e conservação dos solos",
    "dificuldade": "facil",
    "enunciado": "O que é intemperismo?",
    "imagem": null,
    "alternativas": {
      "A": "A formação de vulcões",
      "B": "A desagregação e decomposição das rochas",
      "C": "O movimento das placas",
      "D": "A construção de barragens",
      "E": "A queima da vegetação"
    },
    "gabarito": "B",
    "explicacao": "É a ação do clima, da água e dos seres vivos que quebra as rochas e forma solo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G03-Q3",
    "materia": "Geografia",
    "assunto": "Formação e conservação dos solos",
    "dificuldade": "media",
    "enunciado": "O que acelera a erosão do solo?",
    "imagem": null,
    "alternativas": {
      "A": "O plantio de árvores",
      "B": "As curvas de nível",
      "C": "O terraceamento",
      "D": "A mata ciliar",
      "E": "A retirada da vegetação"
    },
    "gabarito": "E",
    "explicacao": "Sem raízes e cobertura vegetal, a chuva carrega o solo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G03-Q4",
    "materia": "Geografia",
    "assunto": "Formação e conservação dos solos",
    "dificuldade": "media",
    "enunciado": "Qual prática ajuda a conservar o solo?",
    "imagem": null,
    "alternativas": {
      "A": "Queimadas",
      "B": "Desmatamento",
      "C": "Curvas de nível",
      "D": "Deixar o solo exposto",
      "E": "Plantar sempre no sentido da descida"
    },
    "gabarito": "C",
    "explicacao": "Plantar acompanhando as curvas do terreno reduz a velocidade da água.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G03-Q5",
    "materia": "Geografia",
    "assunto": "Formação e conservação dos solos",
    "dificuldade": "dificil",
    "enunciado": "A terra roxa é muito fértil porque se origina de:",
    "imagem": null,
    "alternativas": {
      "A": "Granito",
      "B": "Areia",
      "C": "Calcário",
      "D": "Rochas basálticas",
      "E": "Arenito"
    },
    "gabarito": "D",
    "explicacao": "Rochas basálticas decompostas geram solos ricos em nutrientes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G04-Q1",
    "materia": "Geografia",
    "assunto": "População e transição demográfica",
    "dificuldade": "facil",
    "enunciado": "O crescimento vegetativo é calculado por:",
    "imagem": null,
    "alternativas": {
      "A": "Natalidade menos mortalidade",
      "B": "Natalidade mais mortalidade",
      "C": "Migração menos natalidade",
      "D": "Mortalidade menos migração",
      "E": "Fecundidade vezes mortalidade"
    },
    "gabarito": "A",
    "explicacao": "Crescimento vegetativo = natalidade − mortalidade.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G04-Q2",
    "materia": "Geografia",
    "assunto": "População e transição demográfica",
    "dificuldade": "facil",
    "enunciado": "Se a natalidade é 20‰ e a mortalidade é 8‰, o crescimento vegetativo é:",
    "imagem": null,
    "alternativas": {
      "A": "28‰",
      "B": "8‰",
      "C": "160‰",
      "D": "2,5‰",
      "E": "12‰"
    },
    "gabarito": "E",
    "explicacao": "20 − 8 = 12 por mil.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G04-Q3",
    "materia": "Geografia",
    "assunto": "População e transição demográfica",
    "dificuldade": "media",
    "enunciado": "O bônus demográfico ocorre quando:",
    "imagem": null,
    "alternativas": {
      "A": "Há mais idosos que adultos",
      "B": "A população em idade ativa é maior que a de dependentes",
      "C": "Há mais crianças que adultos",
      "D": "A população diminui",
      "E": "A natalidade aumenta sem parar"
    },
    "gabarito": "B",
    "explicacao": "Há mais gente trabalhando do que dependentes (crianças e idosos).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G04-Q4",
    "materia": "Geografia",
    "assunto": "População e transição demográfica",
    "dificuldade": "media",
    "enunciado": "Na transição demográfica, qual taxa costuma cair primeiro?",
    "imagem": null,
    "alternativas": {
      "A": "A natalidade",
      "B": "As duas ao mesmo tempo",
      "C": "Nenhuma delas",
      "D": "A mortalidade",
      "E": "A expectativa de vida"
    },
    "gabarito": "D",
    "explicacao": "Com saneamento e medicina, a mortalidade cai antes; a natalidade cai depois.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G04-Q5",
    "materia": "Geografia",
    "assunto": "População e transição demográfica",
    "dificuldade": "dificil",
    "enunciado": "Uma pirâmide etária com base larga indica:",
    "imagem": null,
    "alternativas": {
      "A": "Muitos idosos",
      "B": "População estável",
      "C": "Muitos jovens e alta natalidade",
      "D": "Baixa natalidade",
      "E": "Alta expectativa de vida"
    },
    "gabarito": "C",
    "explicacao": "Base larga significa grande proporção de crianças e jovens.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G05-Q1",
    "materia": "Geografia",
    "assunto": "Questão agrária e reforma agrária",
    "dificuldade": "facil",
    "enunciado": "Reforma agrária é:",
    "imagem": null,
    "alternativas": {
      "A": "A venda de terras a estrangeiros",
      "B": "A construção de rodovias",
      "C": "A criação de cidades",
      "D": "A redistribuição de terras",
      "E": "A proibição de plantar"
    },
    "gabarito": "D",
    "explicacao": "Busca reduzir a concentração de terras e dar acesso a quem quer produzir.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G05-Q2",
    "materia": "Geografia",
    "assunto": "Questão agrária e reforma agrária",
    "dificuldade": "facil",
    "enunciado": "Uma grande propriedade rural, muitas vezes pouco aproveitada, é chamada de:",
    "imagem": null,
    "alternativas": {
      "A": "Latifúndio",
      "B": "Minifúndio",
      "C": "Quilombo",
      "D": "Cooperativa",
      "E": "Assentamento"
    },
    "gabarito": "A",
    "explicacao": "Latifúndio é a grande propriedade; minifúndio é a muito pequena.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G05-Q3",
    "materia": "Geografia",
    "assunto": "Questão agrária e reforma agrária",
    "dificuldade": "media",
    "enunciado": "O que significa a sigla MST?",
    "imagem": null,
    "alternativas": {
      "A": "Movimento Social de Terras",
      "B": "Ministério da Segurança do Território",
      "C": "Movimento Sul de Trabalho",
      "D": "Missão Social Tecnológica",
      "E": "Movimento dos Trabalhadores Rurais Sem Terra"
    },
    "gabarito": "E",
    "explicacao": "É um movimento social que luta pela reforma agrária.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G05-Q4",
    "materia": "Geografia",
    "assunto": "Questão agrária e reforma agrária",
    "dificuldade": "media",
    "enunciado": "Qual conceito diz que a terra deve ser produtiva, preservar o ambiente e respeitar as leis trabalhistas?",
    "imagem": null,
    "alternativas": {
      "A": "Latifúndio",
      "B": "Êxodo rural",
      "C": "Função social da propriedade",
      "D": "Grilagem",
      "E": "Revolução Verde"
    },
    "gabarito": "C",
    "explicacao": "É um princípio da Constituição que condiciona o direito de propriedade rural.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G05-Q5",
    "materia": "Geografia",
    "assunto": "Questão agrária e reforma agrária",
    "dificuldade": "dificil",
    "enunciado": "A Revolução Verde foi:",
    "imagem": null,
    "alternativas": {
      "A": "Um movimento ambientalista",
      "B": "A modernização agrícola com máquinas, fertilizantes e sementes melhoradas",
      "C": "A volta à agricultura de subsistência",
      "D": "A criação de reservas indígenas",
      "E": "A proibição de agrotóxicos"
    },
    "gabarito": "B",
    "explicacao": "Aumentou a produção, mas também a concentração de terras e os impactos ambientais.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G06-Q1",
    "materia": "Geografia",
    "assunto": "Urbanização e conurbação",
    "dificuldade": "facil",
    "enunciado": "O que é conurbação?",
    "imagem": null,
    "alternativas": {
      "A": "A fuga do campo para a cidade",
      "B": "A construção de uma cidade planejada",
      "C": "O isolamento de uma cidade",
      "D": "A divisão de um município em dois",
      "E": "A junção das áreas urbanas de cidades vizinhas"
    },
    "gabarito": "E",
    "explicacao": "As cidades crescem até se encontrar e formam uma só mancha urbana.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G06-Q2",
    "materia": "Geografia",
    "assunto": "Urbanização e conurbação",
    "dificuldade": "facil",
    "enunciado": "O que é uma região metropolitana?",
    "imagem": null,
    "alternativas": {
      "A": "Uma cidade com mais de 1 milhão de habitantes",
      "B": "Uma área rural protegida",
      "C": "Um bairro de luxo",
      "D": "Um conjunto de municípios integrados em torno de uma metrópole",
      "E": "Um porto internacional"
    },
    "gabarito": "D",
    "explicacao": "Os municípios compartilham serviços e problemas, como transporte e saneamento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G06-Q3",
    "materia": "Geografia",
    "assunto": "Urbanização e conurbação",
    "dificuldade": "media",
    "enunciado": "O que é uma megalópole?",
    "imagem": null,
    "alternativas": {
      "A": "Uma cidade rural",
      "B": "Uma cidade pequena e antiga",
      "C": "A junção de várias metrópoles e regiões metropolitanas",
      "D": "Uma capital de estado",
      "E": "Uma área industrial isolada"
    },
    "gabarito": "C",
    "explicacao": "Ocorre quando grandes metrópoles se encontram, formando uma enorme área urbana.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G06-Q4",
    "materia": "Geografia",
    "assunto": "Urbanização e conurbação",
    "dificuldade": "media",
    "enunciado": "Qual destes é um problema comum nas grandes cidades?",
    "imagem": null,
    "alternativas": {
      "A": "Excesso de áreas verdes",
      "B": "Déficit de moradia e trânsito intenso",
      "C": "Falta de gente",
      "D": "Ausência de comércio",
      "E": "Silêncio constante"
    },
    "gabarito": "B",
    "explicacao": "O crescimento rápido costuma superar a oferta de moradia, transporte e saneamento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G06-Q5",
    "materia": "Geografia",
    "assunto": "Urbanização e conurbação",
    "dificuldade": "dificil",
    "enunciado": "Salvador e Lauro de Freitas, quase sem separação urbana, ilustram:",
    "imagem": null,
    "alternativas": {
      "A": "Conurbação",
      "B": "Êxodo rural",
      "C": "Revolução Verde",
      "D": "Latifúndio",
      "E": "Desmatamento"
    },
    "gabarito": "A",
    "explicacao": "As áreas urbanas dos dois municípios se encontram.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G07-Q1",
    "materia": "Geografia",
    "assunto": "Blocos econômicos",
    "dificuldade": "facil",
    "enunciado": "O Mercosul foi criado em:",
    "imagem": null,
    "alternativas": {
      "A": "1951",
      "B": "2001",
      "C": "1991",
      "D": "1945",
      "E": "1964"
    },
    "gabarito": "C",
    "explicacao": "O Tratado de Assunção, de 1991, criou o Mercosul.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G07-Q2",
    "materia": "Geografia",
    "assunto": "Blocos econômicos",
    "dificuldade": "facil",
    "enunciado": "Qual destes países é um dos fundadores do Mercosul?",
    "imagem": null,
    "alternativas": {
      "A": "Argentina",
      "B": "Chile",
      "C": "Peru",
      "D": "Colômbia",
      "E": "Equador"
    },
    "gabarito": "A",
    "explicacao": "Os fundadores são Argentina, Brasil, Paraguai e Uruguai.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G07-Q3",
    "materia": "Geografia",
    "assunto": "Blocos econômicos",
    "dificuldade": "media",
    "enunciado": "O que é um bloco econômico?",
    "imagem": null,
    "alternativas": {
      "A": "Um grupo de empresas privadas",
      "B": "Uma associação de países para facilitar o comércio entre si",
      "C": "Uma aliança só militar",
      "D": "Um tipo de moeda",
      "E": "Um acordo de turismo"
    },
    "gabarito": "B",
    "explicacao": "Os países reduzem barreiras e tarifas e cooperam economicamente.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G07-Q4",
    "materia": "Geografia",
    "assunto": "Blocos econômicos",
    "dificuldade": "media",
    "enunciado": "Qual é a moeda comum usada em vários países da União Europeia?",
    "imagem": null,
    "alternativas": {
      "A": "Dólar",
      "B": "Libra",
      "C": "Peso",
      "D": "Euro",
      "E": "Real"
    },
    "gabarito": "D",
    "explicacao": "O euro é usado pelos países da chamada zona do euro.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "G07-Q5",
    "materia": "Geografia",
    "assunto": "Blocos econômicos",
    "dificuldade": "dificil",
    "enunciado": "Qual destes países faz parte da Comunidade Andina?",
    "imagem": null,
    "alternativas": {
      "A": "Brasil",
      "B": "Argentina",
      "C": "Uruguai",
      "D": "Paraguai",
      "E": "Peru"
    },
    "gabarito": "E",
    "explicacao": "A CAN reúne Bolívia, Colômbia, Equador e Peru.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C01-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Vírus e doenças virais",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual afirmação sobre os vírus está correta?",
    "imagem": null,
    "alternativas": {
      "A": "São formados por muitas células",
      "B": "Têm metabolismo próprio e completo",
      "C": "São sempre maiores que as bactérias",
      "D": "Reproduzem-se sozinhos no ambiente",
      "E": "Só se reproduzem dentro de células vivas"
    },
    "gabarito": "E",
    "explicacao": "Os vírus não têm células nem metabolismo próprio: precisam de uma célula hospedeira para se multiplicar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C01-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Vírus e doenças virais",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual destas doenças é causada por vírus?",
    "imagem": null,
    "alternativas": {
      "A": "Doença de Chagas",
      "B": "Tuberculose",
      "C": "Dengue",
      "D": "Malária",
      "E": "Cólera"
    },
    "gabarito": "C",
    "explicacao": "A dengue é causada por vírus. Tuberculose e cólera são bacterianas; malária e Chagas são causadas por protozoários.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C01-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Vírus e doenças virais",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Por que um antibiótico não cura a gripe?",
    "imagem": null,
    "alternativas": {
      "A": "Porque o antibiótico é muito fraco",
      "B": "Porque age contra bactérias e a gripe é causada por vírus",
      "C": "Porque o antibiótico só funciona em adultos",
      "D": "Porque a gripe é uma doença genética",
      "E": "Porque a gripe é causada por fungos"
    },
    "gabarito": "B",
    "explicacao": "Antibióticos combatem bactérias. Contra vírus, eles não têm efeito.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C01-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Vírus e doenças virais",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual animal transmite a dengue?",
    "imagem": null,
    "alternativas": {
      "A": "Mosquito Aedes aegypti",
      "B": "Barbeiro",
      "C": "Caramujo",
      "D": "Carrapato",
      "E": "Mosquito Anopheles"
    },
    "gabarito": "A",
    "explicacao": "O Aedes aegypti transmite dengue, zika e chikungunya. O Anopheles transmite malária e o barbeiro, a doença de Chagas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C01-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Vírus e doenças virais",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Qual é a medida mais eficaz para prevenir a dengue?",
    "imagem": null,
    "alternativas": {
      "A": "Ferver o leite antes de beber",
      "B": "Tratar a água de beber com cloro",
      "C": "Tomar antibiótico todo mês",
      "D": "Eliminar a água parada onde o mosquito se reproduz",
      "E": "Evitar o contato com pessoas gripadas"
    },
    "gabarito": "D",
    "explicacao": "O mosquito põe ovos em água parada. Sem criadouros, a população do mosquito diminui.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C02-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Vacinas e sistema imunológico",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Para que serve uma vacina?",
    "imagem": null,
    "alternativas": {
      "A": "Matar as bactérias do intestino",
      "B": "Aumentar a produção de glóbulos vermelhos",
      "C": "Preparar o sistema imunológico para combater uma doença antes de ela aparecer",
      "D": "Substituir uma alimentação saudável",
      "E": "Curar qualquer doença já instalada"
    },
    "gabarito": "C",
    "explicacao": "A vacina apresenta ao corpo uma forma inofensiva do agente e estimula a produção de anticorpos e de células de memória.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C02-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Vacinas e sistema imunológico",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Que células do sangue produzem anticorpos?",
    "imagem": null,
    "alternativas": {
      "A": "Neurônios",
      "B": "Células do fígado",
      "C": "Hemácias",
      "D": "Linfócitos, um tipo de glóbulo branco",
      "E": "Plaquetas"
    },
    "gabarito": "D",
    "explicacao": "Os linfócitos B produzem anticorpos. As hemácias transportam oxigênio e as plaquetas atuam na coagulação.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C02-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Vacinas e sistema imunológico",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "O que é imunidade coletiva?",
    "imagem": null,
    "alternativas": {
      "A": "A defesa de uma só pessoa que nunca adoece",
      "B": "A proteção dada por antibióticos",
      "C": "A produção de anticorpos por animais",
      "D": "O efeito de tomar vitamina C todos os dias",
      "E": "A proteção que surge quando grande parte da população está imunizada, dificultando a circulação do agente"
    },
    "gabarito": "E",
    "explicacao": "Com muita gente vacinada, o agente tem dificuldade de circular, o que também protege quem não pôde se vacinar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C02-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Vacinas e sistema imunológico",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "O soro antiofídico, usado em picada de cobra, é um exemplo de:",
    "imagem": null,
    "alternativas": {
      "A": "Antibiótico, pois mata bactérias",
      "B": "Imunização passiva, pois já contém anticorpos prontos",
      "C": "Vacina feita com vírus enfraquecidos",
      "D": "Imunização ativa, pois estimula o corpo a produzir anticorpos",
      "E": "Alergia provocada pelo veneno"
    },
    "gabarito": "B",
    "explicacao": "O soro entrega anticorpos prontos e age rápido, mas a proteção dura pouco. A vacina estimula o corpo a produzir os próprios anticorpos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C02-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Vacinas e sistema imunológico",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Por que a vacina contra a gripe precisa ser tomada todo ano?",
    "imagem": null,
    "alternativas": {
      "A": "Porque o vírus sofre mutações e surgem novas variantes",
      "B": "Porque a vacina perde a validade em um mês",
      "C": "Porque a vacina é feita com bactérias",
      "D": "Porque ela só protege contra a dengue",
      "E": "Porque o corpo elimina o sangue todo ano"
    },
    "gabarito": "A",
    "explicacao": "O vírus influenza muda com frequência, e as vacinas são atualizadas a cada ano para acompanhar as variantes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C03-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Células",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual organela é responsável pela respiração celular, produzindo energia?",
    "imagem": null,
    "alternativas": {
      "A": "Núcleo",
      "B": "Mitocôndria",
      "C": "Ribossomo",
      "D": "Lisossomo",
      "E": "Cloroplasto"
    },
    "gabarito": "B",
    "explicacao": "Na mitocôndria, a energia dos nutrientes é convertida em ATP, a “moeda de energia” da célula.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C03-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Células",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual organela realiza a fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "Núcleo",
      "B": "Lisossomo",
      "C": "Cloroplasto",
      "D": "Mitocôndria",
      "E": "Vacúolo"
    },
    "gabarito": "C",
    "explicacao": "O cloroplasto contém clorofila e existe em células vegetais e algas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C03-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Células",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual estrutura envolve a célula vegetal por fora da membrana plasmática e dá sustentação?",
    "imagem": null,
    "alternativas": {
      "A": "Parede celular",
      "B": "Mitocôndria",
      "C": "Ribossomo",
      "D": "Núcleo",
      "E": "Citoplasma"
    },
    "gabarito": "A",
    "explicacao": "A parede celular, formada principalmente por celulose, dá forma e proteção à célula vegetal.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C03-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Células",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual é a principal função da membrana plasmática?",
    "imagem": null,
    "alternativas": {
      "A": "Guardar o material genético",
      "B": "Produzir energia para a célula",
      "C": "Realizar a fotossíntese",
      "D": "Controlar a entrada e a saída de substâncias da célula",
      "E": "Digerir as proteínas"
    },
    "gabarito": "D",
    "explicacao": "A membrana plasmática tem permeabilidade seletiva: deixa passar umas substâncias e barra outras.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C03-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Células",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Qual destes seres é formado por célula sem núcleo delimitado (procarionte)?",
    "imagem": null,
    "alternativas": {
      "A": "Célula do fígado",
      "B": "Levedura",
      "C": "Célula da folha",
      "D": "Neurônio",
      "E": "Bactéria"
    },
    "gabarito": "E",
    "explicacao": "Nas bactérias o DNA fica solto no citoplasma. Nas demais células citadas existe um núcleo envolvido por membrana.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C04-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Genética básica (Mendel)",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Quem é considerado o pai da genética?",
    "imagem": null,
    "alternativas": {
      "A": "Alexander Fleming",
      "B": "Lamarck",
      "C": "Louis Pasteur",
      "D": "Charles Darwin",
      "E": "Gregor Mendel"
    },
    "gabarito": "E",
    "explicacao": "Mendel estudou ervilhas e descobriu as leis básicas da hereditariedade.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C04-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Genética básica (Mendel)",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Em um cruzamento, o gene dominante é aquele que:",
    "imagem": null,
    "alternativas": {
      "A": "É sempre mais raro na população",
      "B": "Se manifesta mesmo quando existe em uma única cópia",
      "C": "Só se manifesta em dose dupla",
      "D": "Nunca passa para os filhos",
      "E": "Aparece apenas em machos"
    },
    "gabarito": "B",
    "explicacao": "O dominante aparece no heterozigoto. O recessivo só se manifesta quando está nas duas cópias.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C04-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Genética básica (Mendel)",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Um indivíduo com genótipo Aa é chamado de:",
    "imagem": null,
    "alternativas": {
      "A": "Heterozigoto",
      "B": "Homozigoto dominante",
      "C": "Homozigoto recessivo",
      "D": "Haploide",
      "E": "Clone"
    },
    "gabarito": "A",
    "explicacao": "Heterozigoto tem dois alelos diferentes (A e a). Homozigoto tem dois alelos iguais.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C04-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Genética básica (Mendel)",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "No cruzamento Aa × Aa, qual é a probabilidade de nascer um filho aa?",
    "imagem": null,
    "alternativas": {
      "A": "0%",
      "B": "50%",
      "C": "25%",
      "D": "75%",
      "E": "100%"
    },
    "gabarito": "C",
    "explicacao": "Os filhos possíveis são AA, Aa, Aa e aa: 1 em 4, ou 25%, é aa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C04-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Genética básica (Mendel)",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "No cruzamento Aa × aa, qual é a probabilidade de o filho ter o fenótipo dominante?",
    "imagem": null,
    "alternativas": {
      "A": "0%",
      "B": "75%",
      "C": "100%",
      "D": "50%",
      "E": "25%"
    },
    "gabarito": "D",
    "explicacao": "Os filhos possíveis são Aa, Aa, aa e aa. Só os Aa mostram o fenótipo dominante: 2 em 4, ou 50%.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C05-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "DNA e hereditariedade",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Em células humanas, onde fica concentrado o DNA?",
    "imagem": null,
    "alternativas": {
      "A": "No ribossomo",
      "B": "No núcleo",
      "C": "Na parede celular",
      "D": "Na membrana plasmática",
      "E": "No lisossomo"
    },
    "gabarito": "B",
    "explicacao": "O núcleo guarda o DNA, organizado em cromossomos. Há também um pouco de DNA nas mitocôndrias.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C05-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "DNA e hereditariedade",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Quais são as quatro bases nitrogenadas do DNA?",
    "imagem": null,
    "alternativas": {
      "A": "Adenina, timina, uracila e guanina",
      "B": "Glicose, frutose, sacarose e lactose",
      "C": "Adenina, timina, citosina e glicina",
      "D": "Adenina, uracila, citosina e guanina",
      "E": "Adenina, timina, citosina e guanina"
    },
    "gabarito": "E",
    "explicacao": "A uracila só aparece no RNA, no lugar da timina.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C05-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "DNA e hereditariedade",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "No DNA, a adenina se liga a qual base?",
    "imagem": null,
    "alternativas": {
      "A": "Guanina",
      "B": "Uracila",
      "C": "Timina",
      "D": "Adenina",
      "E": "Citosina"
    },
    "gabarito": "C",
    "explicacao": "Os pares são A com T e C com G.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C05-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "DNA e hereditariedade",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Quantos cromossomos tem uma célula do corpo humano (célula somática)?",
    "imagem": null,
    "alternativas": {
      "A": "46",
      "B": "23",
      "C": "92",
      "D": "48",
      "E": "44"
    },
    "gabarito": "A",
    "explicacao": "São 23 pares de cromossomos, ou seja, 46.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C05-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "DNA e hereditariedade",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Uma célula humana com 46 cromossomos passa por meiose. Cada gameta formado terá:",
    "imagem": null,
    "alternativas": {
      "A": "92 cromossomos",
      "B": "46 cromossomos",
      "C": "12 cromossomos",
      "D": "23 cromossomos",
      "E": "69 cromossomos"
    },
    "gabarito": "D",
    "explicacao": "A meiose reduz o número de cromossomos à metade. Na fecundação, os 23 do óvulo e os 23 do espermatozoide formam um zigoto com 46.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C06-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Evolução e seleção natural",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Quem propôs a teoria da seleção natural?",
    "imagem": null,
    "alternativas": {
      "A": "Charles Darwin",
      "B": "Isaac Newton",
      "C": "Louis Pasteur",
      "D": "Gregor Mendel",
      "E": "Oparin"
    },
    "gabarito": "A",
    "explicacao": "Darwin propôs que os indivíduos mais adaptados ao ambiente sobrevivem e se reproduzem mais.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C06-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Evolução e seleção natural",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Mariposas escuras ficaram mais comuns em cidades poluídas, onde os troncos escurecidos as escondiam dos predadores. Isso é exemplo de:",
    "imagem": null,
    "alternativas": {
      "A": "Fotossíntese",
      "B": "Seleção natural",
      "C": "Herança de características adquiridas",
      "D": "Geração espontânea",
      "E": "Clonagem"
    },
    "gabarito": "B",
    "explicacao": "As mariposas escuras sobreviveram mais, deixaram mais descendentes e passaram a ser maioria.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C06-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Evolução e seleção natural",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "A ideia de que a girafa esticou o pescoço e passou o pescoço maior aos filhotes é de:",
    "imagem": null,
    "alternativas": {
      "A": "Pasteur",
      "B": "Darwin",
      "C": "Lamarck",
      "D": "Fleming",
      "E": "Mendel"
    },
    "gabarito": "C",
    "explicacao": "Lamarck defendia o uso e desuso e a herança de características adquiridas, ideia que não se confirmou.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C06-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Evolução e seleção natural",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Por que bactérias podem ficar resistentes a antibióticos?",
    "imagem": null,
    "alternativas": {
      "A": "Porque o antibiótico produz novas bactérias",
      "B": "Porque as bactérias aprendem a se defender durante o tratamento",
      "C": "Porque o antibiótico aumenta a temperatura do corpo",
      "D": "Porque o corpo do paciente fabrica bactérias",
      "E": "Porque as bactérias resistentes sobrevivem ao remédio e se multiplicam"
    },
    "gabarito": "E",
    "explicacao": "É seleção natural: o antibiótico elimina as sensíveis, e as resistentes passam a dominar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C06-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Evolução e seleção natural",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "O osso do braço humano, da asa do morcego e da nadadeira da baleia têm estrutura parecida. Isso é evidência de:",
    "imagem": null,
    "alternativas": {
      "A": "Que não há evolução",
      "B": "Geração espontânea",
      "C": "Que todos têm a mesma função",
      "D": "Um ancestral comum",
      "E": "Que o ambiente não influencia os seres vivos"
    },
    "gabarito": "D",
    "explicacao": "São órgãos homólogos: têm a mesma origem evolutiva, mesmo que hoje sirvam a funções diferentes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C07-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Cadeias e teias alimentares",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Na cadeia alimentar, quem são os produtores?",
    "imagem": null,
    "alternativas": {
      "A": "Animais que comem carne",
      "B": "Bactérias que causam doenças",
      "C": "Fungos que decompõem restos",
      "D": "Animais que comem plantas",
      "E": "Seres que produzem o próprio alimento, como as plantas"
    },
    "gabarito": "E",
    "explicacao": "Plantas e algas fazem fotossíntese e são a base da cadeia alimentar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C07-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Cadeias e teias alimentares",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Na cadeia capim → gafanhoto → sapo → cobra, o sapo é:",
    "imagem": null,
    "alternativas": {
      "A": "Produtor",
      "B": "Consumidor secundário",
      "C": "Decompositor",
      "D": "Consumidor primário",
      "E": "Consumidor terciário"
    },
    "gabarito": "B",
    "explicacao": "O gafanhoto, que come capim, é consumidor primário. O sapo, que come o gafanhoto, é consumidor secundário.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C07-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Cadeias e teias alimentares",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual é o papel dos decompositores?",
    "imagem": null,
    "alternativas": {
      "A": "Caçar outros animais",
      "B": "Controlar a temperatura do ambiente",
      "C": "Produzir alimento por fotossíntese",
      "D": "Transformar restos de seres vivos em nutrientes que voltam ao ambiente",
      "E": "Transportar sementes"
    },
    "gabarito": "D",
    "explicacao": "Fungos e bactérias reciclam a matéria orgânica, devolvendo nutrientes ao solo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C07-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Cadeias e teias alimentares",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Ao longo de uma cadeia alimentar, a quantidade de energia disponível:",
    "imagem": null,
    "alternativas": {
      "A": "Diminui a cada nível",
      "B": "Só existe no primeiro nível",
      "C": "Aumenta a cada nível",
      "D": "Permanece sempre igual",
      "E": "Dobra a cada nível"
    },
    "gabarito": "A",
    "explicacao": "Em cada nível trófico, grande parte da energia é gasta pelo próprio ser vivo ou liberada como calor.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C07-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Cadeias e teias alimentares",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Se os sapos desaparecerem da cadeia capim → gafanhoto → sapo → cobra, o que tende a ocorrer?",
    "imagem": null,
    "alternativas": {
      "A": "Os gafanhotos diminuem e o capim aumenta",
      "B": "As cobras aumentam e os gafanhotos diminuem",
      "C": "Os gafanhotos aumentam e as cobras diminuem",
      "D": "O capim desaparece imediatamente",
      "E": "Nada muda na cadeia"
    },
    "gabarito": "C",
    "explicacao": "Sem o predador, os gafanhotos se multiplicam, e as cobras ficam sem alimento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C08-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Relações ecológicas",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "A relação entre flores e abelhas, em que ambas se beneficiam, é:",
    "imagem": null,
    "alternativas": {
      "A": "Predação",
      "B": "Competição",
      "C": "Mutualismo",
      "D": "Parasitismo",
      "E": "Comensalismo"
    },
    "gabarito": "C",
    "explicacao": "A abelha ganha alimento e a flor é polinizada: os dois lados se beneficiam.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C08-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Relações ecológicas",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Pulgas que vivem em um cachorro e se alimentam do seu sangue têm com ele uma relação de:",
    "imagem": null,
    "alternativas": {
      "A": "Predação",
      "B": "Comensalismo",
      "C": "Mutualismo",
      "D": "Competição",
      "E": "Parasitismo"
    },
    "gabarito": "E",
    "explicacao": "No parasitismo, um lado se beneficia e o outro é prejudicado, mas em geral não é morto.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C08-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Relações ecológicas",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Uma onça que caça e come uma capivara é um exemplo de:",
    "imagem": null,
    "alternativas": {
      "A": "Protocooperação",
      "B": "Comensalismo",
      "C": "Parasitismo",
      "D": "Predação",
      "E": "Mutualismo"
    },
    "gabarito": "D",
    "explicacao": "Na predação, o predador mata a presa para se alimentar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C08-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Relações ecológicas",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Duas espécies de plantas que disputam luz e nutrientes do mesmo solo mantêm uma relação de:",
    "imagem": null,
    "alternativas": {
      "A": "Mutualismo",
      "B": "Competição",
      "C": "Comensalismo",
      "D": "Predação",
      "E": "Parasitismo"
    },
    "gabarito": "B",
    "explicacao": "Quando duas espécies disputam o mesmo recurso limitado, há competição.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C08-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Relações ecológicas",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Rêmoras se prendem a tubarões e aproveitam restos de comida, sem prejudicá-los nem ajudá-los. Essa relação é:",
    "imagem": null,
    "alternativas": {
      "A": "Comensalismo",
      "B": "Parasitismo",
      "C": "Mutualismo",
      "D": "Predação",
      "E": "Competição"
    },
    "gabarito": "A",
    "explicacao": "No comensalismo, um lado se beneficia e o outro não ganha nem perde.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C09-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Fotossíntese e respiração",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Quais são os produtos da fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "Gás carbônico e água",
      "B": "Água e sais minerais",
      "C": "Glicose e gás oxigênio",
      "D": "Oxigênio e nitrogênio",
      "E": "Glicose e gás carbônico"
    },
    "gabarito": "C",
    "explicacao": "Com luz, gás carbônico e água, a planta produz glicose (alimento) e libera oxigênio.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C09-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Fotossíntese e respiração",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual gás é absorvido pelas plantas durante a fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "Gás carbônico (CO₂)",
      "B": "Gás oxigênio (O₂)",
      "C": "Gás nitrogênio",
      "D": "Gás hélio",
      "E": "Metano"
    },
    "gabarito": "A",
    "explicacao": "O CO₂ entra pelas folhas e é usado na produção de glicose.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C09-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Fotossíntese e respiração",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual pigmento verde capta a luz na fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "Melanina",
      "B": "Clorofila",
      "C": "Queratina",
      "D": "Hemoglobina",
      "E": "Insulina"
    },
    "gabarito": "B",
    "explicacao": "A clorofila fica nos cloroplastos e dá a cor verde às folhas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C09-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Fotossíntese e respiração",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Em quais seres vivos ocorre a respiração celular?",
    "imagem": null,
    "alternativas": {
      "A": "Só nos seres humanos",
      "B": "Só nos animais",
      "C": "Só nas plantas durante o dia",
      "D": "Em todos os seres vivos, inclusive nas plantas",
      "E": "Só nos que têm pulmões"
    },
    "gabarito": "D",
    "explicacao": "Todas as células precisam de energia, e a respiração celular a libera da glicose. As plantas respiram o tempo todo, mesmo fazendo fotossíntese.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C09-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Fotossíntese e respiração",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Qual equação resume a fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "6 O₂ + 6 H₂O → C₆H₁₂O₆ + 6 CO₂",
      "B": "C₆H₁₂O₆ → 6 CO₂ + 6 H₂",
      "C": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energia",
      "D": "6 CO₂ + 6 O₂ → C₆H₁₂O₆ + 6 H₂O",
      "E": "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂"
    },
    "gabarito": "E",
    "explicacao": "A alternativa que está ao contrário (glicose + oxigênio → gás carbônico + água) é a respiração celular.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C10-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema digestório e nutrição",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Em qual órgão ocorre a maior parte da absorção de nutrientes?",
    "imagem": null,
    "alternativas": {
      "A": "Boca",
      "B": "Estômago",
      "C": "Intestino delgado",
      "D": "Intestino grosso",
      "E": "Esôfago"
    },
    "gabarito": "C",
    "explicacao": "As vilosidades do intestino delgado aumentam a área de absorção dos nutrientes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C10-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema digestório e nutrição",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Onde começa a digestão das proteínas?",
    "imagem": null,
    "alternativas": {
      "A": "No esôfago",
      "B": "No reto",
      "C": "Na boca",
      "D": "No estômago",
      "E": "No intestino grosso"
    },
    "gabarito": "D",
    "explicacao": "O suco gástrico, com ácido clorídrico e enzimas, começa a quebrar as proteínas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C10-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema digestório e nutrição",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual órgão produz a bile, que ajuda na digestão das gorduras?",
    "imagem": null,
    "alternativas": {
      "A": "Pâncreas",
      "B": "Rins",
      "C": "Intestino grosso",
      "D": "Estômago",
      "E": "Fígado"
    },
    "gabarito": "E",
    "explicacao": "A bile é produzida pelo fígado e armazenada na vesícula biliar. Ela emulsiona as gorduras.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C10-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema digestório e nutrição",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual nutriente tem como principal função construir e reparar tecidos, como os músculos?",
    "imagem": null,
    "alternativas": {
      "A": "Proteínas",
      "B": "Carboidratos",
      "C": "Fibras",
      "D": "Vitaminas",
      "E": "Gorduras"
    },
    "gabarito": "A",
    "explicacao": "As proteínas são formadas por aminoácidos, usados para construir e reparar tecidos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C10-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema digestório e nutrição",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "A amilase, presente na saliva, começa a digerir:",
    "imagem": null,
    "alternativas": {
      "A": "As gorduras",
      "B": "O amido",
      "C": "As vitaminas",
      "D": "As proteínas",
      "E": "Os sais minerais"
    },
    "gabarito": "B",
    "explicacao": "Ao mastigar um pão por bastante tempo, o amido começa a virar açúcares simples e o sabor fica levemente adocicado.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C11-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Sistemas circulatório e respiratório",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual órgão bombeia o sangue pelo corpo?",
    "imagem": null,
    "alternativas": {
      "A": "Estômago",
      "B": "Fígado",
      "C": "Rim",
      "D": "Coração",
      "E": "Pulmão"
    },
    "gabarito": "D",
    "explicacao": "O coração é um músculo que se contrai e impulsiona o sangue pelos vasos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C11-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Sistemas circulatório e respiratório",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Onde ocorrem as trocas gasosas nos pulmões?",
    "imagem": null,
    "alternativas": {
      "A": "Nos alvéolos pulmonares",
      "B": "Na traqueia",
      "C": "Nos brônquios",
      "D": "Na faringe",
      "E": "Na laringe"
    },
    "gabarito": "A",
    "explicacao": "Nos alvéolos, o oxigênio passa para o sangue e o gás carbônico sai do sangue para ser expirado.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C11-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Sistemas circulatório e respiratório",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual célula do sangue transporta o oxigênio?",
    "imagem": null,
    "alternativas": {
      "A": "Plaquetas",
      "B": "Leucócitos",
      "C": "Hemácias",
      "D": "Plasma",
      "E": "Linfócitos"
    },
    "gabarito": "C",
    "explicacao": "As hemácias (glóbulos vermelhos) têm hemoglobina, que se liga ao oxigênio. O plasma é a parte líquida do sangue.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C11-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Sistemas circulatório e respiratório",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual componente do sangue participa da coagulação?",
    "imagem": null,
    "alternativas": {
      "A": "Plasma sem células",
      "B": "Plaquetas",
      "C": "Hemoglobina",
      "D": "Hemácias",
      "E": "Leucócitos"
    },
    "gabarito": "B",
    "explicacao": "Quando há um corte, as plaquetas se agrupam e ajudam a formar o coágulo que estanca o sangramento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C11-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Sistemas circulatório e respiratório",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "A pequena circulação (circulação pulmonar) leva o sangue:",
    "imagem": null,
    "alternativas": {
      "A": "Dos rins ao cérebro",
      "B": "Do fígado aos rins",
      "C": "Dos pulmões ao estômago",
      "D": "Do coração a todo o corpo e de volta ao coração",
      "E": "Do coração aos pulmões e dos pulmões de volta ao coração"
    },
    "gabarito": "E",
    "explicacao": "Na pequena circulação, o sangue pega oxigênio nos pulmões. Já a grande circulação distribui esse sangue para o corpo todo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C12-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Reprodução humana",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Em qual local costuma ocorrer a fecundação na espécie humana?",
    "imagem": null,
    "alternativas": {
      "A": "Na vagina",
      "B": "No ovário",
      "C": "Na bexiga",
      "D": "Nas tubas uterinas",
      "E": "No útero"
    },
    "gabarito": "D",
    "explicacao": "O óvulo liberado pelo ovário é encontrado pelo espermatozoide nas tubas uterinas. O zigoto segue depois para o útero.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C12-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Reprodução humana",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Quais são os gametas humanos?",
    "imagem": null,
    "alternativas": {
      "A": "Hormônio e enzima",
      "B": "Espermatozoide e óvulo",
      "C": "Zigoto e embrião",
      "D": "Neurônio e glia",
      "E": "Hemácia e leucócito"
    },
    "gabarito": "B",
    "explicacao": "Os gametas são as células sexuais. Sua união forma o zigoto.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C12-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Reprodução humana",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Qual método contraceptivo também protege contra infecções sexualmente transmissíveis (ISTs)?",
    "imagem": null,
    "alternativas": {
      "A": "Preservativo (camisinha)",
      "B": "Tabelinha",
      "C": "Pílula anticoncepcional",
      "D": "Laqueadura",
      "E": "DIU"
    },
    "gabarito": "A",
    "explicacao": "A camisinha é uma barreira física: evita a gravidez e reduz o risco de ISTs. Os outros métodos citados não protegem contra ISTs.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C12-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Reprodução humana",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "A pílula anticoncepcional age principalmente:",
    "imagem": null,
    "alternativas": {
      "A": "Impedindo a produção de espermatozoides",
      "B": "Retirando o útero",
      "C": "Protegendo contra ISTs",
      "D": "Matando o embrião depois da fecundação",
      "E": "Inibindo a ovulação"
    },
    "gabarito": "E",
    "explicacao": "Os hormônios da pílula impedem a liberação do óvulo. Sem óvulo, não há fecundação.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C12-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Reprodução humana",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Em um ciclo menstrual regular de 28 dias, a ovulação costuma ocorrer por volta do:",
    "imagem": null,
    "alternativas": {
      "A": "28º dia",
      "B": "21º dia",
      "C": "14º dia",
      "D": "1º dia",
      "E": "7º dia"
    },
    "gabarito": "C",
    "explicacao": "A ovulação ocorre mais ou menos na metade do ciclo. O 1º dia é o primeiro dia da menstruação.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C13-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Botânica",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Qual é a principal função da raiz?",
    "imagem": null,
    "alternativas": {
      "A": "Produzir flores",
      "B": "Produzir sementes",
      "C": "Realizar a fotossíntese",
      "D": "Liberar oxigênio",
      "E": "Absorver água e sais minerais e fixar a planta no solo"
    },
    "gabarito": "E",
    "explicacao": "A raiz fixa a planta e absorve a água e os sais minerais do solo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C13-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Botânica",
    "area": "Biologia",
    "dificuldade": "facil",
    "enunciado": "Em qual órgão da planta ocorre principalmente a fotossíntese?",
    "imagem": null,
    "alternativas": {
      "A": "Sementes",
      "B": "Frutos",
      "C": "Caule subterrâneo",
      "D": "Folhas",
      "E": "Raízes"
    },
    "gabarito": "D",
    "explicacao": "As folhas têm muitos cloroplastos e uma grande área para captar a luz.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C13-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Botânica",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "Como se chamam as pequenas aberturas das folhas que permitem trocas gasosas?",
    "imagem": null,
    "alternativas": {
      "A": "Estômatos",
      "B": "Cutículas",
      "C": "Xilemas",
      "D": "Raízes",
      "E": "Sépalas"
    },
    "gabarito": "A",
    "explicacao": "Pelos estômatos entra o CO₂ e saem o O₂ e o vapor de água.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C13-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Botânica",
    "area": "Biologia",
    "dificuldade": "media",
    "enunciado": "O que o xilema conduz?",
    "imagem": null,
    "alternativas": {
      "A": "Sangue",
      "B": "Seiva bruta, formada por água e sais minerais",
      "C": "Somente gás carbônico",
      "D": "Seiva elaborada, formada por açúcares",
      "E": "Somente pólen"
    },
    "gabarito": "B",
    "explicacao": "O xilema leva a seiva bruta das raízes às folhas. O floema distribui a seiva elaborada, rica em açúcares.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C13-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Botânica",
    "area": "Biologia",
    "dificuldade": "dificil",
    "enunciado": "Qual grupo de plantas produz flores e frutos?",
    "imagem": null,
    "alternativas": {
      "A": "Algas",
      "B": "Pteridófitas",
      "C": "Angiospermas",
      "D": "Briófitas",
      "E": "Gimnospermas"
    },
    "gabarito": "C",
    "explicacao": "As angiospermas são as plantas com flores e frutos. Musgos (briófitas) e samambaias (pteridófitas) não têm flores, e as gimnospermas, como os pinheiros, não têm frutos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C14-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Velocidade média",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Um carro percorre 120 km em 2 horas. Qual é a sua velocidade média?",
    "imagem": null,
    "alternativas": {
      "A": "240 km/h",
      "B": "60 km/h",
      "C": "122 km/h",
      "D": "30 km/h",
      "E": "118 km/h"
    },
    "gabarito": "B",
    "explicacao": "Velocidade média = distância ÷ tempo = 120 ÷ 2 = 60 km/h.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C14-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Velocidade média",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Uma pessoa anda 300 m em 5 minutos. Qual é a velocidade média em m/s?",
    "imagem": null,
    "alternativas": {
      "A": "1 m/s",
      "B": "60 m/s",
      "C": "0,5 m/s",
      "D": "1,5 m/s",
      "E": "5 m/s"
    },
    "gabarito": "A",
    "explicacao": "5 minutos = 300 segundos. 300 m ÷ 300 s = 1 m/s.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C14-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Velocidade média",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Qual é o valor de 72 km/h em m/s?",
    "imagem": null,
    "alternativas": {
      "A": "7,2 m/s",
      "B": "259,2 m/s",
      "C": "72 m/s",
      "D": "40 m/s",
      "E": "20 m/s"
    },
    "gabarito": "E",
    "explicacao": "Para passar de km/h para m/s, divide-se por 3,6: 72 ÷ 3,6 = 20.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C14-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Velocidade média",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Uma moto viaja a 80 km/h durante 3 horas. Que distância ela percorre?",
    "imagem": null,
    "alternativas": {
      "A": "83 km",
      "B": "160 km",
      "C": "240 km",
      "D": "26,7 km",
      "E": "270 km"
    },
    "gabarito": "C",
    "explicacao": "Distância = velocidade × tempo = 80 × 3 = 240 km.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C14-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Velocidade média",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Um ciclista percorre 100 km a 50 km/h e, depois, mais 100 km a 100 km/h. Qual é a velocidade média em todo o percurso?",
    "imagem": null,
    "alternativas": {
      "A": "100 km/h",
      "B": "75 km/h",
      "C": "150 km/h",
      "D": "Aproximadamente 66,7 km/h",
      "E": "50 km/h"
    },
    "gabarito": "D",
    "explicacao": "Tempo: 100 ÷ 50 = 2 h e 100 ÷ 100 = 1 h, total de 3 h. Distância total: 200 km. 200 ÷ 3 ≈ 66,7 km/h, que não é a média simples de 50 e 100.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C15-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Aceleração",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "A aceleração mede:",
    "imagem": null,
    "alternativas": {
      "A": "A distância percorrida",
      "B": "O peso de um corpo",
      "C": "A rapidez com que a velocidade varia",
      "D": "A massa de um corpo",
      "E": "O tempo gasto no percurso"
    },
    "gabarito": "C",
    "explicacao": "Aceleração é a variação da velocidade em cada unidade de tempo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C15-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Aceleração",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Um carro parte do repouso e chega a 20 m/s em 4 s. Qual é a sua aceleração média?",
    "imagem": null,
    "alternativas": {
      "A": "0,2 m/s²",
      "B": "5 m/s²",
      "C": "24 m/s²",
      "D": "16 m/s²",
      "E": "80 m/s²"
    },
    "gabarito": "B",
    "explicacao": "Aceleração = variação da velocidade ÷ tempo = 20 ÷ 4 = 5 m/s².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C15-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Aceleração",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "No Sistema Internacional, a unidade de aceleração é:",
    "imagem": null,
    "alternativas": {
      "A": "kg·m",
      "B": "N",
      "C": "m²/s",
      "D": "m/s²",
      "E": "m/s"
    },
    "gabarito": "D",
    "explicacao": "Como é velocidade (m/s) por tempo (s), a unidade é m/s².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C15-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Aceleração",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um corpo com velocidade inicial de 10 m/s tem aceleração constante de 2 m/s². Qual é a velocidade depois de 5 s?",
    "imagem": null,
    "alternativas": {
      "A": "20 m/s",
      "B": "30 m/s",
      "C": "12 m/s",
      "D": "25 m/s",
      "E": "15 m/s"
    },
    "gabarito": "A",
    "explicacao": "v = v₀ + a·t = 10 + 2 × 5 = 20 m/s.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C15-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Aceleração",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Um veículo a 30 m/s freia uniformemente até parar em 6 s. Qual é a sua aceleração?",
    "imagem": null,
    "alternativas": {
      "A": "−0,2 m/s²",
      "B": "−24 m/s²",
      "C": "+5 m/s²",
      "D": "−180 m/s²",
      "E": "−5 m/s²"
    },
    "gabarito": "E",
    "explicacao": "a = (0 − 30) ÷ 6 = −5 m/s². O sinal é negativo porque a velocidade diminui.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C16-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Leis de Newton",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Quando um ônibus freia bruscamente, os passageiros tendem a ser lançados para a frente. Esse fato é explicado:",
    "imagem": null,
    "alternativas": {
      "A": "Pela pressão atmosférica",
      "B": "Pela dilatação térmica",
      "C": "Pela força do motor",
      "D": "Pela ação e reação (3ª Lei de Newton)",
      "E": "Pela inércia (1ª Lei de Newton)"
    },
    "gabarito": "E",
    "explicacao": "Pela inércia, o corpo tende a manter o movimento que já tinha, enquanto o ônibus desacelera.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C16-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Leis de Newton",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual é a força resultante necessária para dar a um corpo de 4 kg uma aceleração de 3 m/s²?",
    "imagem": null,
    "alternativas": {
      "A": "34 N",
      "B": "1,3 N",
      "C": "7 N",
      "D": "12 N",
      "E": "0,75 N"
    },
    "gabarito": "D",
    "explicacao": "2ª Lei de Newton: F = m·a = 4 × 3 = 12 N.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C16-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Leis de Newton",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Ao empurrar uma parede com uma força de 20 N, você recebe da parede uma força de:",
    "imagem": null,
    "alternativas": {
      "A": "Zero",
      "B": "20 N, em sentido contrário",
      "C": "10 N, em sentido contrário",
      "D": "40 N, em sentido contrário",
      "E": "20 N, no mesmo sentido"
    },
    "gabarito": "B",
    "explicacao": "Pela 3ª Lei (ação e reação), as duas forças têm a mesma intensidade e sentidos opostos, aplicadas em corpos diferentes.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C16-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Leis de Newton",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um corpo em repouso, ou em movimento retilíneo e com velocidade constante, está com força resultante:",
    "imagem": null,
    "alternativas": {
      "A": "Dobrada",
      "B": "Sempre negativa",
      "C": "Nula",
      "D": "Sempre positiva",
      "E": "Igual ao peso"
    },
    "gabarito": "C",
    "explicacao": "Sem força resultante, a velocidade não muda: é a 1ª Lei de Newton.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C16-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Leis de Newton",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Um bloco de 2 kg recebe duas forças na mesma reta, em sentidos opostos: 8 N e 6 N. Qual é a aceleração do bloco?",
    "imagem": null,
    "alternativas": {
      "A": "1 m/s²",
      "B": "14 m/s²",
      "C": "4 m/s²",
      "D": "7 m/s²",
      "E": "3 m/s²"
    },
    "gabarito": "A",
    "explicacao": "Força resultante = 8 − 6 = 2 N. a = F ÷ m = 2 ÷ 2 = 1 m/s².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C17-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Peso, massa e gravidade",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual alternativa diferencia corretamente massa de peso?",
    "imagem": null,
    "alternativas": {
      "A": "Massa é a quantidade de matéria, medida em kg; peso é uma força, medida em newtons",
      "B": "Massa e peso são sempre iguais e medidos em kg",
      "C": "O peso é o mesmo em qualquer planeta",
      "D": "Massa é uma força e peso é a quantidade de matéria",
      "E": "A massa muda conforme o lugar e o peso nunca muda"
    },
    "gabarito": "A",
    "explicacao": "A massa não muda com o lugar. O peso depende da gravidade local.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C17-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Peso, massa e gravidade",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Considerando g = 10 m/s², qual é o peso de uma pessoa de 60 kg?",
    "imagem": null,
    "alternativas": {
      "A": "6.000 N",
      "B": "600 N",
      "C": "60 N",
      "D": "6 N",
      "E": "70 N"
    },
    "gabarito": "B",
    "explicacao": "P = m·g = 60 × 10 = 600 N.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C17-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Peso, massa e gravidade",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um astronauta vai da Terra para a Lua. Na Lua, a massa e o peso dele:",
    "imagem": null,
    "alternativas": {
      "A": "A massa é zero",
      "B": "Os dois aumentam",
      "C": "Os dois diminuem",
      "D": "A massa é menor e o peso é o mesmo",
      "E": "A massa é a mesma e o peso é menor"
    },
    "gabarito": "E",
    "explicacao": "A gravidade na Lua é cerca de 1/6 da gravidade da Terra, então o peso diminui. A quantidade de matéria do astronauta não muda.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C17-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Peso, massa e gravidade",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "No Sistema Internacional, a unidade de peso é:",
    "imagem": null,
    "alternativas": {
      "A": "Watt",
      "B": "Pascal",
      "C": "Quilograma",
      "D": "Newton",
      "E": "Joule"
    },
    "gabarito": "D",
    "explicacao": "O peso é uma força, e a unidade de força é o newton (N).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C17-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Peso, massa e gravidade",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Na Lua, onde g = 1,6 m/s², qual é o peso de um objeto de 5 kg?",
    "imagem": null,
    "alternativas": {
      "A": "0,32 N",
      "B": "50 N",
      "C": "8 N",
      "D": "3,1 N",
      "E": "5 N"
    },
    "gabarito": "C",
    "explicacao": "P = m·g = 5 × 1,6 = 8 N.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C18-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Pressão",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Pressão é a razão entre:",
    "imagem": null,
    "alternativas": {
      "A": "Área e força",
      "B": "Força e área",
      "C": "Massa e volume",
      "D": "Força e tempo",
      "E": "Velocidade e tempo"
    },
    "gabarito": "B",
    "explicacao": "P = F ÷ A. A unidade no SI é o pascal (Pa), que é N/m².",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C18-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Pressão",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Por que uma faca afiada corta melhor que uma sem fio?",
    "imagem": null,
    "alternativas": {
      "A": "Porque a faca afiada tem mais massa",
      "B": "Porque a faca afiada é mais pesada",
      "C": "Porque a área de contato é menor, então a pressão é maior",
      "D": "Porque a área é maior e a pressão é menor",
      "E": "Porque não há atrito"
    },
    "gabarito": "C",
    "explicacao": "Com a mesma força, quanto menor a área, maior a pressão.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C18-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Pressão",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Ao subir uma montanha, a pressão atmosférica:",
    "imagem": null,
    "alternativas": {
      "A": "Diminui",
      "B": "Dobra",
      "C": "Não muda",
      "D": "Torna-se negativa",
      "E": "Aumenta"
    },
    "gabarito": "A",
    "explicacao": "Quanto maior a altitude, menor a coluna de ar acima de nós, então a pressão diminui.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C18-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Pressão",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Quando um mergulhador desce, a pressão da água sobre ele:",
    "imagem": null,
    "alternativas": {
      "A": "Só existe na superfície",
      "B": "Só muda com a temperatura",
      "C": "Fica sempre a mesma",
      "D": "Diminui com a profundidade",
      "E": "Aumenta com a profundidade"
    },
    "gabarito": "E",
    "explicacao": "Quanto mais fundo, maior a coluna de água acima do mergulhador e maior a pressão.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C18-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Pressão",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Uma força de 200 N é aplicada perpendicularmente sobre uma área de 0,5 m². Qual é a pressão?",
    "imagem": null,
    "alternativas": {
      "A": "250 Pa",
      "B": "40 Pa",
      "C": "0,0025 Pa",
      "D": "400 Pa",
      "E": "100 Pa"
    },
    "gabarito": "D",
    "explicacao": "P = F ÷ A = 200 ÷ 0,5 = 400 Pa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C19-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Calor e temperatura",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "A temperatura de um corpo mede:",
    "imagem": null,
    "alternativas": {
      "A": "A massa do corpo",
      "B": "O grau de agitação das partículas que o formam",
      "C": "O volume do corpo",
      "D": "A energia que passa do corpo frio para o quente",
      "E": "A quantidade de calor armazenada"
    },
    "gabarito": "B",
    "explicacao": "Quanto mais agitadas as partículas, maior a temperatura.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C19-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Calor e temperatura",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "O calor é:",
    "imagem": null,
    "alternativas": {
      "A": "A energia térmica que passa do corpo de maior temperatura para o de menor temperatura",
      "B": "Uma substância que existe nos corpos quentes",
      "C": "A energia que passa do corpo mais frio para o mais quente",
      "D": "A temperatura de um corpo",
      "E": "Um tipo de força"
    },
    "gabarito": "A",
    "explicacao": "Calor é energia em trânsito, e sempre vai do mais quente para o mais frio, até chegar ao equilíbrio térmico.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C19-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Calor e temperatura",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Ao nível do mar, a água pura ferve a:",
    "imagem": null,
    "alternativas": {
      "A": "212 °C",
      "B": "0 °C",
      "C": "100 °C",
      "D": "90 °C",
      "E": "50 °C"
    },
    "gabarito": "C",
    "explicacao": "100 °C é a temperatura de ebulição da água ao nível do mar. 212 seria o valor em °F.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C19-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Calor e temperatura",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "25 °C correspondem, na escala Kelvin, a:",
    "imagem": null,
    "alternativas": {
      "A": "373 K",
      "B": "273 K",
      "C": "248 K",
      "D": "25 K",
      "E": "298 K"
    },
    "gabarito": "E",
    "explicacao": "K = °C + 273 = 25 + 273 = 298.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C19-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Calor e temperatura",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "30 °C equivalem a quantos graus Fahrenheit?",
    "imagem": null,
    "alternativas": {
      "A": "62 °F",
      "B": "98 °F",
      "C": "30 °F",
      "D": "86 °F",
      "E": "54 °F"
    },
    "gabarito": "D",
    "explicacao": "F = 1,8 · C + 32 = 1,8 × 30 + 32 = 86.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C20-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Propagação do calor e dilatação",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "O calor passa pelo cabo metálico de uma panela que está no fogo por:",
    "imagem": null,
    "alternativas": {
      "A": "Radiação",
      "B": "Condução",
      "C": "Reflexão",
      "D": "Convecção",
      "E": "Evaporação"
    },
    "gabarito": "B",
    "explicacao": "Na condução, o calor passa de partícula para partícula, em materiais sólidos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C20-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Propagação do calor e dilatação",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "O ar quente sobe e o ar frio desce em um ambiente. Esse movimento é a:",
    "imagem": null,
    "alternativas": {
      "A": "Refração",
      "B": "Radiação",
      "C": "Sublimação",
      "D": "Convecção",
      "E": "Condução"
    },
    "gabarito": "D",
    "explicacao": "Na convecção, o calor é transportado por correntes de líquidos ou gases.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C20-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Propagação do calor e dilatação",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "O calor do Sol chega à Terra principalmente por:",
    "imagem": null,
    "alternativas": {
      "A": "Dilatação",
      "B": "Convecção",
      "C": "Condução",
      "D": "Evaporação",
      "E": "Radiação"
    },
    "gabarito": "E",
    "explicacao": "A radiação (ondas eletromagnéticas) não precisa de meio material, e por isso atravessa o vácuo do espaço.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C20-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Propagação do calor e dilatação",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Por que os trilhos de trem têm pequenas folgas entre uma barra e outra?",
    "imagem": null,
    "alternativas": {
      "A": "Para economizar ferro",
      "B": "Porque os trilhos encolhem com o calor",
      "C": "Porque os trilhos se dilatam quando aquecidos",
      "D": "Para o trem fazer menos barulho",
      "E": "Para que os trilhos conduzam melhor a eletricidade"
    },
    "gabarito": "C",
    "explicacao": "Com o calor, o metal se dilata. Sem folga, os trilhos poderiam entortar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C20-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Propagação do calor e dilatação",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Por que as panelas costumam ter cabo de madeira ou plástico?",
    "imagem": null,
    "alternativas": {
      "A": "Porque são isolantes térmicos e conduzem pouco calor",
      "B": "Porque atraem o calor da chama",
      "C": "Porque são ótimos condutores de calor",
      "D": "Porque são mais pesados que o metal",
      "E": "Porque derretem com facilidade"
    },
    "gabarito": "A",
    "explicacao": "Materiais isolantes conduzem mal o calor, o que evita queimaduras.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C21-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Ondas: som e luz",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual afirmação sobre o som está correta?",
    "imagem": null,
    "alternativas": {
      "A": "O som é uma onda eletromagnética",
      "B": "O som não precisa de nenhum meio para se propagar",
      "C": "O som se propaga no vácuo mais rápido que no ar",
      "D": "O som é uma onda mecânica e não se propaga no vácuo",
      "E": "O som viaja mais rápido que a luz"
    },
    "gabarito": "D",
    "explicacao": "As ondas mecânicas precisam de um meio material (ar, água, sólidos). No vácuo não há o que vibrar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C21-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Ondas: som e luz",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Por que vemos a luz das estrelas, mas não ouvimos o som das explosões no espaço?",
    "imagem": null,
    "alternativas": {
      "A": "Porque o espaço é muito quente",
      "B": "Porque o som é mais rápido que a luz",
      "C": "Porque a luz se propaga no vácuo e o som precisa de um meio material",
      "D": "Porque a luz é um som muito agudo",
      "E": "Porque as estrelas não emitem som"
    },
    "gabarito": "C",
    "explicacao": "A luz é uma onda eletromagnética e viaja no vácuo. O som é uma onda mecânica e não.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C21-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Ondas: som e luz",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "A unidade de frequência de uma onda é o:",
    "imagem": null,
    "alternativas": {
      "A": "Watt (W)",
      "B": "Hertz (Hz)",
      "C": "Joule (J)",
      "D": "Pascal (Pa)",
      "E": "Newton (N)"
    },
    "gabarito": "B",
    "explicacao": "1 Hz é uma oscilação por segundo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C21-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Ondas: som e luz",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "A velocidade da luz no vácuo é de aproximadamente:",
    "imagem": null,
    "alternativas": {
      "A": "340 m/s",
      "B": "300 km/h",
      "C": "3.000 km/h",
      "D": "30.000 km/s",
      "E": "300.000 km/s"
    },
    "gabarito": "E",
    "explicacao": "A luz é a coisa mais rápida que se conhece: cerca de 300 mil quilômetros a cada segundo. 340 m/s é a velocidade do som no ar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C21-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Ondas: som e luz",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Uma onda sonora tem frequência de 200 Hz e comprimento de onda de 1,7 m. Qual é a sua velocidade?",
    "imagem": null,
    "alternativas": {
      "A": "340 m/s",
      "B": "117 m/s",
      "C": "3.400 m/s",
      "D": "201,7 m/s",
      "E": "34 m/s"
    },
    "gabarito": "A",
    "explicacao": "v = λ · f = 1,7 × 200 = 340 m/s, que é a velocidade do som no ar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C22-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Óptica e visão",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "A imagem formada por um espelho plano é:",
    "imagem": null,
    "alternativas": {
      "A": "Virtual e menor que o objeto",
      "B": "Real e menor que o objeto",
      "C": "Real e maior que o objeto",
      "D": "Virtual e do mesmo tamanho do objeto",
      "E": "Real e invertida"
    },
    "gabarito": "D",
    "explicacao": "No espelho plano, a imagem parece estar atrás do espelho, tem o mesmo tamanho e não pode ser projetada em um anteparo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C22-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Óptica e visão",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual lente corrige a hipermetropia?",
    "imagem": null,
    "alternativas": {
      "A": "Convergente",
      "B": "Opaca",
      "C": "Plana",
      "D": "Cilíndrica",
      "E": "Divergente"
    },
    "gabarito": "A",
    "explicacao": "Na hipermetropia a imagem se forma depois da retina, e a lente convergente a traz para a frente.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C22-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Óptica e visão",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Qual lente corrige a miopia?",
    "imagem": null,
    "alternativas": {
      "A": "Plana",
      "B": "Convergente",
      "C": "Divergente",
      "D": "Fosca",
      "E": "Cilíndrica"
    },
    "gabarito": "C",
    "explicacao": "Na miopia a imagem se forma antes da retina, e a lente divergente a empurra para trás.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C22-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Óptica e visão",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Pela lei da reflexão, o ângulo de incidência é:",
    "imagem": null,
    "alternativas": {
      "A": "Sempre zero",
      "B": "Igual ao ângulo de reflexão",
      "C": "A metade do ângulo de reflexão",
      "D": "O dobro do ângulo de reflexão",
      "E": "Sempre 90°"
    },
    "gabarito": "B",
    "explicacao": "Na reflexão regular, o raio incidente e o refletido formam o mesmo ângulo com a normal.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C22-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Óptica e visão",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "A formação de sombras e penumbras evidencia que a luz:",
    "imagem": null,
    "alternativas": {
      "A": "Anda em círculos",
      "B": "Precisa de um meio material",
      "C": "Contorna sempre os obstáculos",
      "D": "Não pode ser bloqueada",
      "E": "Se propaga em linha reta"
    },
    "gabarito": "E",
    "explicacao": "Como a luz não faz curvas ao passar por um obstáculo, forma-se uma região escura atrás dele.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C23-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Eletricidade e Lei de Ohm",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "A corrente elétrica em um fio metálico é:",
    "imagem": null,
    "alternativas": {
      "A": "O movimento ordenado de elétrons",
      "B": "O movimento de prótons no núcleo",
      "C": "O calor do fio",
      "D": "O peso dos elétrons",
      "E": "A luz emitida pelo fio"
    },
    "gabarito": "A",
    "explicacao": "Nos metais, os elétrons livres se movem em um sentido quando há uma diferença de potencial.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C23-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Eletricidade e Lei de Ohm",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual é a unidade de medida da corrente elétrica?",
    "imagem": null,
    "alternativas": {
      "A": "Watt (W)",
      "B": "Volt (V)",
      "C": "Ohm (Ω)",
      "D": "Joule (J)",
      "E": "Ampère (A)"
    },
    "gabarito": "E",
    "explicacao": "Volt mede a tensão, ohm mede a resistência e watt mede a potência.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C23-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Eletricidade e Lei de Ohm",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um resistor de 4 Ω está ligado a 12 V. Qual é a corrente que passa por ele?",
    "imagem": null,
    "alternativas": {
      "A": "48 A",
      "B": "0,33 A",
      "C": "3 A",
      "D": "16 A",
      "E": "8 A"
    },
    "gabarito": "C",
    "explicacao": "Lei de Ohm: i = U ÷ R = 12 ÷ 4 = 3 A.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C23-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Eletricidade e Lei de Ohm",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um resistor de 10 Ω é percorrido por uma corrente de 2 A. Qual é a tensão entre seus terminais?",
    "imagem": null,
    "alternativas": {
      "A": "12 V",
      "B": "8 V",
      "C": "0,2 V",
      "D": "20 V",
      "E": "5 V"
    },
    "gabarito": "D",
    "explicacao": "U = R · i = 10 × 2 = 20 V.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C23-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Eletricidade e Lei de Ohm",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Um chuveiro ligado em 220 V é percorrido por uma corrente de 10 A. Qual é a sua resistência?",
    "imagem": null,
    "alternativas": {
      "A": "210 Ω",
      "B": "22 Ω",
      "C": "2.200 Ω",
      "D": "230 Ω",
      "E": "0,045 Ω"
    },
    "gabarito": "B",
    "explicacao": "R = U ÷ i = 220 ÷ 10 = 22 Ω.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C24-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Potência e consumo de energia elétrica",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual é a unidade de potência elétrica?",
    "imagem": null,
    "alternativas": {
      "A": "Coulomb (C)",
      "B": "Ohm (Ω)",
      "C": "Watt (W)",
      "D": "Ampère (A)",
      "E": "Volt (V)"
    },
    "gabarito": "C",
    "explicacao": "Potência mede a rapidez com que a energia é usada: 1 W é 1 joule por segundo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C24-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Potência e consumo de energia elétrica",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Um aparelho ligado a 220 V é percorrido por uma corrente de 5 A. Qual é a sua potência?",
    "imagem": null,
    "alternativas": {
      "A": "1.100 W",
      "B": "11.000 W",
      "C": "44 W",
      "D": "110 W",
      "E": "225 W"
    },
    "gabarito": "A",
    "explicacao": "P = U · i = 220 × 5 = 1.100 W.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C24-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Potência e consumo de energia elétrica",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Uma lâmpada de 100 W fica ligada por 10 horas. Quantos kWh ela consome?",
    "imagem": null,
    "alternativas": {
      "A": "0,1 kWh",
      "B": "1 kWh",
      "C": "100 kWh",
      "D": "1.000 kWh",
      "E": "10 kWh"
    },
    "gabarito": "B",
    "explicacao": "100 W = 0,1 kW. Energia = 0,1 × 10 = 1 kWh.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C24-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Potência e consumo de energia elétrica",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um chuveiro de 5.000 W é usado por 30 minutos por dia. Quantos kWh consome por dia?",
    "imagem": null,
    "alternativas": {
      "A": "0,25 kWh",
      "B": "150 kWh",
      "C": "25 kWh",
      "D": "10 kWh",
      "E": "2,5 kWh"
    },
    "gabarito": "E",
    "explicacao": "5.000 W = 5 kW. 30 min = 0,5 h. Energia = 5 × 0,5 = 2,5 kWh.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C24-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Potência e consumo de energia elétrica",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Um aparelho consome 2,5 kWh por dia. Em 30 dias, com tarifa de R$ 0,80 por kWh, quanto se paga?",
    "imagem": null,
    "alternativas": {
      "A": "R$ 2,00",
      "B": "R$ 6,00",
      "C": "R$ 600,00",
      "D": "R$ 60,00",
      "E": "R$ 75,00"
    },
    "gabarito": "D",
    "explicacao": "Em 30 dias: 2,5 × 30 = 75 kWh. 75 × 0,80 = R$ 60,00. Os R$ 75,00 seriam a conta se a tarifa fosse R$ 1,00 por kWh.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C25-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Magnetismo e eletromagnetismo",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "O que acontece quando se aproximam dois polos norte de dois ímãs?",
    "imagem": null,
    "alternativas": {
      "A": "Eles se atraem",
      "B": "Eles se anulam",
      "C": "Eles se fundem",
      "D": "Nada acontece",
      "E": "Eles se repelem"
    },
    "gabarito": "E",
    "explicacao": "Polos iguais se repelem e polos diferentes se atraem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C25-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Magnetismo e eletromagnetismo",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "A agulha de uma bússola aponta para o norte porque:",
    "imagem": null,
    "alternativas": {
      "A": "A gravidade puxa a agulha para o norte",
      "B": "A agulha é feita de ouro",
      "C": "A Terra se comporta como um grande ímã",
      "D": "O Sol atrai a agulha",
      "E": "O vento empurra a agulha"
    },
    "gabarito": "C",
    "explicacao": "O campo magnético da Terra orienta a agulha, que é um pequeno ímã.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C25-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Magnetismo e eletromagnetismo",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Ao partir um ímã ao meio, obtêm-se:",
    "imagem": null,
    "alternativas": {
      "A": "Dois pedaços sem propriedades magnéticas",
      "B": "Dois ímãs completos, cada um com polo norte e polo sul",
      "C": "Um ímã com dois polos norte",
      "D": "Um ímã só com polo norte e outro só com polo sul",
      "E": "Um ímã e um pedaço de ferro comum"
    },
    "gabarito": "B",
    "explicacao": "Não é possível isolar um polo magnético: cada pedaço volta a ter os dois polos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C25-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Magnetismo e eletromagnetismo",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "Um fio percorrido por corrente elétrica cria ao seu redor:",
    "imagem": null,
    "alternativas": {
      "A": "Uma pressão",
      "B": "Um campo gravitacional",
      "C": "Uma onda sonora",
      "D": "Um campo magnético",
      "E": "Uma carga elétrica parada"
    },
    "gabarito": "D",
    "explicacao": "É o que mostrou o experimento de Oersted. O eletroímã usa esse efeito.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C25-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Magnetismo e eletromagnetismo",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "O princípio de funcionamento dos geradores das usinas elétricas é:",
    "imagem": null,
    "alternativas": {
      "A": "A indução eletromagnética",
      "B": "A pressão atmosférica",
      "C": "A reflexão da luz",
      "D": "A fotossíntese",
      "E": "A dilatação térmica"
    },
    "gabarito": "A",
    "explicacao": "Ao girar uma bobina dentro de um campo magnético, o fluxo magnético varia e surge corrente elétrica (Faraday).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C26-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Energia e máquinas simples",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Qual forma de energia está associada ao movimento de um corpo?",
    "imagem": null,
    "alternativas": {
      "A": "Energia nuclear",
      "B": "Energia potencial gravitacional",
      "C": "Energia química",
      "D": "Energia térmica",
      "E": "Energia cinética"
    },
    "gabarito": "E",
    "explicacao": "Quanto maior a massa e a velocidade, maior a energia cinética.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C26-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Energia e máquinas simples",
    "area": "Física",
    "dificuldade": "facil",
    "enunciado": "Uma pedra no alto de um prédio tem:",
    "imagem": null,
    "alternativas": {
      "A": "Nenhuma energia",
      "B": "Energia sonora",
      "C": "Energia potencial gravitacional",
      "D": "Energia nuclear",
      "E": "Energia cinética apenas"
    },
    "gabarito": "C",
    "explicacao": "A energia potencial gravitacional depende da massa e da altura.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C26-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Energia e máquinas simples",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "O princípio da conservação da energia diz que:",
    "imagem": null,
    "alternativas": {
      "A": "Toda a energia se transforma em calor e some",
      "B": "A energia desaparece em toda transformação",
      "C": "A energia pode ser criada do nada",
      "D": "A energia não se cria nem se destrói, apenas se transforma",
      "E": "Só existe energia nos corpos em movimento"
    },
    "gabarito": "D",
    "explicacao": "Em um pêndulo, por exemplo, a energia potencial vira cinética e vice-versa, e o total se mantém (descontadas as perdas por atrito, que viram calor).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C26-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Energia e máquinas simples",
    "area": "Física",
    "dificuldade": "media",
    "enunciado": "As máquinas simples, como a alavanca e a polia, servem para:",
    "imagem": null,
    "alternativas": {
      "A": "Facilitar o trabalho, mudando a força necessária ou sua direção",
      "B": "Eliminar o peso dos objetos",
      "C": "Reduzir a gravidade",
      "D": "Criar energia",
      "E": "Aumentar a massa dos objetos"
    },
    "gabarito": "A",
    "explicacao": "Elas não criam energia: ajudam a realizar o trabalho com menos força ou em uma direção mais conveniente.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C26-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Energia e máquinas simples",
    "area": "Física",
    "dificuldade": "dificil",
    "enunciado": "Qual é a energia cinética de um corpo de 2 kg que se move a 3 m/s?",
    "imagem": null,
    "alternativas": {
      "A": "18 J",
      "B": "9 J",
      "C": "6 J",
      "D": "12 J",
      "E": "3 J"
    },
    "gabarito": "B",
    "explicacao": "Ec = m·v² ÷ 2 = 2 × 9 ÷ 2 = 9 J.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C27-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Estados físicos da matéria",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual estado físico tem forma e volume definidos?",
    "imagem": null,
    "alternativas": {
      "A": "Plasma",
      "B": "Líquido",
      "C": "Gasoso",
      "D": "Nenhum deles",
      "E": "Sólido"
    },
    "gabarito": "E",
    "explicacao": "No sólido, as partículas estão muito próximas e organizadas, e o material mantém forma e volume.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C27-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Estados físicos da matéria",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "A passagem do estado líquido para o gasoso é chamada de:",
    "imagem": null,
    "alternativas": {
      "A": "Sublimação",
      "B": "Condensação",
      "C": "Vaporização",
      "D": "Solidificação",
      "E": "Fusão"
    },
    "gabarito": "C",
    "explicacao": "Fusão é sólido → líquido, solidificação é líquido → sólido e condensação é gás → líquido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C27-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Estados físicos da matéria",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O gelo-seco passa direto do estado sólido para o gasoso. Essa mudança é a:",
    "imagem": null,
    "alternativas": {
      "A": "Fusão",
      "B": "Sublimação",
      "C": "Solidificação",
      "D": "Vaporização",
      "E": "Condensação"
    },
    "gabarito": "B",
    "explicacao": "Na sublimação, o sólido vira gás sem passar pelo estado líquido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C27-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Estados físicos da matéria",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "As gotas de água que aparecem do lado de fora de um copo gelado se formam por:",
    "imagem": null,
    "alternativas": {
      "A": "Sublimação do gelo",
      "B": "Fusão do vidro",
      "C": "Passagem da água do copo através do vidro",
      "D": "Condensação do vapor de água do ar",
      "E": "Evaporação da água do copo"
    },
    "gabarito": "D",
    "explicacao": "O vapor de água do ar perde calor ao encostar no copo frio e vira líquido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C27-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Estados físicos da matéria",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Durante a fusão do gelo a 0 °C, enquanto ainda houver gelo, a temperatura:",
    "imagem": null,
    "alternativas": {
      "A": "Permanece constante",
      "B": "Oscila sem parar",
      "C": "Vai a 100 °C",
      "D": "Diminui continuamente",
      "E": "Aumenta continuamente"
    },
    "gabarito": "A",
    "explicacao": "A energia fornecida é usada para mudar o estado físico, e não para aumentar a temperatura.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C28-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Misturas e métodos de separação",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual das alternativas é uma mistura homogênea?",
    "imagem": null,
    "alternativas": {
      "A": "Água e areia",
      "B": "Água e óleo",
      "C": "Água com sal totalmente dissolvido",
      "D": "Salada de frutas",
      "E": "Granito"
    },
    "gabarito": "C",
    "explicacao": "Em uma mistura homogênea se vê uma única fase. Água e óleo, água e areia e a salada têm mais de uma fase.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C28-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Misturas e métodos de separação",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual método é indicado para separar água e óleo?",
    "imagem": null,
    "alternativas": {
      "A": "Filtração",
      "B": "Decantação",
      "C": "Peneiração",
      "D": "Separação magnética",
      "E": "Evaporação"
    },
    "gabarito": "B",
    "explicacao": "O óleo é menos denso e fica por cima. Com um funil de separação, a camada de baixo é escoada.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C28-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Misturas e métodos de separação",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Como se separa areia misturada com água?",
    "imagem": null,
    "alternativas": {
      "A": "Por catação",
      "B": "Por destilação fracionada",
      "C": "Por sublimação",
      "D": "Por filtração",
      "E": "Por separação magnética"
    },
    "gabarito": "D",
    "explicacao": "O filtro deixa a água passar e retém a areia.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C28-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Misturas e métodos de separação",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Como se obtém o sal de cozinha da água do mar nas salinas?",
    "imagem": null,
    "alternativas": {
      "A": "Pela decantação do sal",
      "B": "Por catação",
      "C": "Por filtração simples",
      "D": "Por separação magnética",
      "E": "Pela evaporação da água"
    },
    "gabarito": "E",
    "explicacao": "O sol evapora a água, e o sal cristaliza e fica depositado.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C28-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Misturas e métodos de separação",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Qual método separa os componentes do petróleo?",
    "imagem": null,
    "alternativas": {
      "A": "Destilação fracionada",
      "B": "Peneiração",
      "C": "Catação",
      "D": "Filtração",
      "E": "Decantação"
    },
    "gabarito": "A",
    "explicacao": "Cada componente do petróleo ferve em uma temperatura diferente e é recolhido em uma altura da torre de destilação.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C29-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Substâncias e elementos químicos",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual destas é uma substância simples?",
    "imagem": null,
    "alternativas": {
      "A": "O₂ (gás oxigênio)",
      "B": "CO₂ (gás carbônico)",
      "C": "C₆H₁₂O₆ (glicose)",
      "D": "NaCl (sal de cozinha)",
      "E": "H₂O (água)"
    },
    "gabarito": "A",
    "explicacao": "Substância simples é formada por átomos de um único elemento. As outras têm dois ou mais elementos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C29-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Substâncias e elementos químicos",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "A fórmula H₂O indica que a molécula de água tem:",
    "imagem": null,
    "alternativas": {
      "A": "3 átomos de hidrogênio",
      "B": "2 átomos de hidrogênio e 1 de oxigênio",
      "C": "1 átomo de hidrogênio e 2 de oxigênio",
      "D": "1 átomo de hidrogênio e 1 de hélio",
      "E": "2 átomos de oxigênio"
    },
    "gabarito": "B",
    "explicacao": "O número escrito embaixo, à direita do símbolo, indica a quantidade de átomos daquele elemento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C29-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Substâncias e elementos químicos",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Qual é o símbolo químico do ferro?",
    "imagem": null,
    "alternativas": {
      "A": "Fo",
      "B": "Fi",
      "C": "Fe",
      "D": "Fr",
      "E": "F"
    },
    "gabarito": "C",
    "explicacao": "Fe vem do latim ferrum. O símbolo F é do flúor.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C29-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Substâncias e elementos químicos",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Quantos átomos há em uma molécula de CO₂?",
    "imagem": null,
    "alternativas": {
      "A": "2",
      "B": "4",
      "C": "1",
      "D": "12",
      "E": "3"
    },
    "gabarito": "E",
    "explicacao": "Há 1 átomo de carbono e 2 de oxigênio: 1 + 2 = 3.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C29-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Substâncias e elementos químicos",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Quantos átomos há ao todo em uma molécula de glicose, C₆H₁₂O₆?",
    "imagem": null,
    "alternativas": {
      "A": "6",
      "B": "18",
      "C": "3",
      "D": "24",
      "E": "12"
    },
    "gabarito": "D",
    "explicacao": "6 de carbono + 12 de hidrogênio + 6 de oxigênio = 24.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C30-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Estrutura do átomo",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "O experimento de Rutherford concluiu que o átomo:",
    "imagem": null,
    "alternativas": {
      "A": "É formado só por nêutrons",
      "B": "Tem um núcleo pequeno, denso e positivo, e uma grande região vazia ao redor",
      "C": "É um “pudim de passas”",
      "D": "Não tem partículas com carga elétrica",
      "E": "É uma esfera maciça e indivisível"
    },
    "gabarito": "B",
    "explicacao": "A maioria das partículas atravessou a lâmina de ouro, e poucas voltaram. Isso mostrou um núcleo muito pequeno e denso.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C30-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Estrutura do átomo",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual partícula do átomo tem carga elétrica positiva?",
    "imagem": null,
    "alternativas": {
      "A": "Próton",
      "B": "Fóton",
      "C": "Elétron",
      "D": "Nêutron",
      "E": "Molécula"
    },
    "gabarito": "A",
    "explicacao": "O próton é positivo, o elétron é negativo e o nêutron não tem carga.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C30-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Estrutura do átomo",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O número atômico (Z) de um elemento indica:",
    "imagem": null,
    "alternativas": {
      "A": "O número de camadas eletrônicas",
      "B": "A soma de prótons e nêutrons",
      "C": "A massa em gramas",
      "D": "O número de prótons no núcleo",
      "E": "O número de nêutrons"
    },
    "gabarito": "D",
    "explicacao": "Z identifica o elemento: todo átomo de carbono, por exemplo, tem 6 prótons.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C30-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Estrutura do átomo",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Um átomo tem número atômico 11 e número de massa 23. Quantos nêutrons ele tem?",
    "imagem": null,
    "alternativas": {
      "A": "10",
      "B": "23",
      "C": "12",
      "D": "34",
      "E": "11"
    },
    "gabarito": "C",
    "explicacao": "Nêutrons = A − Z = 23 − 11 = 12.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C30-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Estrutura do átomo",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Um átomo neutro tem 17 prótons e 18 nêutrons. Qual é o seu número de massa?",
    "imagem": null,
    "alternativas": {
      "A": "17",
      "B": "18",
      "C": "52",
      "D": "36",
      "E": "35"
    },
    "gabarito": "E",
    "explicacao": "A = prótons + nêutrons = 17 + 18 = 35. Sendo neutro, ele também tem 17 elétrons.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C31-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Tabela periódica",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Na tabela periódica atual, os elementos estão organizados em ordem crescente de:",
    "imagem": null,
    "alternativas": {
      "A": "Número de nêutrons",
      "B": "Número atômico",
      "C": "Cor do elemento",
      "D": "Ano de descoberta",
      "E": "Ordem alfabética"
    },
    "gabarito": "B",
    "explicacao": "A ordem é dada pelo número atômico (Z), que é a quantidade de prótons. Mendeleev havia usado a massa atômica.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C31-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Tabela periódica",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Elementos de uma mesma coluna (grupo) da tabela periódica têm:",
    "imagem": null,
    "alternativas": {
      "A": "O mesmo número de prótons",
      "B": "O mesmo número de massa",
      "C": "Nomes parecidos",
      "D": "Sempre o mesmo estado físico",
      "E": "Propriedades químicas semelhantes"
    },
    "gabarito": "E",
    "explicacao": "Elementos do mesmo grupo têm o mesmo número de elétrons na última camada, por isso reagem de modo parecido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C31-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Tabela periódica",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Qual destes elementos é um gás nobre?",
    "imagem": null,
    "alternativas": {
      "A": "Sódio",
      "B": "Oxigênio",
      "C": "Hélio",
      "D": "Cloro",
      "E": "Ferro"
    },
    "gabarito": "C",
    "explicacao": "Os gases nobres (grupo 18) são muito pouco reativos. O hélio é usado em balões.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C31-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Tabela periódica",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Qual propriedade é típica dos metais?",
    "imagem": null,
    "alternativas": {
      "A": "Serem isolantes elétricos",
      "B": "Serem sempre gases",
      "C": "Não terem brilho",
      "D": "Boa condução de eletricidade e de calor",
      "E": "Serem sempre líquidos"
    },
    "gabarito": "D",
    "explicacao": "Os metais brilham, conduzem bem eletricidade e calor e, em geral, são maleáveis.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C31-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Tabela periódica",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Sódio (Na) e potássio (K) estão no mesmo grupo da tabela. Por isso:",
    "imagem": null,
    "alternativas": {
      "A": "Têm propriedades semelhantes, como a alta reatividade com a água",
      "B": "São não metais",
      "C": "São gases nobres",
      "D": "Têm o mesmo número de massa",
      "E": "Têm o mesmo número de prótons"
    },
    "gabarito": "A",
    "explicacao": "Os dois são metais alcalinos, com 1 elétron na última camada, e reagem de forma intensa com a água.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C32-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Ligações químicas",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Na ligação iônica ocorre:",
    "imagem": null,
    "alternativas": {
      "A": "Troca de prótons",
      "B": "Compartilhamento de elétrons",
      "C": "Transferência de elétrons de um átomo para outro",
      "D": "Divisão do núcleo",
      "E": "Perda de nêutrons"
    },
    "gabarito": "C",
    "explicacao": "Um átomo cede elétrons e outro os recebe. Os íons formados, de cargas opostas, se atraem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C32-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Ligações químicas",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Na ligação covalente, os átomos:",
    "imagem": null,
    "alternativas": {
      "A": "Perdem os prótons",
      "B": "Compartilham pares de elétrons",
      "C": "Trocam de núcleo",
      "D": "Não interagem",
      "E": "Transferem todos os elétrons"
    },
    "gabarito": "B",
    "explicacao": "A ligação covalente é típica entre não metais, como a da molécula de água.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C32-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Ligações químicas",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O sal de cozinha (NaCl), formado por um metal e um não metal, tem ligação:",
    "imagem": null,
    "alternativas": {
      "A": "De hidrogênio",
      "B": "Metálica",
      "C": "Covalente",
      "D": "Iônica",
      "E": "Nuclear"
    },
    "gabarito": "D",
    "explicacao": "O sódio cede um elétron ao cloro, formando Na⁺ e Cl⁻.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C32-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Ligações químicas",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Os metais conduzem corrente elétrica porque:",
    "imagem": null,
    "alternativas": {
      "A": "Possuem elétrons livres",
      "B": "São sempre magnéticos",
      "C": "Têm prótons livres",
      "D": "Não têm átomos",
      "E": "São sempre líquidos"
    },
    "gabarito": "A",
    "explicacao": "Na ligação metálica, os elétrons da última camada se movem livremente entre os átomos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C32-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Ligações químicas",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Segundo a regra do octeto, os átomos tendem a ficar com:",
    "imagem": null,
    "alternativas": {
      "A": "18 elétrons no núcleo",
      "B": "1 elétron na última camada",
      "C": "Nenhum elétron",
      "D": "Mais prótons que elétrons",
      "E": "8 elétrons na última camada"
    },
    "gabarito": "E",
    "explicacao": "Com 8 elétrons na camada de valência, o átomo fica estável, como um gás nobre (o hélio é a exceção, com 2).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C33-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Transformações físicas e químicas",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual destes fenômenos é uma transformação química?",
    "imagem": null,
    "alternativas": {
      "A": "A evaporação da água",
      "B": "A dissolução do açúcar na água",
      "C": "A queima de uma folha de papel",
      "D": "A quebra de um vidro",
      "E": "O derretimento do gelo"
    },
    "gabarito": "C",
    "explicacao": "Na queima há formação de novas substâncias, como cinzas, gás carbônico e vapor de água.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C33-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Transformações físicas e químicas",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Qual é um indício de que ocorreu uma reação química?",
    "imagem": null,
    "alternativas": {
      "A": "Mudança de lugar de um objeto",
      "B": "Liberação de gás ou mudança de cor",
      "C": "Corte em pedaços menores",
      "D": "Aquecimento de um metal sem alterar sua composição",
      "E": "Mudança de formato do material"
    },
    "gabarito": "B",
    "explicacao": "Formação de gás, mudança de cor, formação de sólido, liberação de luz ou de calor podem indicar reação.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C33-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Transformações físicas e químicas",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O enferrujamento de um prego é uma:",
    "imagem": null,
    "alternativas": {
      "A": "Transformação química",
      "B": "Transformação física",
      "C": "Separação de mistura",
      "D": "Mudança de estado físico",
      "E": "Mistura homogênea"
    },
    "gabarito": "A",
    "explicacao": "O ferro reage com o oxigênio e a umidade e forma a ferrugem, uma substância nova.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C33-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Transformações físicas e químicas",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Em uma transformação física:",
    "imagem": null,
    "alternativas": {
      "A": "Os átomos são destruídos",
      "B": "Sempre há liberação de gás",
      "C": "Sempre se formam novas substâncias",
      "D": "Sempre há mudança de cor",
      "E": "A composição das substâncias não muda"
    },
    "gabarito": "E",
    "explicacao": "Quando a água congela, por exemplo, continua sendo H₂O.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C33-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Transformações físicas e químicas",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Qual alternativa traz apenas fenômenos físicos?",
    "imagem": null,
    "alternativas": {
      "A": "Enferrujar um prego e quebrar um vidro",
      "B": "Digestão de alimentos e evaporação da água",
      "C": "Queima da madeira e fusão do gelo",
      "D": "Evaporação da água e fusão do gelo",
      "E": "Apodrecer uma fruta e dissolver açúcar"
    },
    "gabarito": "D",
    "explicacao": "Evaporar e derreter são mudanças de estado e não formam substâncias novas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C34-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Ácidos, bases e pH",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Uma solução com pH igual a 3 é:",
    "imagem": null,
    "alternativas": {
      "A": "Básica",
      "B": "Alcalina",
      "C": "Salina",
      "D": "Ácida",
      "E": "Neutra"
    },
    "gabarito": "D",
    "explicacao": "pH menor que 7 é ácido, 7 é neutro e maior que 7 é básico (alcalino).",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C34-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Ácidos, bases e pH",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "A água pura, a 25 °C, tem pH igual a:",
    "imagem": null,
    "alternativas": {
      "A": "7",
      "B": "0",
      "C": "3",
      "D": "10",
      "E": "14"
    },
    "gabarito": "A",
    "explicacao": "O pH 7 corresponde a uma solução neutra.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C34-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Ácidos, bases e pH",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Qual destas substâncias tem caráter ácido?",
    "imagem": null,
    "alternativas": {
      "A": "Leite de magnésia",
      "B": "Sabão",
      "C": "Água sanitária",
      "D": "Soda cáustica",
      "E": "Suco de limão"
    },
    "gabarito": "E",
    "explicacao": "O limão tem ácido cítrico. Sabão, leite de magnésia, água sanitária e soda cáustica são básicos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C34-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Ácidos, bases e pH",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O papel de tornassol azul, em contato com um ácido, fica:",
    "imagem": null,
    "alternativas": {
      "A": "Verde",
      "B": "Amarelo",
      "C": "Vermelho",
      "D": "Incolor",
      "E": "Azul"
    },
    "gabarito": "C",
    "explicacao": "O tornassol é um indicador: azul em meio básico e vermelho em meio ácido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C34-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Ácidos, bases e pH",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Qual das soluções é a mais básica (alcalina)?",
    "imagem": null,
    "alternativas": {
      "A": "Solução de pH 2",
      "B": "Solução de pH 13",
      "C": "Solução de pH 10",
      "D": "Solução de pH 5",
      "E": "Solução de pH 7"
    },
    "gabarito": "B",
    "explicacao": "Quanto maior o pH acima de 7, mais básica é a solução.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C35-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Densidade",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "A densidade de um material é calculada por:",
    "imagem": null,
    "alternativas": {
      "A": "Peso dividido pela altura",
      "B": "Massa dividida pelo volume",
      "C": "Volume dividido pela massa",
      "D": "Massa somada ao volume",
      "E": "Massa multiplicada pelo volume"
    },
    "gabarito": "B",
    "explicacao": "d = m ÷ V. A unidade mais comum é g/cm³.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C35-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Densidade",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Por que o gelo flutua na água líquida?",
    "imagem": null,
    "alternativas": {
      "A": "Porque não tem massa",
      "B": "Porque é mais pesado que a água",
      "C": "Porque é menos denso que a água líquida",
      "D": "Porque é feito de outra substância",
      "E": "Porque está mais quente"
    },
    "gabarito": "C",
    "explicacao": "Ao congelar, a água ocupa mais volume, e a densidade diminui.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C35-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Densidade",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Um objeto tem massa de 200 g e volume de 100 cm³. Qual é a sua densidade?",
    "imagem": null,
    "alternativas": {
      "A": "300 g/cm³",
      "B": "20 g/cm³",
      "C": "0,5 g/cm³",
      "D": "2 g/cm³",
      "E": "100 g/cm³"
    },
    "gabarito": "D",
    "explicacao": "d = 200 ÷ 100 = 2 g/cm³.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C35-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Densidade",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "O óleo de cozinha flutua na água porque:",
    "imagem": null,
    "alternativas": {
      "A": "Dissolve-se na água",
      "B": "É mais denso que a água",
      "C": "Não tem massa",
      "D": "É mais frio que a água",
      "E": "É menos denso que a água"
    },
    "gabarito": "E",
    "explicacao": "O material menos denso fica na parte de cima.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C35-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Densidade",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Qual é a massa de 50 cm³ de uma substância com densidade 0,8 g/cm³?",
    "imagem": null,
    "alternativas": {
      "A": "40 g",
      "B": "4 g",
      "C": "50,8 g",
      "D": "62,5 g",
      "E": "0,016 g"
    },
    "gabarito": "A",
    "explicacao": "m = d · V = 0,8 × 50 = 40 g.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C36-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Soluções e concentração",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Na mistura de água com sal, a água é o:",
    "imagem": null,
    "alternativas": {
      "A": "Soluto",
      "B": "Reagente limitante",
      "C": "Solvente",
      "D": "Precipitado",
      "E": "Catalisador"
    },
    "gabarito": "C",
    "explicacao": "O solvente é o componente que dissolve e o soluto é o que é dissolvido.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C36-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Soluções e concentração",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Uma solução saturada é aquela que:",
    "imagem": null,
    "alternativas": {
      "A": "Não consegue dissolver mais soluto naquela temperatura",
      "B": "Não tem soluto",
      "C": "Está sempre fervendo",
      "D": "É sempre incolor",
      "E": "Tem mais solvente que soluto"
    },
    "gabarito": "A",
    "explicacao": "Se mais soluto for adicionado a uma solução saturada, ele se deposita no fundo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C36-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Soluções e concentração",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Dissolveram-se 20 g de sal em 0,5 L de solução. Qual é a concentração?",
    "imagem": null,
    "alternativas": {
      "A": "20,5 g/L",
      "B": "10 g/L",
      "C": "25 g/L",
      "D": "0,025 g/L",
      "E": "40 g/L"
    },
    "gabarito": "E",
    "explicacao": "C = m ÷ V = 20 ÷ 0,5 = 40 g/L.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C36-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Soluções e concentração",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Ao adicionar água a um suco concentrado, a concentração do suco:",
    "imagem": null,
    "alternativas": {
      "A": "Dobra",
      "B": "Diminui",
      "C": "Fica sempre igual",
      "D": "Torna-se zero",
      "E": "Aumenta"
    },
    "gabarito": "B",
    "explicacao": "Com mais solvente, a mesma quantidade de soluto fica espalhada em mais volume.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C36-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Soluções e concentração",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Preparam-se 2 L de solução com 30 g de sal. Qual é a concentração?",
    "imagem": null,
    "alternativas": {
      "A": "0,07 g/L",
      "B": "60 g/L",
      "C": "28 g/L",
      "D": "15 g/L",
      "E": "32 g/L"
    },
    "gabarito": "D",
    "explicacao": "C = 30 ÷ 2 = 15 g/L.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C37-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Combustão",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Quais são os três elementos do “triângulo do fogo”?",
    "imagem": null,
    "alternativas": {
      "A": "Água, ar e terra",
      "B": "Combustível, comburente (oxigênio) e calor",
      "C": "Oxigênio, nitrogênio e gelo",
      "D": "Calor, frio e vento",
      "E": "Combustível, água e frio"
    },
    "gabarito": "B",
    "explicacao": "Sem qualquer um dos três, o fogo não se mantém.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C37-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Combustão",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Na combustão completa do metano, os produtos são:",
    "imagem": null,
    "alternativas": {
      "A": "Oxigênio e nitrogênio",
      "B": "Monóxido de carbono e hidrogênio",
      "C": "Carvão e oxigênio",
      "D": "Apenas água",
      "E": "Gás carbônico e água"
    },
    "gabarito": "E",
    "explicacao": "CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C37-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Combustão",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "A combustão incompleta pode liberar um gás tóxico, incolor e sem cheiro chamado:",
    "imagem": null,
    "alternativas": {
      "A": "Vapor de água",
      "B": "Gás oxigênio",
      "C": "Monóxido de carbono",
      "D": "Gás hélio",
      "E": "Gás nitrogênio"
    },
    "gabarito": "C",
    "explicacao": "Com pouco oxigênio, o carbono forma CO, que é perigoso em ambientes fechados.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C37-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Combustão",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Abafar o fogo com um cobertor ajuda a apagá-lo porque:",
    "imagem": null,
    "alternativas": {
      "A": "Retira o oxigênio (comburente)",
      "B": "Produz mais calor",
      "C": "Aumenta a temperatura",
      "D": "Adiciona nitrogênio",
      "E": "Retira o combustível"
    },
    "gabarito": "A",
    "explicacao": "Sem oxigênio, a combustão não continua.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C37-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Combustão",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Por que não se deve usar água para apagar fogo em óleo na panela?",
    "imagem": null,
    "alternativas": {
      "A": "A água só apaga fogo em metais",
      "B": "A água é inflamável",
      "C": "A água reage e produz mais óleo",
      "D": "A água é mais densa, afunda, vaporiza de repente e espalha o óleo em chamas",
      "E": "O óleo absorve a água sem problema"
    },
    "gabarito": "D",
    "explicacao": "A água vira vapor rapidamente e joga o óleo quente para fora da panela.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C38-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Conservação das massas (Lavoisier)",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "A lei de Lavoisier diz que, em uma reação química em sistema fechado:",
    "imagem": null,
    "alternativas": {
      "A": "A massa dos produtos é sempre maior",
      "B": "A massa dobra",
      "C": "Os átomos são destruídos",
      "D": "A massa dos reagentes some",
      "E": "A massa total dos reagentes é igual à massa total dos produtos"
    },
    "gabarito": "E",
    "explicacao": "“Na natureza nada se cria, nada se perde, tudo se transforma.” Os átomos se reorganizam, mas a massa se mantém.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C38-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Conservação das massas (Lavoisier)",
    "area": "Química",
    "dificuldade": "facil",
    "enunciado": "Em um recipiente fechado, 4 g de hidrogênio reagem com 32 g de oxigênio e formam água. Qual é a massa de água formada?",
    "imagem": null,
    "alternativas": {
      "A": "8 g",
      "B": "36 g",
      "C": "32 g",
      "D": "128 g",
      "E": "28 g"
    },
    "gabarito": "B",
    "explicacao": "Pela conservação das massas, 4 + 32 = 36 g.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C38-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Conservação das massas (Lavoisier)",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Qual é a equação balanceada da formação da água?",
    "imagem": null,
    "alternativas": {
      "A": "H₂ + 2 O₂ → 2 H₂O",
      "B": "2 H₂ + 2 O₂ → 2 H₂O",
      "C": "2 H₂ + O₂ → 2 H₂O",
      "D": "H₂ + O₂ → H₂O",
      "E": "4 H₂ + O₂ → 2 H₂O"
    },
    "gabarito": "C",
    "explicacao": "Há 4 átomos de H e 2 de O nos dois lados. Nas outras, o número de átomos não bate.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C38-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Conservação das massas (Lavoisier)",
    "area": "Química",
    "dificuldade": "media",
    "enunciado": "Ao queimar palha de aço em um recipiente aberto, a massa do sólido aumenta porque:",
    "imagem": null,
    "alternativas": {
      "A": "O ferro cria matéria nova",
      "B": "A palha de aço absorve luz",
      "C": "O ferro se transforma em ouro",
      "D": "O ferro se combina com o oxigênio do ar",
      "E": "O oxigênio desaparece"
    },
    "gabarito": "D",
    "explicacao": "O óxido de ferro formado tem a massa do ferro mais a do oxigênio que reagiu.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C38-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Conservação das massas (Lavoisier)",
    "area": "Química",
    "dificuldade": "dificil",
    "enunciado": "Uma vela queimando em ambiente aberto parece perder massa. Isso não contradiz Lavoisier porque:",
    "imagem": null,
    "alternativas": {
      "A": "Os gases produzidos (gás carbônico e vapor de água) escapam para o ar",
      "B": "O fogo anula a massa",
      "C": "A massa realmente desaparece",
      "D": "A lei só vale para metais",
      "E": "A cera vira luz"
    },
    "gabarito": "A",
    "explicacao": "Contando também os gases que saíram, a massa total se conserva.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C39-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Efeito estufa e aquecimento global",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual gás, liberado principalmente pela queima de combustíveis fósseis, mais contribui para o aumento do efeito estufa?",
    "imagem": null,
    "alternativas": {
      "A": "Gás oxigênio",
      "B": "Gás nitrogênio",
      "C": "Gás carbônico (CO₂)",
      "D": "Gás hélio",
      "E": "Gás argônio"
    },
    "gabarito": "C",
    "explicacao": "A queima de petróleo, carvão e gás natural libera grandes quantidades de CO₂.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C39-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Efeito estufa e aquecimento global",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "O efeito estufa natural é importante porque:",
    "imagem": null,
    "alternativas": {
      "A": "Elimina o gás carbônico",
      "B": "Aumenta a camada de ozônio",
      "C": "Impede a chegada da luz do Sol",
      "D": "Mantém a temperatura média da Terra adequada à vida",
      "E": "Faz a Terra girar"
    },
    "gabarito": "D",
    "explicacao": "Sem ele, a Terra seria muito mais fria. O problema é o excesso de gases estufa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C39-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Efeito estufa e aquecimento global",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Qual gás do efeito estufa é liberado pela pecuária e pela decomposição do lixo em aterros?",
    "imagem": null,
    "alternativas": {
      "A": "Oxigênio",
      "B": "Metano",
      "C": "Hélio",
      "D": "Neônio",
      "E": "Nitrogênio"
    },
    "gabarito": "B",
    "explicacao": "O metano é produzido na digestão do gado e na decomposição de matéria orgânica sem oxigênio.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C39-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Efeito estufa e aquecimento global",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Qual é uma consequência do aquecimento global?",
    "imagem": null,
    "alternativas": {
      "A": "Fim das estações do ano",
      "B": "Aumento da camada de gelo nos polos",
      "C": "Resfriamento de todos os oceanos",
      "D": "Diminuição da população de insetos em todo o planeta",
      "E": "Derretimento de geleiras e elevação do nível do mar"
    },
    "gabarito": "E",
    "explicacao": "O derretimento do gelo e a dilatação da água elevam o nível dos oceanos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C39-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Efeito estufa e aquecimento global",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Qual medida ajuda a reduzir as emissões de gás carbônico?",
    "imagem": null,
    "alternativas": {
      "A": "Trocar combustíveis fósseis por fontes renováveis e preservar as florestas",
      "B": "Aumentar as queimadas",
      "C": "Usar mais carvão",
      "D": "Desmatar para ampliar pastagens",
      "E": "Queimar lixo a céu aberto"
    },
    "gabarito": "A",
    "explicacao": "As florestas absorvem CO₂ e as fontes renováveis emitem muito menos gases estufa.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C40-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Poluição do ar e da água",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual destas é uma fonte importante de poluição do ar nas cidades?",
    "imagem": null,
    "alternativas": {
      "A": "Ventilação natural",
      "B": "Energia solar",
      "C": "Chuva",
      "D": "Fumaça de veículos e de indústrias",
      "E": "Arborização das ruas"
    },
    "gabarito": "D",
    "explicacao": "A queima de combustíveis libera gases e partículas que pioram a qualidade do ar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C40-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Poluição do ar e da água",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "O despejo de esgoto em lagos pode causar eutrofização, que é:",
    "imagem": null,
    "alternativas": {
      "A": "O crescimento excessivo de algas e a queda do oxigênio da água",
      "B": "O aumento de peixes na água",
      "C": "A diminuição de nutrientes da água",
      "D": "O congelamento do lago",
      "E": "A purificação natural da água"
    },
    "gabarito": "A",
    "explicacao": "O excesso de nutrientes faz as algas se multiplicarem. Ao morrerem, sua decomposição consome o oxigênio da água, e peixes morrem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C40-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Poluição do ar e da água",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "A inversão térmica agrava a poluição do ar porque:",
    "imagem": null,
    "alternativas": {
      "A": "Faz chover mais",
      "B": "Aquece o ar de cima",
      "C": "Uma camada de ar frio fica presa perto do solo e retém os poluentes",
      "D": "Dispersa os poluentes",
      "E": "Aumenta a velocidade dos ventos"
    },
    "gabarito": "C",
    "explicacao": "Sem a circulação do ar, os poluentes se acumulam perto do chão.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C40-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Poluição do ar e da água",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "O chorume, produzido em lixões, pode:",
    "imagem": null,
    "alternativas": {
      "A": "Purificar a água",
      "B": "Servir como água potável",
      "C": "Resfriar o solo",
      "D": "Aumentar a camada de ozônio",
      "E": "Contaminar o solo e as águas subterrâneas"
    },
    "gabarito": "E",
    "explicacao": "É um líquido escuro e tóxico, que sai da decomposição do lixo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C40-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Poluição do ar e da água",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Qual poluente é emitido principalmente pela queima incompleta de combustíveis em veículos?",
    "imagem": null,
    "alternativas": {
      "A": "Gás hélio",
      "B": "Monóxido de carbono",
      "C": "Vapor de água",
      "D": "Gás nitrogênio",
      "E": "Gás oxigênio"
    },
    "gabarito": "B",
    "explicacao": "O CO é um gás tóxico, incolor e sem cheiro.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C41-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Ciclo da água e tratamento da água",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual é o processo em que a água líquida passa para vapor, no ciclo da água?",
    "imagem": null,
    "alternativas": {
      "A": "Solidificação",
      "B": "Precipitação",
      "C": "Condensação",
      "D": "Evaporação",
      "E": "Infiltração"
    },
    "gabarito": "D",
    "explicacao": "O calor do Sol faz a água de rios, lagos e oceanos evaporar. Plantas também liberam vapor pela transpiração.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C41-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Ciclo da água e tratamento da água",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "A formação das nuvens ocorre por:",
    "imagem": null,
    "alternativas": {
      "A": "Condensação do vapor de água",
      "B": "Combustão dos gases",
      "C": "Filtração da água",
      "D": "Evaporação do solo seco",
      "E": "Fusão do gelo"
    },
    "gabarito": "A",
    "explicacao": "Ao subir e esfriar, o vapor de água vira gotículas, que formam as nuvens.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C41-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Ciclo da água e tratamento da água",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Chuva, granizo e neve são formas de:",
    "imagem": null,
    "alternativas": {
      "A": "Sublimação",
      "B": "Infiltração",
      "C": "Evaporação",
      "D": "Transpiração",
      "E": "Precipitação"
    },
    "gabarito": "E",
    "explicacao": "Precipitação é a água que volta da atmosfera para a superfície.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C41-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Ciclo da água e tratamento da água",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Na estação de tratamento de água, qual etapa faz as partículas de sujeira se juntarem em flocos que depois sedimentam?",
    "imagem": null,
    "alternativas": {
      "A": "Combustão",
      "B": "Floculação",
      "C": "Evaporação",
      "D": "Fluoretação",
      "E": "Destilação"
    },
    "gabarito": "B",
    "explicacao": "Adiciona-se um produto que une as partículas de sujeira em flocos pesados, que decantam e são removidos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C41-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Ciclo da água e tratamento da água",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Por que se adiciona cloro à água tratada?",
    "imagem": null,
    "alternativas": {
      "A": "Para aumentar o sabor doce",
      "B": "Para aumentar a densidade",
      "C": "Para eliminar micro-organismos causadores de doenças",
      "D": "Para dar cor à água",
      "E": "Para remover o sal"
    },
    "gabarito": "C",
    "explicacao": "A cloração é a desinfecção da água, que reduz o risco de doenças como cólera e diarreias.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C42-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Fontes de energia",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual destas é uma fonte de energia renovável?",
    "imagem": null,
    "alternativas": {
      "A": "Energia solar",
      "B": "Carvão mineral",
      "C": "Urânio",
      "D": "Gás natural",
      "E": "Petróleo"
    },
    "gabarito": "A",
    "explicacao": "As fontes renováveis se regeneram em escala de tempo humana, como o Sol, o vento e a água em movimento.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C42-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Fontes de energia",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual é uma fonte de energia não renovável?",
    "imagem": null,
    "alternativas": {
      "A": "Energia solar",
      "B": "Energia das ondas",
      "C": "Petróleo",
      "D": "Energia eólica",
      "E": "Biomassa"
    },
    "gabarito": "C",
    "explicacao": "O petróleo levou milhões de anos para se formar e se esgota com o uso.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C42-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Fontes de energia",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "A principal fonte de geração de eletricidade no Brasil é:",
    "imagem": null,
    "alternativas": {
      "A": "Geotérmica",
      "B": "Energia das marés",
      "C": "Carvão mineral",
      "D": "Energia nuclear",
      "E": "Hidrelétrica"
    },
    "gabarito": "E",
    "explicacao": "Há grande quantidade de rios no país, e a água em movimento é aproveitada para gerar eletricidade.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C42-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Fontes de energia",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "As usinas eólicas geram eletricidade a partir:",
    "imagem": null,
    "alternativas": {
      "A": "Da fissão do urânio",
      "B": "Do movimento do vento",
      "C": "Do calor do solo",
      "D": "Da energia das marés",
      "E": "Da queima de carvão"
    },
    "gabarito": "B",
    "explicacao": "As pás giram com o vento e movem um gerador elétrico.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C42-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Fontes de energia",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Uma desvantagem da queima de combustíveis fósseis é:",
    "imagem": null,
    "alternativas": {
      "A": "Ser fonte inesgotável",
      "B": "Não gerar energia",
      "C": "Gerar apenas oxigênio",
      "D": "A liberação de gás carbônico, que intensifica o efeito estufa",
      "E": "Não poluir"
    },
    "gabarito": "D",
    "explicacao": "Carvão, petróleo e gás natural liberam CO₂ ao queimar.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C43-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Resíduos sólidos e reciclagem",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Na coleta seletiva, o lixo é separado de acordo com:",
    "imagem": null,
    "alternativas": {
      "A": "O horário da coleta",
      "B": "A cor da sacola",
      "C": "O tipo de material",
      "D": "O bairro de origem",
      "E": "O peso total"
    },
    "gabarito": "C",
    "explicacao": "Separar papel, plástico, vidro, metal e orgânicos facilita a reciclagem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C43-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Resíduos sólidos e reciclagem",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual dos materiais pode ser reciclado?",
    "imagem": null,
    "alternativas": {
      "A": "Vidro",
      "B": "Cinzas",
      "C": "Resto de comida",
      "D": "Casca de banana",
      "E": "Folhas secas"
    },
    "gabarito": "A",
    "explicacao": "O vidro pode ser derretido e reaproveitado. Os resíduos orgânicos podem virar adubo, na compostagem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C43-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Resíduos sólidos e reciclagem",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "A compostagem transforma resíduos:",
    "imagem": null,
    "alternativas": {
      "A": "De pilhas em adubo",
      "B": "De metal em papel",
      "C": "De vidro em plástico",
      "D": "Orgânicos em adubo",
      "E": "De plástico em adubo"
    },
    "gabarito": "D",
    "explicacao": "Micro-organismos decompõem a matéria orgânica e produzem composto que enriquece o solo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C43-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Resíduos sólidos e reciclagem",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Na regra dos 3 Rs, “reduzir” significa:",
    "imagem": null,
    "alternativas": {
      "A": "Comprar mais produtos descartáveis",
      "B": "Enterrar o lixo",
      "C": "Jogar mais lixo fora",
      "D": "Queimar o lixo",
      "E": "Diminuir o consumo e a produção de lixo"
    },
    "gabarito": "E",
    "explicacao": "Reduzir, reutilizar e reciclar. Reduzir é a ação que mais diminui o lixo na origem.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C43-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Resíduos sólidos e reciclagem",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Pilhas e baterias não devem ir para o lixo comum porque:",
    "imagem": null,
    "alternativas": {
      "A": "Servem de alimento aos animais",
      "B": "Contêm metais pesados que contaminam o solo e a água",
      "C": "São biodegradáveis",
      "D": "São feitas de papel",
      "E": "Se transformam em adubo"
    },
    "gabarito": "B",
    "explicacao": "Metais pesados, como chumbo e mercúrio, são tóxicos e se acumulam nos seres vivos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C44-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Biodiversidade e extinção",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Biodiversidade é:",
    "imagem": null,
    "alternativas": {
      "A": "A variedade de seres vivos de um ambiente",
      "B": "A temperatura de uma região",
      "C": "A quantidade de rochas",
      "D": "A quantidade de água de um rio",
      "E": "A altura das árvores"
    },
    "gabarito": "A",
    "explicacao": "Inclui a diversidade de espécies, de genes e de ecossistemas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C44-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Biodiversidade e extinção",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual atividade humana é uma das principais causas da perda de biodiversidade?",
    "imagem": null,
    "alternativas": {
      "A": "Reflorestamento",
      "B": "Criação de reservas",
      "C": "Educação ambiental",
      "D": "Desmatamento e destruição de habitats",
      "E": "Coleta seletiva"
    },
    "gabarito": "D",
    "explicacao": "Sem habitat, muitas espécies perdem alimento e abrigo e podem se extinguir.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C44-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Biodiversidade e extinção",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Uma espécie ameaçada de extinção é aquela que:",
    "imagem": null,
    "alternativas": {
      "A": "Tem população muito grande",
      "B": "Corre risco de desaparecer da natureza",
      "C": "Só vive em zoológicos",
      "D": "Já desapareceu",
      "E": "Não tem predadores"
    },
    "gabarito": "B",
    "explicacao": "Espécies ameaçadas têm populações reduzidas e exigem medidas de proteção.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C44-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Biodiversidade e extinção",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Uma espécie exótica invasora é aquela que:",
    "imagem": null,
    "alternativas": {
      "A": "Só come plantas",
      "B": "Nunca se reproduz",
      "C": "É introduzida em um local onde não existia e prejudica as espécies nativas",
      "D": "Só vive na água",
      "E": "É nativa do local"
    },
    "gabarito": "C",
    "explicacao": "Sem predadores naturais, ela pode se multiplicar demais e desequilibrar o ecossistema.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C44-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Biodiversidade e extinção",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Qual é o objetivo das unidades de conservação, como os parques nacionais?",
    "imagem": null,
    "alternativas": {
      "A": "Permitir a caça sem controle",
      "B": "Aumentar a poluição",
      "C": "Estimular o desmatamento",
      "D": "Construir indústrias",
      "E": "Proteger áreas naturais e as espécies que vivem nelas"
    },
    "gabarito": "E",
    "explicacao": "São áreas protegidas por lei, que preservam a fauna, a flora e os recursos naturais.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C45-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Camadas da Terra e placas tectônicas",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual é a camada mais externa e sólida da Terra?",
    "imagem": null,
    "alternativas": {
      "A": "Crosta",
      "B": "Manto",
      "C": "Magma",
      "D": "Núcleo interno",
      "E": "Núcleo externo"
    },
    "gabarito": "A",
    "explicacao": "A crosta é a camada em que vivemos. Abaixo dela vêm o manto e o núcleo.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C45-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Camadas da Terra e placas tectônicas",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Os terremotos e os vulcões ocorrem com mais frequência:",
    "imagem": null,
    "alternativas": {
      "A": "Somente nos desertos",
      "B": "Somente nos polos",
      "C": "No centro de todos os continentes",
      "D": "Nas bordas das placas tectônicas",
      "E": "Somente nas ilhas"
    },
    "gabarito": "D",
    "explicacao": "O movimento e o choque entre placas liberam energia e abrem caminho para o magma.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C45-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Camadas da Terra e placas tectônicas",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "O Brasil tem poucos terremotos fortes porque:",
    "imagem": null,
    "alternativas": {
      "A": "Fica no polo",
      "B": "Está sob o oceano",
      "C": "Está sobre o limite de várias placas",
      "D": "Não tem rochas",
      "E": "Está no centro de uma placa tectônica, longe das bordas"
    },
    "gabarito": "E",
    "explicacao": "O país está no interior da Placa Sul-Americana, uma região mais estável.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C45-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Camadas da Terra e placas tectônicas",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "O material quente e pastoso que sai de um vulcão é chamado de:",
    "imagem": null,
    "alternativas": {
      "A": "Granito",
      "B": "Calcário",
      "C": "Lava",
      "D": "Sedimento",
      "E": "Areia"
    },
    "gabarito": "C",
    "explicacao": "Dentro da Terra, ele é chamado de magma. Ao sair e chegar à superfície, vira lava.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C45-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Camadas da Terra e placas tectônicas",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "A Cordilheira dos Andes se formou principalmente:",
    "imagem": null,
    "alternativas": {
      "A": "Pela queda de meteoritos",
      "B": "Pelo choque entre placas tectônicas",
      "C": "Pelo crescimento de florestas",
      "D": "Pelo acúmulo de lixo",
      "E": "Pela ação do vento apenas"
    },
    "gabarito": "B",
    "explicacao": "A Placa de Nazca se choca com a Sul-Americana e dobra e eleva as rochas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C46-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema Solar",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual é a estrela do Sistema Solar?",
    "imagem": null,
    "alternativas": {
      "A": "A Lua",
      "B": "Marte",
      "C": "Vênus",
      "D": "Júpiter",
      "E": "O Sol"
    },
    "gabarito": "E",
    "explicacao": "O Sol é a estrela central. Ele emite luz e calor, e os planetas giram ao seu redor.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C46-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema Solar",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Qual é o maior planeta do Sistema Solar?",
    "imagem": null,
    "alternativas": {
      "A": "Mercúrio",
      "B": "Vênus",
      "C": "Júpiter",
      "D": "Marte",
      "E": "Terra"
    },
    "gabarito": "C",
    "explicacao": "Júpiter é um gigante gasoso, maior que todos os outros planetas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C46-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema Solar",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Qual é o planeta mais próximo do Sol?",
    "imagem": null,
    "alternativas": {
      "A": "Netuno",
      "B": "Mercúrio",
      "C": "Marte",
      "D": "Vênus",
      "E": "Terra"
    },
    "gabarito": "B",
    "explicacao": "A ordem a partir do Sol é: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C46-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema Solar",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "A Lua é um:",
    "imagem": null,
    "alternativas": {
      "A": "Estrela",
      "B": "Cometa",
      "C": "Planeta",
      "D": "Satélite natural da Terra",
      "E": "Asteroide"
    },
    "gabarito": "D",
    "explicacao": "A Lua gira ao redor da Terra e reflete a luz do Sol.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C46-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Sistema Solar",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "O movimento de a Terra girar em torno do próprio eixo, que origina o dia e a noite, é chamado de:",
    "imagem": null,
    "alternativas": {
      "A": "Rotação",
      "B": "Eclipse",
      "C": "Translação",
      "D": "Revolução anual",
      "E": "Precessão"
    },
    "gabarito": "A",
    "explicacao": "Um giro completo dura cerca de 24 horas. A translação é o movimento em volta do Sol.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C47-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Fases da Lua e eclipses",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "As fases da Lua ocorrem porque:",
    "imagem": null,
    "alternativas": {
      "A": "A Lua produz luz própria de forma irregular",
      "B": "A sombra da Terra cobre a Lua todos os dias",
      "C": "Vemos partes diferentes da face iluminada da Lua, conforme ela gira ao redor da Terra",
      "D": "A Lua gira em torno do Sol",
      "E": "A Lua muda de tamanho"
    },
    "gabarito": "C",
    "explicacao": "A Lua sempre tem metade iluminada pelo Sol. Do nosso ponto de vista, a parte visível muda ao longo do mês.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C47-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Fases da Lua e eclipses",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "O eclipse solar acontece quando:",
    "imagem": null,
    "alternativas": {
      "A": "A Terra fica entre o Sol e a Lua",
      "B": "A Lua fica entre o Sol e a Terra",
      "C": "Há nuvens muito escuras",
      "D": "A Lua desaparece do céu",
      "E": "O Sol fica entre a Terra e a Lua"
    },
    "gabarito": "B",
    "explicacao": "A sombra da Lua cobre uma região da Terra e o Sol fica parcial ou totalmente encoberto.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C47-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Fases da Lua e eclipses",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "O eclipse lunar acontece quando:",
    "imagem": null,
    "alternativas": {
      "A": "A Terra fica entre o Sol e a Lua",
      "B": "A Lua fica entre o Sol e a Terra",
      "C": "O Sol fica entre a Terra e a Lua",
      "D": "A Lua gira em torno do Sol",
      "E": "A Terra para de girar"
    },
    "gabarito": "A",
    "explicacao": "A Lua entra na sombra da Terra.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C47-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Fases da Lua e eclipses",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Em qual fase a Lua está totalmente iluminada, do ponto de vista de quem a vê da Terra?",
    "imagem": null,
    "alternativas": {
      "A": "Quarto crescente",
      "B": "Quarto minguante",
      "C": "Eclipse solar",
      "D": "Lua nova",
      "E": "Lua cheia"
    },
    "gabarito": "E",
    "explicacao": "Na lua cheia, a Terra fica entre o Sol e a Lua, e vemos a face iluminada inteira.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C47-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Fases da Lua e eclipses",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Aproximadamente quanto tempo a Lua leva para completar um ciclo de fases?",
    "imagem": null,
    "alternativas": {
      "A": "Cerca de 7 horas",
      "B": "Cerca de 10 anos",
      "C": "Cerca de 1 dia",
      "D": "Cerca de 29 dias",
      "E": "Cerca de 1 ano"
    },
    "gabarito": "D",
    "explicacao": "As quatro fases (nova, crescente, cheia e minguante) se repetem em cerca de um mês.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C48-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Estações do ano",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "As estações do ano acontecem principalmente por causa:",
    "imagem": null,
    "alternativas": {
      "A": "Das marés",
      "B": "Da rotação da Lua",
      "C": "Do aumento do tamanho do Sol",
      "D": "Da distância fixa entre a Terra e o Sol",
      "E": "Da inclinação do eixo da Terra e do movimento de translação"
    },
    "gabarito": "E",
    "explicacao": "A inclinação do eixo faz com que cada hemisfério receba luz solar de forma diferente ao longo do ano.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C48-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Estações do ano",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Quando é verão no hemisfério sul, no hemisfério norte é:",
    "imagem": null,
    "alternativas": {
      "A": "Primavera",
      "B": "Sempre quente",
      "C": "Verão",
      "D": "Inverno",
      "E": "Outono"
    },
    "gabarito": "D",
    "explicacao": "As estações são opostas nos dois hemisférios.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C48-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Estações do ano",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "No verão, os dias são, em geral:",
    "imagem": null,
    "alternativas": {
      "A": "Sempre iguais às noites",
      "B": "Mais longos que as noites",
      "C": "Mais curtos que as noites",
      "D": "Inexistentes",
      "E": "Sempre nublados"
    },
    "gabarito": "B",
    "explicacao": "O hemisfério fica mais exposto ao Sol e recebe mais horas de luz.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C48-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Estações do ano",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "O movimento da Terra ao redor do Sol, que dura cerca de 365 dias, é a:",
    "imagem": null,
    "alternativas": {
      "A": "Rotação",
      "B": "Maré",
      "C": "Translação",
      "D": "Precessão",
      "E": "Eclipse"
    },
    "gabarito": "C",
    "explicacao": "A translação completa define o ano.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C48-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Estações do ano",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Nos equinócios, em geral:",
    "imagem": null,
    "alternativas": {
      "A": "O dia e a noite têm duração semelhante",
      "B": "Não há estações",
      "C": "Só há noite",
      "D": "O Sol não nasce",
      "E": "Só há dia"
    },
    "gabarito": "A",
    "explicacao": "Nos equinócios, os raios solares incidem igualmente nos dois hemisférios e o dia e a noite têm aproximadamente 12 horas cada.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C49-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Chuva ácida e camada de ozônio",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "A chuva ácida é causada principalmente por:",
    "imagem": null,
    "alternativas": {
      "A": "Excesso de sol",
      "B": "Gases como óxidos de enxofre e de nitrogênio, liberados pela queima de combustíveis",
      "C": "Gases nobres",
      "D": "Gás oxigênio",
      "E": "Falta de vento"
    },
    "gabarito": "B",
    "explicacao": "Esses gases reagem com a água da atmosfera e formam ácidos, que caem com a chuva.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C49-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Chuva ácida e camada de ozônio",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "Um efeito da chuva ácida é:",
    "imagem": null,
    "alternativas": {
      "A": "O aumento do ozônio",
      "B": "O aumento de nutrientes no solo",
      "C": "A diminuição do pH dos rios para valores básicos",
      "D": "A corrosão de monumentos e a acidificação de rios e solos",
      "E": "A purificação do ar"
    },
    "gabarito": "D",
    "explicacao": "A chuva ácida desgasta mármore e metais e prejudica plantas e animais aquáticos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C49-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Chuva ácida e camada de ozônio",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "A camada de ozônio é importante porque:",
    "imagem": null,
    "alternativas": {
      "A": "Filtra boa parte da radiação ultravioleta do Sol",
      "B": "Produz oxigênio",
      "C": "Aquece a Terra à noite",
      "D": "Impede a chuva",
      "E": "Gera ventos"
    },
    "gabarito": "A",
    "explicacao": "Sem a camada de ozônio, a radiação UV causaria mais câncer de pele e danos aos ecossistemas.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C49-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Chuva ácida e camada de ozônio",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Quais substâncias, usadas em geladeiras e aerossóis antigos, destruíam a camada de ozônio?",
    "imagem": null,
    "alternativas": {
      "A": "A água",
      "B": "O gás oxigênio",
      "C": "O vapor de água",
      "D": "O gás hélio",
      "E": "Os CFCs (clorofluorcarbonos)"
    },
    "gabarito": "E",
    "explicacao": "O Protocolo de Montreal baniu o uso dos CFCs.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C49-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Chuva ácida e camada de ozônio",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Uma forma de reduzir a chuva ácida é:",
    "imagem": null,
    "alternativas": {
      "A": "Aumentar a queima de carvão",
      "B": "Desmatar florestas",
      "C": "Diminuir a queima de combustíveis fósseis e usar filtros nas chaminés",
      "D": "Usar mais veículos",
      "E": "Lançar mais gases nas chaminés"
    },
    "gabarito": "C",
    "explicacao": "Menos emissão de óxidos de enxofre e de nitrogênio significa menos ácidos na atmosfera.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C50-Q1",
    "materia": "Ciências da Natureza",
    "assunto": "Saneamento básico e saúde pública",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "O saneamento básico inclui:",
    "imagem": null,
    "alternativas": {
      "A": "Apenas a construção de casas",
      "B": "Água tratada, coleta de esgoto, coleta de lixo e drenagem das águas da chuva",
      "C": "Apenas a água da chuva",
      "D": "Só a limpeza das ruas",
      "E": "Apenas a coleta de lixo"
    },
    "gabarito": "B",
    "explicacao": "Os quatro serviços juntos protegem a saúde e o ambiente.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C50-Q2",
    "materia": "Ciências da Natureza",
    "assunto": "Saneamento básico e saúde pública",
    "area": "Terra e Ambiente",
    "dificuldade": "facil",
    "enunciado": "A falta de esgoto tratado favorece doenças como:",
    "imagem": null,
    "alternativas": {
      "A": "Miopia",
      "B": "Fraturas",
      "C": "Verminoses e diarreia",
      "D": "Diabetes tipo 1",
      "E": "Insolação"
    },
    "gabarito": "C",
    "explicacao": "A água contaminada com fezes transmite parasitas e micro-organismos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C50-Q3",
    "materia": "Ciências da Natureza",
    "assunto": "Saneamento básico e saúde pública",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Como se evita a dengue?",
    "imagem": null,
    "alternativas": {
      "A": "Eliminando água parada, onde o mosquito Aedes aegypti se reproduz",
      "B": "Tomando antibiótico todo dia",
      "C": "Lavando o cabelo com frequência",
      "D": "Evitando comer carne",
      "E": "Usando agasalho"
    },
    "gabarito": "A",
    "explicacao": "O mosquito põe os ovos em água parada acumulada em pneus, vasos, garrafas e caixas-d’água sem tampa. Essa água pode estar limpa ou suja, dependendo do criadouro; o que importa é eliminar os recipientes com água acumulada.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C50-Q4",
    "materia": "Ciências da Natureza",
    "assunto": "Saneamento básico e saúde pública",
    "area": "Terra e Ambiente",
    "dificuldade": "media",
    "enunciado": "Qual medida protege contra doenças transmitidas pela água?",
    "imagem": null,
    "alternativas": {
      "A": "Beber água de rio sem tratamento",
      "B": "Compartilhar copos",
      "C": "Lavar os alimentos com água parada",
      "D": "Ferver ou tratar a água antes de beber, quando não há certeza de sua qualidade",
      "E": "Usar a água da enchente"
    },
    "gabarito": "D",
    "explicacao": "A fervura e a cloração eliminam micro-organismos.",
    "erro_comum": "",
    "revisado": "nao"
  },
  {
    "id": "C50-Q5",
    "materia": "Ciências da Natureza",
    "assunto": "Saneamento básico e saúde pública",
    "area": "Terra e Ambiente",
    "dificuldade": "dificil",
    "enunciado": "Qual doença é transmitida pelo contato com água de enchente contaminada por urina de ratos?",
    "imagem": null,
    "alternativas": {
      "A": "Dengue",
      "B": "Catapora",
      "C": "Sarampo",
      "D": "Gripe",
      "E": "Leptospirose"
    },
    "gabarito": "E",
    "explicacao": "A bactéria entra pela pele, principalmente se há feridas. Em enchentes, deve-se evitar contato com a água.",
    "erro_comum": "",
    "revisado": "nao"
  }
];
