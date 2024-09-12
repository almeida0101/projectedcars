let dados = [
    {   
        titulo: "Toyota Supra MK4",
        descricao: "Ícone dos anos 90, o Supra MK4 é um carro esportivo com motor 2JZ-GTE, famoso por sua potência e capacidade de tunagem.",
        link: "https://pt.wikipedia.org/wiki/Toyota_Supra",
        anoLancamento: 1993,
        potencia: 320,
        tags: "jdm japonês japones"
    },
    {
        titulo: "Volkswagen Gol Quadrado",
        descricao: "O Gol Quadrado foi um dos carros mais populares do Brasil, conhecido por sua robustez e versatlidade.",
        link: "https://www.noticiasautomotivas.com.br/gol-quadrado/",
        anoLancamento: 1980,
        potencia: 47,
        tags: "veio velho golzinho"
    },
    {
        titulo: "BMW M5 (G80)",
        descricao: "A BMW M5 (G80) é a última geração da série M5, um sedan de alto desempenho que combina luxo e esportividade.",
        link: "https://www.bmw.com.br/pt/all-models/m-series/m5.html",
        anoLancamento: 2019,
        potencia: 727,
        tags:"sedan bm alemao alemão"
    },
    {
        titulo: "Nissan Skyline GT-R R34",
        descricao: "O Nissan Skyline GT-R R34 é um ícone dos jogos de corrida e um dos carros esportivos japoneses mais desejados.",
        link: "https://en.wikipedia.org/wiki/Nissan_Skyline_GT-R",
        anoLancamento: 1999,
        potencia: 280,
        tags:"jdm japonês japones braian"
    },
    {
        titulo: "Porsche 911 (992)",
        descricao: "O Porsche 911 (992) é a oitava geração do icônico esportivo da Porsche, conhecido por seu desempenho e design atemporal.",
        link: "https://www.porsche.com/brasil/models/911/",
        anoLancamento: 2019,
        potencia: 450,
        tags:"alemão alemao turbo"
    },
    {
        titulo: "Ford Mustang GT",
        descricao: "O Ford Mustang GT é um clássico americano, conhecido por seu motor V8 muito robusto e design musculoso.",
        link: "https://www.ford.com.br/carros/mustang",
        anoLancamento: 2021,
        potencia: 460,
        tags:"v8 motor americano"
    },

    ];
    // Itera sobre cada carro no array e modifica a propriedade 'descricao'
for (let i = 0; i < dados.length; i++) {
    const carro = dados[i];
    if (carro.anoLancamento && carro.potencia) {
      carro.descricao += `<strong><br><br>Ano de lançamento: ${carro.anoLancamento}.<br>${carro.potencia}cv.<br></strong>`;
      delete carro.anoLancamento;
      delete carro.potencia;
    }
  }